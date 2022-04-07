// VARIABLES
let x = 0;
let y = 0;
let s = 1;

let xMiddle = canvas.width / 2;
let yMiddle = canvas.height / 2;
let xMax = canvas.width;
let yMax = canvas.height;

let xStCloud = xMax;
let yStCloud = 0;
let xGmCloud = xMax;
let yGmCloud = 30;
let sCloud = 1;
let cloudDirection = "cloudRight";

background(255);
textSize(25 * s);

// WELCOME SCREEN
function screenStart() {
  background(104, 155, 163);
  strokeWeight();
  fill(255);

  /* 
    Clouds: Design
    xStCloud, yStCloud — coordinates of x, y
    sCloud — cloud's scale
  */
  function screenStartClouds(xStCloud, yStCloud, sCloud) {
    ellipse(xStCloud - 150 * sCloud, yStCloud + 80 * sCloud, 50 * sCloud);
    ellipse(xStCloud - 110 * sCloud, yStCloud + 60 * sCloud, 60 * sCloud);
    ellipse(xStCloud - 120 * sCloud, yStCloud + 100 * sCloud, 70 * sCloud);
    ellipse(xStCloud - 70 * sCloud, yStCloud + 70 * sCloud, 75 * sCloud);
    ellipse(xStCloud - 80 * sCloud, yStCloud + 100 * sCloud, 60 * sCloud);

    ellipse(xStCloud - 190 * sCloud, yStCloud + 380 * sCloud, 70 * sCloud);
    ellipse(xStCloud - 130 * sCloud, yStCloud + 380 * sCloud, 100 * sCloud);
    ellipse(xStCloud - 150 * sCloud, yStCloud + 340 * sCloud, 90 * sCloud);
    ellipse(xStCloud - 70 * sCloud, yStCloud + 340 * sCloud, 95 * sCloud);
    ellipse(xStCloud - 80 * sCloud, yStCloud + 390 * sCloud, 70 * sCloud);

    ellipse(xStCloud - 400 * sCloud, yStCloud + 20 * sCloud, 70 * sCloud);
    ellipse(xStCloud - 340 * sCloud, yStCloud + 0 * sCloud, 80 * sCloud);
    ellipse(xStCloud - 360 * sCloud, yStCloud + 35 * sCloud, 90 * sCloud);
    ellipse(xStCloud - 280 * sCloud, yStCloud + 10 * sCloud, 95 * sCloud);
    ellipse(xStCloud - 310 * sCloud, yStCloud + 40 * sCloud, 80 * sCloud);

    ellipse(xStCloud - 590 * sCloud, yStCloud + 220 * sCloud, 80 * sCloud);
    ellipse(xStCloud - 520 * sCloud, yStCloud + 200 * sCloud, 90 * sCloud);
    ellipse(xStCloud - 560 * sCloud, yStCloud + 250 * sCloud, 70 * sCloud);
    ellipse(xStCloud - 500 * sCloud, yStCloud + 260 * sCloud, 90 * sCloud);

    ellipse(xStCloud - 480 * sCloud, yStCloud + 420 * sCloud, 80 * sCloud);
    ellipse(xStCloud - 400 * sCloud, yStCloud + 430 * sCloud, 100 * sCloud);
    ellipse(xStCloud - 450 * sCloud, yStCloud + 460 * sCloud, 70 * sCloud);
    ellipse(xStCloud - 510 * sCloud, yStCloud + 470 * sCloud, 90 * sCloud);
    ellipse(xStCloud - 450 * sCloud, yStCloud + 400 * sCloud, 70 * sCloud);
  }

  // Clouds: Movement
  screenStartClouds(xStCloud, yStCloud, sCloud);
  if (cloudDirection === "cloudRight") {
    if (xStCloud < xMax + 30) {
      xStCloud += 0.3;
      yStCloud += 0.1;
    } else {
      cloudDirection = "cloudLeft";
    }
  } else if (cloudDirection === "cloudLeft") {
    if (xStCloud > 570) {
      xStCloud -= 0.3;
      yStCloud -= 0.1;
    } else {
      cloudDirection = "cloudRight";
    }
  }

  // Welcome Text
  text("click to start the game", x - 120 * s, y);
}

