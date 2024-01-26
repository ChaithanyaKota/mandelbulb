main();


function main() {
  const canvas = document.querySelector("#canvas");
  const gl = canvas.getContext("webgl");
  if (!gl) {
    return;
  }


  var program = webglUtils.createProgramFromScripts(gl, ["vertex-shader-3d", "fragment-shader-3d"]);

  const positionAttributeLocation = gl.getAttribLocation(program, "a_position");

  // buffer 
  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    -1, -1,
    1, -1,
    -1, 1,
    -1, 1,
    1, -1,
    1, 1,
  ]), gl.DYNAMIC_DRAW);

  webglUtils.resizeCanvasToDisplaySize(gl.canvas);
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  gl.useProgram(program);

  var resolution = gl.getUniformLocation(program, 'iResolution');
  var time = gl.getUniformLocation(program, 'iTime');


  function render(scene) {
    webglUtils.resizeCanvasToDisplaySize(gl.canvas);


    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.uniform3fv(resolution, [gl.canvas.width, gl.canvas.height, 0]);

    scene /= 1000;

    gl.uniform1f(time, scene);
    
   

    var size = 2;
    var type = gl.FLOAT;
    var normalize = false; 
    var stride = 0; 
    var offset = 0;

    gl.vertexAttribPointer(
      positionAttributeLocation,
      size,
      type,
      normalize,
      stride,
      offset,
    );

    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);


    gl.drawArrays(
      gl.TRIANGLES,
      0,
      6,
    );
    window.requestAnimationFrame(render);
  }
  window.requestAnimationFrame(render);
}


