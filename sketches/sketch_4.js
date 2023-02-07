////////////////////////////////////////////////////////////////////////////////////////////////////
// FOURTH SKETCH: interactive sketch that follows movement of user's mouse, highlighting a sphere //
// with a specular light.                                                                         //
////////////////////////////////////////////////////////////////////////////////////////////////////

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
}

// On window resize, update the canvas size
function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  ambientLight(200);

  // add a point light to showcase specular color
  // -- use mouse location to position the light
  let lightPosX = mouseX - windowWidth/2;
  let lightPosY = mouseY - windowHeight/2;

  specularColor(128, 0, 255);
  colorMode(HSB);
  pointLight(60, abs(100 - (lightPosX)/2), abs(100 - (lightPosY)/2), lightPosX, lightPosY, windowWidth);

  // use specular material with high shininess
  specularMaterial(100);
  shininess(0.1);

  sphere(windowHeight/4, 100, 100);
}