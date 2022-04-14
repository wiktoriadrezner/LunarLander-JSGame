// FLYING APPLES GAME
let cloudDirection = "cloudRight";

// WELCOME SCREEN
let xStCloud = canvas.width;
let yStCloud = 0;
background(255);
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

    ellipse(xStCloud - 190, yStCloud + 450, 80);
    ellipse(xStCloud - 130, yStCloud + 450, 110);
    ellipse(xStCloud - 150, yStCloud + 410, 100);
    ellipse(xStCloud - 70, yStCloud + 410, 105);
    ellipse(xStCloud - 80, yStCloud + 460, 80);

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
  textSize(25);
  textStyle(NORMAL);
  text("click to start the game", 280, 210);
  textSize(15);
  textStyle(BOLD);
  text("Rules of the Game", 220, 235);
  textStyle(ITALIC);
  fill("#C7DCDC");
  text("1. Land the apple safely on the ground.", 220, 255);
  text("2. Control the flying apple with arrow keys.", 220, 275);
  text("3. You win if you land an apple with a speed below 2.", 220, 295);
  text("4. Yoo lose if you land an apple with a higher speed", 220, 315);
  text("or an apple flies out of the game screen.", 237, 331);
}

// GAME SCREEN
const ground = canvas.height - 50;
const gravity = 0.2;
let speedApple = 1;
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

  // Tree
  // Trunk
  fill("#452F12");
  beginShape();
  vertex(110, 580);
  bezierVertex(50, 360, 50, 270, 110, 150);
  bezierVertex(54, 215, 3, 215, -40, 150);
  bezierVertex(0, 0, 0, 0, 0, 580);
  endShape();
  // Leaves
  stroke("#143E09");
  strokeWeight();
  fill("#2F5426");
  ellipse(0, 130, 140);
  ellipse(10, 30, 250);
  ellipse(100, 145, 120);
  ellipse(170, 80, 140);
  ellipse(230, -10, 200);
  // Branches
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

  // Ground
  fill("#506C1B");
  rect(0, ground, canvas.width, 50);

  // Fence
  fill("#745A3C");
  rect(0, 380, 130, 15);
  rect(0, 410, 130, 15);

  rect(25, 365, 15, 82);
  triangle(25, 365, 40, 365, 32.5, 355);
  rect(95, 365, 15, 82);
  triangle(95, 365, 110, 365, 102.5, 355);

  rect(270, 380, 130, 15);
  rect(270, 410, 130, 15);

  rect(360, 365, 15, 82);
  triangle(360, 365, 375, 365, 367.5, 355);
  rect(295, 365, 15, 82);
  triangle(295, 365, 310, 365, 302.5, 355);

  rect(540, 380, 130, 15);
  rect(540, 410, 130, 15);

  rect(565, 365, 15, 82);
  triangle(565, 365, 580, 365, 572.5, 355);

  // Apple
  function screenGameApple(xApple, yApple, appleFly) {
    strokeWeight();
    fill("#A71F0F");
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
      xApple + 15,
      yApple - 1
    );
    bezierVertex(
      xApple - 24,
      yApple + 20,
      xApple + 21,
      yApple + 28,
      xApple + 22,
      yApple
    );
    bezierVertex(
      xApple + 21,
      yApple - 25,
      xApple - 5,
      yApple - 20,
      xApple - 7,
      yApple
    );
    endShape();
    // Apple - Leaf
    fill("#506C1B");
    stroke("#145E0E");
    strokeWeight(1.2);
    beginShape();
    vertex(xApple + 2.5, yApple - 15.2);
    bezierVertex(
      xApple - 5,
      yApple - 19,
      xApple + 2,
      yApple - 31,
      xApple + 9,
      yApple - 30
    );
    bezierVertex(
      xApple + 12,
      yApple - 20,
      xApple - 2,
      yApple - 20,
      xApple + 2.3,
      yApple - 15.2
    );
    endShape();
    // Apple - Wings
    fill("#C7DCDC");
    stroke("#98290D");
    strokeWeight(2);
    if (appleFly) {
      beginShape();
      vertex(xApple - 12, yApple + 3);
      bezierVertex(
        xApple - 14,
        yApple - 6,
        xApple - 42,
        yApple + 2,
        xApple - 34,
        yApple + 15
      );
      endShape();
      beginShape();
      vertex(xApple - 12, yApple + 3);
      bezierVertex(
        xApple - 22,
        yApple - 13,
        xApple - 42,
        yApple - 4,
        xApple - 45,
        yApple - 2
      );
      endShape();
      beginShape();
      vertex(xApple + 12, yApple + 3);
      bezierVertex(
        xApple + 14,
        yApple - 6,
        xApple + 42,
        yApple + 2,
        xApple + 34,
        yApple + 15
      );
      endShape();
      beginShape();
      vertex(xApple + 12, yApple + 3);
      bezierVertex(
        xApple + 22,
        yApple - 13,
        xApple + 42,
        yApple - 4,
        xApple + 45,
        yApple - 2
      );
      endShape();
    } else {
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
  }
  screenGameApple(125, 40);
  screenGameApple(35, 80);
  screenGameApple(65, 140);
  screenGameApple(255, 50);

  // Game Mechanics
  screenGameApple(xGmApple, yGmApple, keyIsDown(38));
  if (yGmApple < 0 || xGmApple < 0 || xGmApple > canvas.width) {
    console.log("LOST");
    state = "resultsLostFlewOut";
  } else if (yGmApple < ground - 20) {
    if (keyIsDown(38)) {
      speedApple -= 0.9;
    }
    if (keyIsDown(39)) {
      xGmApple += 5;
    }
    if (keyIsDown(37)) {
      xGmApple -= 5;
    }
    speedApple += gravity;
    yGmApple += speedApple;
    if (yGmApple >= ground - 20 && speedApple > 2) {
      console.log("LOST");
      state = "resultsLostSmashed";
    } else if (yGmApple >= ground - 20 && speedApple <= 2) {
      console.log("WON");
      state = "resultsWon";
    }
  }

  // Speed Counter
  fill("#A71F0F");
  rect(canvas.width - 255, 20, 240, 50);
  textSize(15);
  fill(255);
  text("Your Apple's Speed:", canvas.width - 240, 50);
  fill("#C7DCDC");
  textSize(25);
  text(Math.floor(speedApple * 100) / 100, canvas.width - 95, 53);
}

