// FLYING APPLES GAME
let cloudDirection = "cloudRight";

// WELCOME SCREEN
let xStCloud = canvas.width;
let yStCloud = 0;
background(255);
textSize(25);
function screenStart() {
  background(104, 155, 163);
  strokeWeight();
  fill(255);

  /* 
    Clouds: Design
    xStCloud, yStCloud — coordinates of x, y
  */
  function screenStartClouds(xStCloud, yStCloud) {
    ellipse(xStCloud - 150, yStCloud + 80, 60);
    ellipse(xStCloud - 110, yStCloud + 50, 70);
    ellipse(xStCloud - 120, yStCloud + 110, 80);
    ellipse(xStCloud - 70, yStCloud + 70, 85);
    ellipse(xStCloud - 70, yStCloud + 110, 70);

    ellipse(xStCloud - 190, yStCloud + 380, 80);
    ellipse(xStCloud - 130, yStCloud + 380, 110);
    ellipse(xStCloud - 150, yStCloud + 340, 100);
    ellipse(xStCloud - 70, yStCloud + 340, 105);
    ellipse(xStCloud - 80, yStCloud + 390, 80);

    ellipse(xStCloud - 400, yStCloud + 20, 80);
    ellipse(xStCloud - 340, yStCloud + 0, 90);
    ellipse(xStCloud - 360, yStCloud + 35, 100);
    ellipse(xStCloud - 280, yStCloud + 10, 105);
    ellipse(xStCloud - 310, yStCloud + 40, 90);

    ellipse(xStCloud - 590, yStCloud + 220, 90);
    ellipse(xStCloud - 520, yStCloud + 200, 100);
    ellipse(xStCloud - 560, yStCloud + 250, 80);
    ellipse(xStCloud - 500, yStCloud + 260, 100);

    ellipse(xStCloud - 480, yStCloud + 420, 90);
    ellipse(xStCloud - 400, yStCloud + 430, 110);
    ellipse(xStCloud - 450, yStCloud + 460, 80);
    ellipse(xStCloud - 510, yStCloud + 470, 100);
    ellipse(xStCloud - 450, yStCloud + 400, 80);
  }

  // Clouds: Movement
  screenStartClouds(xStCloud, yStCloud);
  if (cloudDirection === "cloudRight") {
    if (xStCloud < canvas.width) {
      xStCloud += 0.3;
      yStCloud += 0.1;
    } else {
      cloudDirection = "cloudLeft";
    }
  } else if (cloudDirection === "cloudLeft") {
    if (xStCloud > 600) {
      xStCloud -= 0.3;
      yStCloud -= 0.1;
    } else {
      cloudDirection = "cloudRight";
    }
  }

  // Welcome Text
  text("click to start the game", 280, 230);
}

// GAME SCREEN
const gravity = 0.2;
let speed = 0;
let xGmApple = 185;
let yGmApple = 100;
let xGmCloud = canvas.width;
let yGmCloud = 20;
let sCloud = 1;
function screenGame() {
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
    if (xGmCloud < canvas.width + 100) {
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

  // Tree - Trunk
  fill("#452F12");
  beginShape();
  vertex(110, 580);
  bezierVertex(50, 360, 50, 270, 110, 150);
  bezierVertex(54, 215, 3, 215, -40, 150);
  bezierVertex(0, 0, 0, 0, 0, 580);
  endShape();

  // Tree - Leaves
  stroke("#143E09");
  strokeWeight();
  fill("#2F5426");
  ellipse(0, 130, 140);
  ellipse(10, 30, 250);
  ellipse(100, 145, 120);
  ellipse(170, 80, 140);
  ellipse(230, -10, 200);

  // Tree - Branches
  fill("#452F12");
  beginShape();
  vertex(86, 205);
  bezierVertex(115, 105, 215, 65, 300, 30);
  bezierVertex(115, 75, 130, 80, 25, 195);
  endShape();
  beginShape();
  vertex(110, 145);
  bezierVertex(90, 50, 130, 45, 185, 5);
  bezierVertex(50, 40, 60, 95, 55, 156);
  endShape();
  beginShape();
  vertex(85, 145);
  bezierVertex(80, -25, -19, 21, -30, 10);
  bezierVertex(-12, 29, 34, 5, 38, 107);
  endShape();
  beginShape();
  vertex(-35, 225);
  bezierVertex(27, 125, -1, 100, -190, 90);
  bezierVertex(-38, 59, 54, 45, 75, 190);
  endShape();

  // Apple
  function screenGameApple(xApple, yApple) {
    strokeWeight();
    fill(207, 58, 64);
    beginShape();
    vertex(xApple + 12, yApple);
    bezierVertex(
      xApple + 5,
      yApple - 25,
      xApple - 15,
      yApple - 20,
      xApple - 17,
      yApple
    );
    bezierVertex(
      xApple - 17,
      yApple + 20,
      xApple - 5,
      yApple + 25,
      xApple + 13,
      yApple
    );
    endShape();
    beginShape();
    vertex(xApple + 22, yApple);
    bezierVertex(
      xApple + 21,
      yApple - 25,
      xApple - 5,
      yApple - 20,
      xApple - 7,
      yApple
    );
    bezierVertex(
      xApple - 7,
      yApple + 20,
      xApple + 21,
      yApple + 28,
      xApple + 22,
      yApple
    );
    endShape();
    // Apple - Leaf
    fill("#506C1B");
    stroke("#145E0E");
    strokeWeight(2);
    beginShape();
    vertex(xApple + 2, yApple - 15);
    bezierVertex(
      xApple - 8,
      yApple - 17,
      xApple + 2,
      yApple - 31,
      xApple + 10,
      yApple - 30
    );
    endShape();

    // Apple - Wings
    fill("#C7DCDC");
    stroke("#98290D");
    strokeWeight(2);
    beginShape();
    vertex(xApple - 12, yApple - 3);
    bezierVertex(
      xApple - 14,
      yApple + 6,
      xApple - 42,
      yApple - 2,
      xApple - 34,
      yApple - 15
    );
    endShape();
    beginShape();
    vertex(xApple - 12, yApple - 3);
    bezierVertex(
      xApple - 22,
      yApple + 13,
      xApple - 42,
      yApple + 4,
      xApple - 45,
      yApple + 2
    );
    endShape();
    beginShape();
    vertex(xApple + 12, yApple - 3);
    bezierVertex(
      xApple + 14,
      yApple + 6,
      xApple + 42,
      yApple - 2,
      xApple + 34,
      yApple - 15
    );
    endShape();
    beginShape();
    vertex(xApple + 12, yApple - 3);
    bezierVertex(
      xApple + 22,
      yApple + 13,
      xApple + 42,
      yApple + 4,
      xApple + 45,
      yApple + 2
    );
    endShape();
  }
  screenGameApple(125, 40);
  screenGameApple(35, 80);
  screenGameApple(65, 140);
  screenGameApple(255, 50);
  screenGameApple(xGmApple, yGmApple);
  if (keyIsDown(38)) {
    speed -= 0.6;
  }
  if (keyIsDown(39)) {
    xGmApple += 5;
  }
  if (keyIsDown(37)) {
    xGmApple -= 5;
  }
  speed += gravity;
  yGmApple += speed;
}

// RESULTS SCREEN
function screenResults() {
  background(104, 155, 163);
  fill(255);
  text("Results of the Game", 50, 50);
}

function draw() {
  screenGame();
}

let state = "start";

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
