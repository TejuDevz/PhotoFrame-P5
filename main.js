function preload() {}

function setup() {
  var canvas = createCanvas(640, 480);
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  image(video, 55, 40, 550, 430);
  fill(0, 255, 0);
  rect(90, 20, 460, 20);

  fill(0, 255, 0);
  rect(90, 450, 460, 20);

  fill(0, 255, 0);
  rect(30, 40, 26, 400);

  fill(0, 255, 0);
  rect(580, 40, 26, 400);

  fill(255, 255, 0);
  rect(10, 10, 100, 100);

  fill(255, 255, 0);
  rect(520, 10, 100, 100);

  fill(255, 255, 0);
  rect(10, 370, 100, 100);

  fill(255, 255, 0);
  rect(520, 370, 100, 100);
}

function take_snapshot() {
  save("camer_image.png");
}
