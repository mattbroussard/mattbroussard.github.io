---
layout: project
title: Tetris AI
slideshow:
 - html5: tetris1.mp4
   format: video/mp4
   thumbnail: projects_hero_progressive.jpg
   autoplay: true
---

## About

For Dr. [Calvin Lin](http://www.cs.utexas.edu/~lin/)'s **Data Structures and Algorithms: Honors** class, I built a simple reflex agent in Java that plays Tetris by computing a cost function for each possible placement of a given piece and choosing the placement that minimizes the cost.

This cost function is defined as a linear combination of features, each of which quantifies a different way the board can be made "bad". Because this project is still used, I won't go into too much detail here about what specific features I used and I can't publish my code.

In addition to the "forward" AI that plays the game, I also adapted the aforementioned cost function technique into an adversarial AI that chooses pieces for a human player based on which piece has the worst "best" placement. To adjust the difficulty level, the player can choose a proportion of the time that the adversarial AI will be used. The remaining portion of the time, pieces are chosen at random. The game becomes very difficult and frustrating to play with the difficulty level set above 60%, and seems nearly impossible at 100%.