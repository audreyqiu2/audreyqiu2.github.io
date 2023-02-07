///////////////////////////////////////////////////////////////////////////////////////////////////
// FIFTH SKETCH: audio player that plays/pauses the song "Better Off Alone" by Alice Deejay when //
// any key is pressed.                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////

let song;

function preload() {
  soundFormats('mp3');
  song = loadSound('assets/better_off_alone.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

// On window resize, update the canvas size
function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
  if (song.isPlaying()) {
    song.pause();
    // background(100);

    // Analyze for BPM --> show oscillating waves
    // Analyze for key --> color

  } else {
    song.play();
    background(0);
  }
}
