---
layout: project
title: Album Lists for Spotify
slideshow:
 - image: albums_screenshot1_progressive.jpg
links:
 - title: Live App
   url: https://albums.mattb.io/
 - title: Source on GitHub
   url: https://github.com/mattbroussard/spotify-albums
---

## About

I primarily think of music in terms of albums, but Spotify's options for library organization are mostly centered around tracks and playlists. The options for organizing albums are limited to alphabetical and date-added sorting. I wanted a way to group albums the way playlists allow grouping tracks.

So I made this: a static, single-page webapp that uses the Spotify API to display the albums represented in a playlist. It provides a different view into the existing organizational structures provided by Spotify. Albums are shown in the order they are represented in each playlist. When you click on one, it opens the album in the Spotify app.

Built in my spare time over several weekends, I used this project to learn more about TypeScript, React, Redux, and CSS3 Flexbox, as well as modern JavaScript tooling including including NPM and Webpack.

## Features

* Clicking album art directly opens the album in the Spotify app
* Since the client talks directly to the Spotify API using CORS, no server-side logic is required.
* Caches data between page reloads using `localStorage`
* Allows user to search through their playlists

## Possible improvements

* HTML5 offline support
* More responsive layout usable on mobile
* Thin server for OAuth so that it's possible to use refresh tokens
* More sorting options

## Technologies

* TypeScript
* React
* Redux
* HTML
* CSS3 Flexbox
* jQuery
* [Spotify API](https://developer.spotify.com/web-api/)

## Acknowledgements

[Spotify](https://www.spotify.com/) is a registered trademark of Spotify AB. The albums and album art portrayed in the screenshot above are the property of their respective owners.
