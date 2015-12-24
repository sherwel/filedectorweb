#!/usr/bin/python
#coding:utf-8
import threading  
import socket  
import time   
import httplib
import json
class Listener(threading.Thread):  
    def __init__(self, port):  
        threading.Thread.__init__(self)  

        
    def run(self):  
        print("listener started")  
        while True:  



            url = "/cpuinfo"
            conn = httplib.HTTPConnection("localhost:3000")
            conn.request(method="GET",url=url)
            response = conn.getresponse()
            res= response.read()
            print 'receive json : '+res
            temp=json.loads(res)
            print str('memory used: ')+str(temp.get('usedMem'))
            print str('total memory : ')+str(temp.get('totalMem'))
            print str('free memory : ')+str(temp.get('freeMem'))
            print str('cpuUsage : ')+str(temp.get('cpuUsage'))
            time.sleep(2)
            conn.close()
            
            # print("accept a connect")  
  
lst  = Listener(3000)   # create a listen thread  
lst.start() # then start
while True:
    pass