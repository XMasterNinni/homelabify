#!/usr/bin/env python3
from pid import PidFile
from influxdb import InfluxDBClient
from datetime import datetime
from subprocess import check_output, Popen
import time
import os
import pigpio
import configparser
import psutil

folder = os.path.dirname(__file__)
    
with PidFile('alert', piddir=os.path.join(folder, '.pid/')) as p:

    #read settings file
    settings = configparser.ConfigParser()
    settings.read(os.path.join(folder, 'settings.ini'))

    #pigpio instance
    pi = pigpio.pi()

    #define sampling period
    sampling_period = settings['ALERTS']['SamplingPeriod']

    #define influxdb
    influx_server = settings['INFLUXDB']['Server']
    influx_port = settings['INFLUXDB']['Port']
    influx_db = settings['INFLUXDB']['Database']
    influx_client = InfluxDBClient(host=influx_server, port=influx_port, database=influx_db)

    #define LED
    red_led_pin = settings['ALERTS']['RedLedPin']
    green_led_pin = settings['ALERTS']['GreenLedPin']

    def check_alerts():
        temperature_query = influx_client.query('select last(temp_c) from rack_temp').get_points()
        for item in temperature_query:
            temperature = item["last"]
        influx_query = influx_client.query('select last(influxdb) from health_check').get_points()
        for item in influx_query:
            influx = item["last"]
        measurements_query = influx_client.query('select last("measurements") from health_check').get_points()
        for item in measurements_query:
            measurements = item["last"]

        if (temperature > 45 or influx == False or measurements == False):
            # print("ALERT: something is wrong!")
            return False
        else:
            return True

    #loop and write data to database
    while True:
        if check_alerts():
            pi.write(int(red_led_pin), 0)
            pi.write(int(green_led_pin), 1)
        else:
            pi.write(int(red_led_pin), 1)
            pi.write(int(green_led_pin), 0)

        time.sleep(int(sampling_period))
