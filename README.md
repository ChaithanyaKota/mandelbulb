# 3d mandelbulb


https://github.com/chaithanyakota/mandelbulb/assets/86480711/cf6efb1a-f687-4b30-a09d-ce37048588c1

## Mandelbulb Mathematics

The Mandelbulb is generated using an iterative process based on the Mandelbrot set. The formula for the Mandelbulb is given by:

$`z_{n+1} = z^8_n + C`$

Where:
- $`Z_n`$ is a complex number representing the current iteration,
- $`C`$ is a constant complex number (initially set to the coordinates in the 3D space),
- The exponent 8 is what distinguishes the Mandelbulb from the Mandelbrot set.

This iteration is performed until $` |Z_n| `$ exceeds a certain threshold or a maximum number of iterations is reached. The resulting value determines the color of the corresponding pixel in the image.
