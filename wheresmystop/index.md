---
layout: project
title: Where's My Stop?
slideshow:
 - image: 3step2.jpg
 - image: push2.jpg
 - html5: wheresmystop-websitevid.mp4
   format: video/mp4
   autoplay: true
   thumbnail: wms-vid-thumb.png
---

## About

For my open-ended final project in Dr. [Emmett Witchel](https://www.cs.utexas.edu/users/witchel/378/schedule.html)'s **iOS Mobile Computing** class, I built a working prototype of **Where's My Stop?**, a public transit app that monitors your location in the background and sends a push notification when it's time to get off the bus.

The motivation for building it was that other existing public transporation apps at the time were largely geared around finding which bus to take and where to get on, but did little to help you once you were on the bus. When using transit in an unfamiliar area, I found myself watching my location in Google Maps to ensure I didn't miss my stop, which was wasteful of my attention and battery life.

## Features

The app consumes transit map and schedule data in the stardard [GTFS](https://developers.google.com/transit/gtfs/) format and populates a Core Data database with the data. It uses Core Data indexed properties and a custom algorithm to efficiently and accurately estimate where along the scheduled route your current location is and extrapolate from schedule data how much time is remaining.

To use the app, a user first chooses a route from a list of routes servicing the bus stops located near them. Then, they select their destination from a list of stops serviced by that route. Finally, they can observe their progress along the route on a map and see how many stops and approximately how many minutes remain. If they leave the app, location monitoring continues in the background and the user will receive a push notification letting them know when they are approaching their stop.

## Technologies

- Objective-C
- UIKit
- Core Data
- Core Location
- MapKit
- [GTFS](https://developers.google.com/transit/gtfs/)

## Discontinuation

After the conclusion of the class, I intended to continue development of **Where's My Stop** and eventually launch it on the App Store. However, I decided to discontinue work on it and pursue other projects in Summer 2015 after several existing and more fully-featured public transportation apps (most prominently, [Transit](http://transitapp.com/)) added similar transit alert features and it became clear that my app would not be able to compete.
