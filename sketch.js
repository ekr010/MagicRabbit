var img1;
var tracking = true;

function preload() {
  sound = loadSound("squeak.wav");
  img1 = loadImage("rabbit.png");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(30, 125, 57);

  if (tracking) {
    rabbitX = mouseX - 25;
    rabbitY = mouseY - 25;
  }

  if (!tracking && mouseOver()) {
    rabbitX = mouseX - 25;
    rabbitY = mouseY - 25;
  }

  image(img1, rabbitX, rabbitY, 50, 50);
  
  // Text instructions
  fill(255);
  textAlign(CENTER);
  textSize(18);
  if (tracking) {
    text("Click to make the rabbit teleport away!", width / 2, 20);
  } else {
    text("Click to make the rabbit follow you!", width / 2, 20);
  }
}

function mouseClicked() {
  //teleport rabbit
  sound.play();
  tracking = !tracking;
  if (!tracking) {
    rabbitX = random(50, 350);
    rabbitY = random(50, 350);
    noLoop();
  } else {
    loop();
  }
}

function mouseOver() {
  return dist(rabbitX, rabbitY, mouseX, mouseY) < 25;
}
