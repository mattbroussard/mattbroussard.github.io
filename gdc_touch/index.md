---
layout: project
title: Building Wide Intelligence Touch Kiosk UI
slideshow:
 - image: hallway_pic_shadow.jpg
 - image: screencap_composite_1.png
 - image: screencap_composite_2.png
links:
 - title: Frontend Source on GitHub
   url: https://github.com/mattbroussard/gdc_touch
 - title: Backend Source on GitHub
   url: https://github.com/mattbroussard/gdc_touch_backend
---

## About

This is the user interface that runs on the touch kiosks in the elevator lobbies of the [Bill and Melinda Gates Computer Science Complex and Dell Computer Science Hall](http://www.cs.utexas.edu/about-us/new-building) (GDC) at The University of Texas at Austin. It is a part of the Building Wide Intelligence (BWI) research project which aims to give the building a coherent intelligent presence consisting of touchscreens and robots.

The main purpose of the touchscreen interface is to provide timely and interesting information to students, faculty, and visitors. The application is also capable of dispatching robots from the BWI lab to help with various tasks.

## Features

* Keep up to date on UTCS news and events
* Navigate GDC with maps of every floor
* Find who you're looking for with a searchable directory
* Check what room your class meets in
* Learn about GDC and the Computer Science department
* Interact with Building Wide Intelligence (BWI) robots
* Wheelchair Accessible

## Frontend

The frontend is a web application which runs in a sandboxed WebKit browser. Because of the specific hardware in use in the building, touch events come through as clicks. In order to facilitate searching on the directory, an on-screen keyboard was implemented in-app.

News, events, directory, room schedule, and map data comes from static JSON files generated by a cron job that reads from a variety of other sources. Touch events are sent back through a PHP endpoint for usage pattern analysis later. BWI robot interactions are handled through a Websocket connection (via [roslibjs](https://github.com/RobotWebTools/roslibjs)) to the backend, described below.

## Backend

The backend is only partially developed right now. It is a Python-based [ROS](http://www.ros.org/) node that listens on topics published by the frontend via [rosbridge](https://github.com/RobotWebTools/rosbridge_suite) and handles requests, storing relevant information in a MySQL database.