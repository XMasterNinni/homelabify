#!/usr/bin/env python3
from influxdb import InfluxDBClient
from datetime import datetime
from subprocess import check_output, Popen
import time
import os
import configparser
import psutil


#read settings file
settings = configparser.ConfigParser()
settings.read('settings.ini')

#define sampling period
sampling_period = settings['HEALTHCHECKS']['SamplingPeriod']

#define influxdb
influx_server = settings['INFLUXDB']['Server']
influx_port = settings['INFLUXDB']['Port']
influx_db = settings['INFLUXDB']['Database']
influx_client = InfluxDBClient(host=influx_server, port=influx_port, database=influx_db)

def check_measurements():
    return os.path.exists(".pid/measurements.pid")

def check_alert():
    return os.path.exists(".pid/alert.pid")

def check_influx():
    for process in psutil.process_iter():
        if process.name == ['influxd']:
            return True
        else:
            return False
    

#get data points and format for influxdb
def get_data_points(time_stamp):
    measurement = check_measurements()
    alert = check_alert()
    influxdb = check_influx()

    data_points = [
        {
            "measurement": "health_check",
            "time": time_stamp,
            "fields": {
                "measurements.py": measurement,
                "alert.py": alert,
                "influxdb": influxdb
            }
        }
    ]
    return data_points

#loop and write data to database
while True:
    time_stamp = datetime.utcnow().isoformat()
    data_points = get_data_points(time_stamp)
    influx_client.write_points(data_points)
    print("writing health-checks to db...")
    print(data_points)
    time.sleep(int(sampling_period))
