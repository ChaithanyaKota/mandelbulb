main();
initShaderProgram();
loadShader();

function main() {
  const canvas = document.querySelector("#canvas");

  const gl = canvas.getContext("webgl");
  if (!gl) {
    return;
  }

  // Vertex Shader
  const vs = `
  `;

  // Fragment shader
  const fs = `
  
  `;

}