// GAME SCREEN
function screenGame() {
  // Sky
  background(104, 155, 163);

  /* 
    Clouds: Design
    xGmCloud, yGmCloud — coordinates of x, y
    sCloud — cloud's scale
  */
  function screenGameClouds(xGmCloud, yGmCloud, sCloud) {
    fill(255);
    strokeWeight();

    ellipse(xGmCloud - 150 * sCloud, yGmCloud + 80 * sCloud, 50 * sCloud);
    ellipse(xGmCloud - 110 * sCloud, yGmCloud + 60 * sCloud, 60 * sCloud);
    ellipse(xGmCloud - 120 * sCloud, yGmCloud + 100 * sCloud, 70 * sCloud);
    ellipse(xGmCloud - 70 * sCloud, yGmCloud + 70 * sCloud, 75 * sCloud);
    ellipse(xGmCloud - 80 * sCloud, yGmCloud + 100 * sCloud, 60 * sCloud);

    ellipse(xGmCloud - 310 * sCloud, yGmCloud + 20 * sCloud, 50 * sCloud);
    ellipse(xGmCloud - 270 * sCloud, yGmCloud + 0 * sCloud, 60 * sCloud);
    ellipse(xGmCloud - 280 * sCloud, yGmCloud + 40 * sCloud, 70 * sCloud);
    ellipse(xGmCloud - 230 * sCloud, yGmCloud + 10 * sCloud, 75 * sCloud);
    ellipse(xGmCloud - 240 * sCloud, yGmCloud + 40 * sCloud, 60 * sCloud);

    ellipse(xGmCloud - 430 * sCloud, yGmCloud + 220 * sCloud, 80 * sCloud);
    ellipse(xGmCloud - 370 * sCloud, yGmCloud + 200 * sCloud, 90 * sCloud);
    ellipse(xGmCloud - 400 * sCloud, yGmCloud + 250 * sCloud, 70 * sCloud);
    ellipse(xGmCloud - 350 * sCloud, yGmCloud + 240 * sCloud, 80 * sCloud);
  }

  // Clouds: Movement
  screenGameClouds(xGmCloud, yGmCloud, sCloud);
  if (cloudDirection === "cloudRight") {
    if (xGmCloud < xMax + 100) {
      xGmCloud += 1;
      yGmCloud += 0.1;
      sCloud += 0.001;
    } else {
      cloudDirection = "cloudLeft";
    }
  } else if (cloudDirection === "cloudLeft") {
    if (xGmCloud > 550) {
      xGmCloud -= 1;
      yGmCloud -= 0.1;
      sCloud -= 0.001;
    } else {
      cloudDirection = "cloudRight";
    }
  }

  // Tree (Trunk)
  fill("#452F12");
  beginShape();
  vertex(150, 580);
  bezierVertex(90, 360, 90, 270, 150, 150);
  bezierVertex(94, 215, 43, 215, 0, 150);
  bezierVertex(0, 0, 0, 0, 0, 580);
  endShape();

  // Tree (Leaves)
  stroke("#143E09");
  strokeWeight();
  let greenOne = color("#2F5426");

  fill(greenOne);
  ellipse(40, 170, 140);
  ellipse(50, 30, 250);
  ellipse(140, 145, 120);
  ellipse(210, 80, 140);
  ellipse(270, -10, 200);

  // Tree (Branches)
  fill("#452F12");
  beginShape();
  vertex(90, 240);
  bezierVertex(130, 90, 250, 50, 340, 30);
  bezierVertex(130, 70, 230, 30, 25, 190);
  endShape();

  beginShape();
  vertex(120, 125);
  bezierVertex(52, 10, 152, 25, 182, 14);
  bezierVertex(52, 70, 162, 5, 90, 140);
  endShape();

  // Apple
  strokeWeight();
  fill(207, 58, 64);
  ellipse(290, 90, 40);
}

// RESULTS SCREEN
function screenResults() {
  text("results", xMiddle - 45 * s, 50);
}

function draw() {
  screenGame();
}

let state = "start";
let gameTime = 0;

/*function draw() {
  if (state === "start") {
    screen1();
  } else if (state === "game") {
    screen2();
    gameTime += 1;
    if (gameTime >= 100) {
      gameTime = 0;
      state = "results";
    }
  } else if (state === "results") {
    screen3();
  }
}

function mouseClicked() {
  if (state === "start") {
    state = "game";
  } else if (state === "results") {
    state = "game";
  }
}
*/
