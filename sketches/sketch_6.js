////////////////////////////////////////////////////////////////////////////////////////////////////
// SIXTH SKETCH: audio visualizer that plays/pauses three different track IDs based on the # that //
// is pressed.                                                                                    //
// '1' -> Better Off Alone, Alice Deejay                                                          //
// '2' -> Island, Seven Lions, Wooli, Nevve                                                       //
// '3' -> Endlessly, Omar Apollo                                                                  //
////////////////////////////////////////////////////////////////////////////////////////////////////

let song1;
let song2;
let song3;
let fft;

let w;

function preload() {
  soundFormats('mp3');
  song1 = loadSound('assets/better_off_alone.mp3');
  song2 = loadSound('assets/island.mp3');
  song3 = loadSound('assets/endlessly.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  fft = new p5.FFT(0.9, 512);
  w = windowWidth / 512;
}

// On window resize, update the canvas size
function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
  w = windowWidth / 512;
}

function keyTyped() {
  // Stopping songs if another song is selected
  if (song1.isPlaying()) {
    song1.stop();
  } else if (song2.isPlaying()) {
    song2.stop();
  } else {
    song3.stop();
  }

  // Changing track IDs
  if (keyCode === 49) {
    console.log('1 pressed');
    if (song1.isPlaying()) {
      song1.pause();
    } else {
      song1.play();
    }
  }
  if (keyCode === 50) {
    console.log("2 pressed");
    if (song2.isPlaying()) {
      song2.pause();
    } else {
      song2.play();
    }
  }
  if (keyCode === 51) {
    console.log("3 pressed");
    if (song3.isPlaying()) {
      song3.pause();
    } else {
      song3.play();
    }
  }

  // Using spacebar to pause
  if (keyCode === 32) {
    song1.pause();
    song2.pause();
    song3.pause();
  }
}

function draw() {
  colorMode(RGB);
  background(0);
  let spectrum = fft.analyze();
  let waves = fft.waveform();
  noStroke();
  for (let i = 0; i < spectrum.length; i++) {
    let amp = spectrum[i];
    let energy = fft.getEnergy(i);
    let newWaveForm = map(waves[i], -1, 1, 0, 255);
    let y = map(amp, 0, spectrum.length, windowHeight, 0);
    let x = map(i, 0, spectrum.length, i, windowWidth * w);

    let ampMeasure = map(amp, 0, spectrum.length, 0, 255);

    ////////////////////////////
    // DIFFERENT COLOR THEMES //
    ////////////////////////////

    // LESS STROBE-Y
    // More blue-centric color theme
    // fill(255 - energy, newWaveForm, energy);

    // More purple-centric color theme
    // fill(newWaveForm, 255 - energy, energy);

    // MORE STROBE-Y
    // More strobe-y purple-centric color theme
    // fill(newWaveForm, 255 - energy, ampMeasure);

    // More strobe-y green-centric color theme
    // fill(ampMeasure, newWaveForm, 255 - energy);

    // !!! Strobe-y orange-green theme !!!
    fill(newWaveForm, ampMeasure, 255 - energy);

    // Strobe-y light blue-purple theme
    // fill(newWaveForm, ampMeasure, energy);

    rect(x, y, w, windowHeight - y);
  }
}