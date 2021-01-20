(this["webpackJsonphomelabify-frontend"]=this["webpackJsonphomelabify-frontend"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),i=n(6),s=n.n(i),u=(n(13),n(3)),o=n.n(u),l=n(4),j=n(2),h=(n.p,n(15),n(7)),b=n.n(h),p=function(e){return Object(c.jsx)("div",{className:"plotwrapper",children:Object(c.jsx)(b.a,{className:"linegraph",data:e.graphData,layout:e.layout,config:e.config})})},f=function(e){var t=Object(r.useState)({}),n=Object(j.a)(t,2),a=n[0],i=n[1],s=Object(r.useState)({}),u=Object(j.a)(s,2),h=u[0],b=u[1],p=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://192.168.0.21:4000/api/device/net").then((function(e){return e.json()}));case 2:t=e.sent,i({ip:t[0].ip,hostname:t[0].hostname});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://192.168.0.21:4000/api/healthcheck").then((function(e){return e.json()}));case 2:t=e.sent,b({influxdb:t[0].influxdb_status,measurement:t[0].measurement_status,alert:t[0].alert_status});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){p(),f();var e=setInterval((function(){p(),f()}),1e4);return function(){return clearInterval(e)}}),[]),Object(c.jsxs)("div",{className:"top-content",children:[Object(c.jsxs)("div",{className:"top-content-status",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("b",{children:"IP "})," ",a.ip]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("b",{children:"Hostname "})," ",a.hostname]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("b",{children:"influxdb "}),Object(c.jsx)("span",{className:h.influxdb?"green":"red",children:h.influxdb?"running":"not running"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("b",{children:"measurement.py "}),Object(c.jsx)("span",{className:h.measurement?"green":"red",children:h.measurement?"running":"not running"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("b",{children:"alert.py "}),Object(c.jsx)("span",{className:h.alert?"green":"red",children:h.alert?"running":"not running"})]})]}),Object(c.jsxs)("div",{className:"top-content-buttons",children:[Object(c.jsx)("button",{onClick:function(){fetch("http://192.168.0.21:4000/api/control/alert")},children:"Toggle Alerts"}),Object(c.jsx)("button",{onClick:function(){fetch("http://192.168.0.21:4000/api/control/measurement")},children:"Toggle Measurement"})]})]})};var d=function(){var e=Object(r.useState)(null),t=Object(j.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(null),s=Object(j.a)(i,2),u=s[0],h=s[1],b=Object(r.useState)(null),d=Object(j.a)(b,2),m=d[0],O=d[1],x=Object(r.useState)(null),v=Object(j.a)(x,2),g=v[0],y=v[1],k=Object(r.useState)(null),D=Object(j.a)(k,2),N=D[0],_=D[1],w=Object(r.useState)(null),S=Object(j.a)(w,2),C=S[0],I=S[1],P=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,c,r,i,s,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([fetch("http://192.168.0.21:4000/api/temperature/celsius").then((function(e){return e.json()})),fetch("http://192.168.0.21:4000/api/temperature/humidity").then((function(e){return e.json()})),fetch("http://192.168.0.21:4000/api/device/cpu").then((function(e){return e.json()})),fetch("http://192.168.0.21:4000/api/device/memory").then((function(e){return e.json()})),fetch("http://192.168.0.21:4000/api/device/disk").then((function(e){return e.json()}))]);case 2:t=e.sent,n=Object(j.a)(t,5),c=n[0],r=n[1],i=n[2],s=n[3],u=n[4],a(F("bar",c,["temp_c"])),h(F("bar",r,["humidity"])),O(F("bar",i,["cpu_freq_current"])),y(F("bar",i,["cpu_percent"])),_(F("line",s,["mem_free","mem_used"])),I(F("line",u,["disk_free","disk_used"]));case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(e,t,n){var c=[];switch(n.length){case 1:c=[{type:e,y:M(t,n[0]),x:M(t,"time")}];break;case 2:c=[{type:e,name:n[0],y:M(t,n[0]),x:M(t,"time")},{type:e,name:n[1],y:M(t,n[1]),x:M(t,"time")}]}return c},M=function(e,t){return e.map((function(e){return e[t]}))};Object(r.useEffect)((function(){P();var e=setInterval((function(){P()}),1e4);return function(){return clearInterval(e)}}),[]);var T={scrollZoom:!0};return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("header",{className:"App-header",children:Object(c.jsx)("h1",{children:"Homelabify"})}),Object(c.jsx)(f,{}),Object(c.jsxs)("section",{className:"bottom-content",children:[Object(c.jsx)(p,{layout:{title:"Rack | Temperature in \xb0C"},graphData:n,config:T}),Object(c.jsx)(p,{layout:{title:"Rack | Humidity in %"},graphData:u,config:T}),Object(c.jsx)(p,{layout:{title:"Device | CPU Frequency in Mhz"},graphData:m,config:T}),Object(c.jsx)(p,{layout:{title:"Device | CPU Load in %"},graphData:g,config:T}),Object(c.jsx)(p,{layout:{title:"Device | Memory in MB"},graphData:N,config:T}),Object(c.jsx)(p,{layout:{title:"Device | Disk in Byte"},graphData:C,config:T})]})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(d,{})}),document.getElementById("root")),m()}},[[23,1,2]]]);
//# sourceMappingURL=main.d71e1d9a.chunk.js.map