// RESULTS SCREEN
// Winning Screen
function screenResultsWon() {
  background(104, 155, 163);
  strokeWeight();
  fill(255);
  textSize(55);
  textStyle(NORMAL);
  text("Congrats!", 47, 100);
  textSize(35);
  textStyle(ITALIC);
  text("You won the game :)", 30, 140);
  fill("#C7DCDC");
  textSize(20);
  textStyle(ITALIC);
  text("Click to play one more time", 135, 170);

  // Apple Graphic
  function screenResultsWonApple(xFinishApple, yFinishApple, sFinishApple) {
    //xFinishApple = Math.floor(Math.random() * canvas.width);
    //yFinishApple = Math.floor(Math.random() * canvas.height);
    // Apple's Fruit
    strokeWeight(3);
    fill("#A71F0F");
    stroke("#A71F0F");
    beginShape();
    vertex(xFinishApple + 12 * sFinishApple, yFinishApple);
    bezierVertex(
      xFinishApple + 5 * sFinishApple,
      yFinishApple - 25 * sFinishApple,
      xFinishApple - 15 * sFinishApple,
      yFinishApple - 20 * sFinishApple,
      xFinishApple - 17 * sFinishApple,
      yFinishApple
    );
    bezierVertex(
      xFinishApple - 17 * sFinishApple,
      yFinishApple + 20 * sFinishApple,
      xFinishApple - 5 * sFinishApple,
      yFinishApple + 25 * sFinishApple,
      xFinishApple + 15 * sFinishApple,
      yFinishApple - 1 * sFinishApple
    );
    bezierVertex(
      xFinishApple - 24 * sFinishApple,
      yFinishApple + 20 * sFinishApple,
      xFinishApple + 21 * sFinishApple,
      yFinishApple + 28 * sFinishApple,
      xFinishApple + 22 * sFinishApple,
      yFinishApple
    );
    bezierVertex(
      xFinishApple + 21 * sFinishApple,
      yFinishApple - 25 * sFinishApple,
      xFinishApple - 5 * sFinishApple,
      yFinishApple - 20 * sFinishApple,
      xFinishApple - 7 * sFinishApple,
      yFinishApple
    );
    endShape();
    // Apple's Leaf
    fill("#506C1B");
    stroke("#145E0E");
    strokeWeight(2.5);
    beginShape();
    vertex(
      xFinishApple + 2.5 * sFinishApple,
      yFinishApple - 15.2 * sFinishApple
    );
    bezierVertex(
      xFinishApple - 5 * sFinishApple,
      yFinishApple - 19 * sFinishApple,
      xFinishApple + 2 * sFinishApple,
      yFinishApple - 31 * sFinishApple,
      xFinishApple + 9 * sFinishApple,
      yFinishApple - 30 * sFinishApple
    );
    bezierVertex(
      xFinishApple + 12 * sFinishApple,
      yFinishApple - 20 * sFinishApple,
      xFinishApple - 2 * sFinishApple,
      yFinishApple - 20 * sFinishApple,
      xFinishApple + 2.3 * sFinishApple,
      yFinishApple - 15.2 * sFinishApple
    );
    endShape();
  }
  screenResultsWonApple(500, 310, 9.5);
}

