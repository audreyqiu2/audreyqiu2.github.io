///////////////////////////////////////////////////////////////////////////////////////////////
// SECOND SKETCH: random splatters of paint that appear in random sizes and locations on the //
// canvas.                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////

function setup() {
  createCanvas(windowWidth, windowHeight);
}

// On window resize, update the canvas size
function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  frameRate(6);
  if (count < 10) {
      drawSplatter();
  }
}

let range = new Array(400);
let count = 0;

function drawSplatter() {
  // Random range for the splatter
  for (let i = 0; i < range.length; i++) {
      range[i] = floor(randomGaussian(0, windowHeight/20));
  }

  // Get random x and y locations for the splatter
  translate(windowWidth/2 + random(-windowWidth/2, windowWidth/2), windowHeight/2 + random(-windowHeight/2, windowHeight/2));

  // Setting random color for the splatter
  let randomHue = random(200, 360);
  colorMode(HSB);
  stroke(randomHue, 75, 100);

  // Draw the splatter
  for (let i = 0; i < range.length; i++) {
      rotate(TWO_PI / range.length);
      let dist = range[i];
      line(0, 0, dist, 0);
   }
  count++;
}