///////////////////////////////////////////////////////////////////////////////
// FIRST SKETCH: a circular pattern with different colored circles along the //
// circumference of the circle                                               //
///////////////////////////////////////////////////////////////////////////////

function setup() {
  createCanvas(windowWidth, windowHeight);
}

// On window resize, update the canvas size
function windowResized () {
    resizeCanvas(windowWidth, windowHeight);
  }

function draw() {
  background(0);

  let angle = 0;  // 0 would still work here
  let pointCount = 6;
  let diameter = 200;
  noFill();

  stroke('#FFFFFF');
  for (let i = angle; i < TWO_PI + angle; i += TWO_PI / 30) {
      let x = diameter / 2 * Math.cos(i) + width / 2;
      let y = diameter / 2 * Math.sin(i) + height / 2;
      circle(x, y, diameter)
  }

  stroke('#FF6699');
  for (let i = angle; i < TWO_PI + angle; i += TWO_PI / 40) {
      let x = diameter / 2 * Math.cos(i) + width / 2;
      let y = diameter / 2 * Math.sin(i) + height / 2;
      circle(x, y, diameter)
  }

  stroke('#8BC34A');
  for (let i = angle; i < TWO_PI + angle; i += TWO_PI / 28) {
      let x = diameter / 2 * Math.cos(i) + width / 2;
      let y = diameter / 2 * Math.sin(i) + height / 2;
      circle(x, y, diameter)
  }

  stroke('#FFEB3B');
  for (let i = angle; i < TWO_PI + angle; i += TWO_PI / 25) {
      let x = diameter / 2 * Math.cos(i) + width / 2;
      let y = diameter / 2 * Math.sin(i) + height / 2;
      circle(x, y, diameter)
  }

  stroke('#673AB7');
  for (let i = angle; i < TWO_PI + angle; i += TWO_PI / 60) {
      let x = diameter / 2 * Math.cos(i) + width / 2;
      let y = diameter / 2 * Math.sin(i) + height / 2;
      circle(x, y, diameter)
  }

  stroke('#2396F1');
  for (let i = angle; i < TWO_PI + angle; i += TWO_PI / 20) {
      let x = diameter / 2 * Math.cos(i) + width / 2;
      let y = diameter / 2 * Math.sin(i) + height / 2;
      circle(x, y, diameter)
  }
}