// Losing Screen (Smashed Apple)
function screenResultsLostSmashed() {
  background(104, 155, 163);

  // Smashed Apple
  fill("#8A8410");
  strokeWeight(10);
  stroke("#676319");
  ellipse(150, 50, 800);

  // Text
  strokeWeight();
  fill("#46451F");
  textSize(55);
  textStyle(NORMAL);
  text("You lost!", 47, 100);
  textSize(35);
  textStyle(ITALIC);
  text("You smashed the apple :(", 30, 140);
  fill("#D7D6C0");
  textSize(20);
  textStyle(ITALIC);
  text("Click to try your chances once again", 135, 170);
}

// Losing Screen (Apple Flew Out)
function screenResultsLostFlewOut() {
  background(104, 155, 163);

  // Smashed Apple
  fill("#8A8410");
  strokeWeight(10);
  stroke("#676319");
  ellipse(150, 50, 800);

  // Text
  strokeWeight();
  fill("#46451F");
  textSize(55);
  textStyle(NORMAL);
  text("You lost!", 47, 100);
  textSize(35);
  textStyle(ITALIC);
  text("You left the game screen :(", 30, 140);
  fill("#D7D6C0");
  textSize(20);
  textStyle(ITALIC);
  text("Click to try your chances once again", 155, 170);
}

// CHANGING GAME SCREENS
let state = "start";
function mouseClicked() {
  if (state === "start") {
    state = "game";
  } else if (state === "resultsWon") {
    xGmApple = 185;
    yGmApple = 100;
    speedApple = 1;
    state = "game";
  } else if (state === "resultsLostSmashed" || state === "resultsLostFlewOut") {
    xGmApple = 185;
    yGmApple = 100;
    speedApple = 1;
    state = "game";
  }
}

function draw() {
  screenGame();
  /*
  if (state === "start") {
    screenStart();
  }
  if (state === "game") {
    screenGame();
  }
  if (state === "resultsWon") {
    screenResultsWon();
  }
  if (state === "resultsLostSmashed") {
    screenResultsLostSmashed();
  }
  if (state === "resultsLostFlewOut") {
    screenResultsLostFlewOut();
  }
  */
}

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
*/
