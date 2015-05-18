---
layout: project
title: Raytracer
slideshow:
 - image: projects_hero_progressive.jpg
 - image: teapot_progressive.jpg
 - image: patio_progressive.jpg
 - image: easy3a_progressive.jpg
 - image: sphere_progressive.jpg
 - image: sphere_refract_progressive.jpg
---

## About

For my final project in Dr. [Don Fussell](http://www.cs.utexas.edu/~fussell/)'s **Computer Graphics** class, I built a robust raytracer that implements the [Whitted illumination model](http://dl.acm.org/citation.cfm?id=807419) and supports a wide variety of object and light types in order to render complex scenes. To aid in implementing the raytracer, Dr. Fussell provided an FLTK-based graphical UI for configuring various options, a parser for a simple text-based scene specification format, and an OpenGL-based debugging tool.

## Ray Tracing

Ray tracing is a rendering technique that produces images by simulating the approximate physical interactions of photons with objects in a scene. Since the paths of photons from light sources, though the scene, to the viewer's eye are time-reversible, photons are instead traced outward from the center of projection through each pixel into the scene. In accordance with the [Whitted illumination model](http://dl.acm.org/citation.cfm?id=807419), these photons are assumed to behave as rays, traveling in straight lines from an origin until they intersect an object.

At the point of intersection, the ray's color can be computed using a combination of the [Phong shading model](http://en.wikipedia.org/wiki/Phong_shading), which incorporates the diffuse, specular, and emissive reflective properties of the object's material, the ambient light in the scene, and the colors of rays recursively traced outward from the intersection point modeling reflection and refraction.

## Objects

To render an object in a scene using a raytracer, one simply needs:

1. The material properties of the object (potentially interpolated along its surface)
2. A way to compute whether and where a particular ray intersects the object
3. A way to compute the vector normal to the surface at the point of intersection

My raytracer supports boxes, spheres, cones, cylinders, and arbitrary triangle meshes. The most interesting of these is the triangle mesh, because it allows the approximation of very complex shapes. My implementation checks each face of such a mesh separately for intersections, using barycentric coordinates both for the intersection check and for the interpolation of material properties and normals (allowing for smooth shading and a less "faceted" appearance).

I support objects having either a single set of material properties, a set of material properties per vertex (which are then interpolated at the point of a ray's intersection), or a texture map. A texture map allows the coloring of points on a surface to be encoded in a PNG or BMP image. To smooth the appearance of such texture maps, I implemented [bilinear interpolation](http://en.wikipedia.org/wiki/Bilinear_interpolation).

In addition to supporting arbitrary triangle meshes in the raytracer itself, I also wrote a Python script to convert polygon meshes in the standard OBJ format to the .ray format prescribed by the provided parsing code.

## Lighting

As mentioned above, my raytracer implements the [Whitted illumination model](http://dl.acm.org/citation.cfm?id=807419), which incorporates the [Phong shading model](http://en.wikipedia.org/wiki/Phong_shading). The Phong model allows for an arbitrary number of light sources, and as such so does my raytracer. I support two kinds of light sources:

- **Point lights**, which emit light in all directions from a point, with quadratic distance attenuation
- **Directional lights**, which emit light in only one direction, with no notion of distance or position

Shadows are approximated by attenuating the Phong contributions of particular light sources according to whether the path from the intersection point to the light source is obstructed. This is determined using the same ray-object intersection checking code used for the primary raytracing task.

## Environment Mapping

In the real world, objects do not exist in a vacuum. However, in a raytracing setting, it is not always feasible to model all surfaces in the environment that would be visible in a scene. Instead, we model some objects, and leave the rest to be the "background". This background is by default black, since rays that do not intersect any object will travel to infinity and never acquire color.

However, since a black background gets boring quickly, I implemented [cube mapping](http://en.wikipedia.org/wiki/Cube_mapping). With this, rays that travel to infinity are colored according to their intersection with an imaginary, infinitely large cube with a texture map on each of its six faces. With proper interpolation and texture construction, such an environment map can provide a seamless background, no matter which way the viewer is facing.

## Antialiasing

Sometimes tracing only one ray per pixel creates "[jaggies](http://en.wikipedia.org/wiki/Jaggies)" in the resulting image because of small details such as edges that are smaller than one pixel in size. There are many techniques to mitigate this, but one simple one that I implemented is grid [supersampling](http://en.wikipedia.org/wiki/Supersampling), wherein each pixel in an affected region is resampled with multiple rays, laid out in a grid of subpixels, and the resulting colors are averaged.

## Performance Optimizations

As one might infer, raytracing can be a computationally expensive operation, owing to many multiplicative factors, such as the number of pixels, recursion depth, and number of objects that must be checked for intersections of each ray. To improve the performance of my raytracer, I explored two approaches:

First, I split the task over multiple threads. Raytracing lends itself well to this type of parallelization because the computation of each pixel's color is independent from the computations for any other pixel. Since the scene graph is primarily a read-only structure, very little locking is needed.

Secondly, I implemented a [*k*-d tree](http://en.wikipedia.org/wiki/K-d_tree) to reduce the number of intersections that would need to be computed for each ray. This optimization has an extremely pronounced impact with scenes containing a large number of triangle mesh faces. The *k*-d tree is a spatial data structure that allows the program to avoid testing intersections with objects that a given ray will not travel near. It works by recursively subdividing the scene's bounding box with axis-aligned planes. At each level of the tree traversal, it is possible to tell whether a ray will enter neither, one, or both subtrees' bounding boxes.

## Acknowledgement

In some of the raytraced images above, I use cube maps created by [Emil Persson](http://www.humus.name/index.php?page=Textures) under a [Creative Commons Attribution 3.0 Unported License](http://creativecommons.org/licenses/by/3.0/).