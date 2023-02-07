//////////////////////////////////////////////////////////////////////////////////////////////
// THIRD SKETCH: infinite pulsing and breathing design of circular patterns that lie within //
// circumference of the outer and inner most circles.                                       //
//////////////////////////////////////////////////////////////////////////////////////////////

// Create a new canvas to the browser size
function setup () {
  createCanvas(windowWidth, windowHeight);
}

// On window resize, update the canvas size
function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}

let colorCounter = 0;

// Render loop that draws shapes with p5
function draw(){
  // Black background
  background(0);

  // Center of screen
  const px = windowWidth / 2;
  const py = windowHeight / 2;

  // We will scale everything to the minimum edge of the canvas
  const minDim = min(windowWidth, windowHeight);


  // Get time in seconds
  const time = millis() / 1000;
  const duration = 5;

  // Get a 'playhead' from 0..1
  // We use modulo to keep it within 0..1
  const playhead = time / duration % 1;

  // Get an animated value from 0..1
  // We use playhead * 2PI to get a full rotation
  const anim = sin(playhead * PI * 2) * 0.5 + 0.5;

  // Create an animated thickness for the stroke that
  const thickness = minDim * 0.08 * anim;

  // Turn off fill
  noFill();

  // Turn on stroke and make it white
  colorMode(HSB);
  stroke(colorCounter % 360, 100, 100);
  colorCounter++;

  // Apply thickness
  strokeWeight(thickness);

  let diameter = windowHeight/2 ;
  let angle = 0;
  for (let i = angle; i < TWO_PI + angle; i += TWO_PI / 60) {
      let x = diameter / 3 * Math.cos(i) + width / 2;
      let y = diameter / 3 * Math.sin(i) + height / 2;
      circle(x, y, diameter)
  }
}
