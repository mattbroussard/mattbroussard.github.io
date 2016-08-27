---
layout: project
title: GDC Quadcopter Demos
slideshow:
 - image: projects_hero_progressive.jpg
 - youtube: 9EKgDr_dh-8
links:
 - title: Source on GitHub
   url: https://github.com/utexas-air-fri/ardrone_fly
---

## About

This project was born of [Robert Lynch](http://robertlyn.ch/)'s and my work in the Autonomous Intelligent Robotics [Freshman Research Initiative](http://cns.utexas.edu/fri) (FRI) stream at UT as an introductory foray with the long term goal of developing autonomous airborne systems for the Building Wide Intelligence (BWI) project, which aims to give the [Gates-Dell Computer Science Complex](http://www.cs.utexas.edu/about-us/new-building) (GDC) a coherent intelligent presence consisting of touchscreens and robots.

We used the existing [ardrone_autonomy](https://github.com/AutonomyLab/ardrone_autonomy) open source [ROS](http://www.ros.org/) wrapper to build human and autonomous control interfaces for the Parrot AR.Drone 2.0 quadcopter (though our code could be easily adapted to another platform). We developed four different control methods, which could be switched between using a button on the wiimote. We also developed a simple webpage using [rosbridge](https://github.com/RobotWebTools/rosbridge_suite) to display information onscreen about which control method was in use and how much battery was remaining on the quadcopter.

To gain publicity for the BWI project and the FRI program, during Spring 2014 we conducted weekly demos of our work in the GDC Atrium. During these demos, we let students and visitors fly the quadcopter using the Leap Motion control method while one of us held the wiimote to take over if they did something unsafe. We challenged visitors to pilot the quadcopter through hoops and obstacles. We also let visitors experiment with "controlling" the quadcopter by moving a colored object that would be tracked by the quadcopter's camera.

Our work was supervised by [Dr. Peter Stone](http://www.cs.utexas.edu/~pstone/) and [Dr. Matteo Leonetti](http://www.cs.utexas.edu/~matteo/).

## Control Methods

### Wiimote

The simplest and most expressive human control method uses a [Nintendo Wiimote](http://www.amazon.com/dp/B000IMWK2G) controller. The controls are bound as follows:

* Accelerometer: steering and velocity control
* D-pad: altitude
* 1 and 2: yaw adjustment
* \+ and -: takeoff and landing
* A: hovering and flip animations
* Trigger: control method multiplexer switching

### Leap Motion Controller

The clumsier but arguably more fun human control method uses a [Leap Motion Controller](http://www.leapmotion.com/). With this control method, the user could control the velocity and steering of the quadcopter by adjusting the tilt of their hand held above the controller. We developed the [rosleap](https://github.com/utexas-air-fri/rosleap) package as a wrapper for the Leap Motion SDK.

### Object Following

For this autonomous control method, we use the [CMVision](http://wiki.ros.org/cmvision) blob detector to track the position and size of a colored object in the camera frame and [OpenCV](http://opencv.org/)'s standard [Kalman Filter](http://en.wikipedia.org/wiki/Kalman_filter) implementation to reduce noise. Using this information, we modulate the velocity and steering of the quadcopter in 3D to maintain a position facing the object at a designated distance (i.e. keeping the object's blob centered in the frame and at a specific size).

### Hoop Trick

To extend our object following work for our FRI final project, we developed a demo where the quadcopter could track the position of a hoop, steer toward it, fly through it, then perform a maneuver (such as a flip or simply landing). This was accomplished by attaching two colored markers to the outside edges of the hoop, tracking them independently, then steering toward the midpoint of them. Once the markers were in the desired positions in the frame for a specified time period, the quadcopter moves forward for a specified duration and then lands.

For a number of environmental reasons and in part because of the crudeness of our technique, this demo is quite rough, but does work. For this reason, we do not perform it in the Atrium as we don't deem it safe enough to be done with many bystanding visitors.

## Hardware

* [Parrot AR.Drone 2.0](http://ardrone2.parrot.com/), $300
* [Nintendo Wiimote](http://www.amazon.com/dp/B000IMWK2G), $20
* [Leap Motion Controller](http://www.leapmotion.com/), $80

## Technologies & Libraries

* C++
* [OpenCV](http://opencv.org/)
* [CMVision](http://wiki.ros.org/cmvision)
* [ROS](http://www.ros.org/)
* [Leap Motion](http://www.leapmotion.com/) SDK
* [wiimote](http://wiki.ros.org/wiimote) ROS package
* [ardrone_autonomy](https://github.com/AutonomyLab/ardrone_autonomy)

## Press

Our demonstrations were highlighted in several press features:

* "[Meet Two Robot-Programming Sophomores](http://cns.utexas.edu/news/meet-two-robot-programming-sophomores)" on the UT College of Natural Sciences Blog (May 2, 2014)
* "[Quadcopters!](https://www.cs.utexas.edu/blog/quadcopters)" on the UT Department of Computer Science Student Blog (March 31, 2014)

## Support

If you have questions or comments, please feel free to [contact me](http://mattb.io/contact).
