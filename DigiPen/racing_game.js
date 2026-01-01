/*
------
30 June 2025
Racing Game assignment, DigiPen Intro to Computer Science

Assignment content: "This assignment is meant to be a bit of a creative exercise. Your goal is to make a scene with at least 3 different moving racers and some static parts to judge movement in. This could be like a snail racetrack where one snail is pretty slow, one is pretty quick, but the third will require user input, clicking to be precise. I would start by building this with shapes but we can add in our own images eventually. Finally we want a way to detect if a racer has won or not!

General guidelines for the user input:
You will want to keep a variable of the user character's speed as a global variable. 
Using the mouse click function adjust the speed higher per click (may want to keep it a very small amount added).
Using the draw function have the user's speed decrease each frame by an amount at least a little less than their speed.
 

General guidelines for the end of game:
You will need to be keeping track of the positions of the racers already.
Given this you can just keep checking if a racer is past a specific point.
You will want a boolean value (true/false) and set it to true when the race is won, and print out something on the screen when true while also preventing any more movement from the players."


*/

function preload() {
  font = loadFont('GoogleSans2.ttf'); //  Load font (Google Sans)
  img = loadImage('FinishLine.png'); // Load finish line
}

let r1pos = 20; // position
let r2pos = 20;
let r3pos = 20;

let r1v = 0; // velocity
let r2v = Math.random(); // Random velocity for other players
let r3v = Math.random();

win = false; // Has anyone won yet?
let winner; // Define WHO won here, will be set when race ends

function setup() { // Track
  createCanvas(1120, 630);
  textSize(36); // Text size and font
  textFont(font);
}

function draw() { // Racers and updates
  background(220);
  r1(); // redraw characters
  r2();
  r3();
  r1v *= 0.9; // constantly decrease speed of player
  r1pos += r1v; // change Player pos by velocity
  r2pos += r2v; // For the other two also using velocity
  r3pos += r3v;
  
  if (r1pos >= 1000) {
    win = true; // This is actually just to force the player to stop being able to control movement
    winner = 1; // Who won?
    endGame(); // End function
  }

  if (r2pos >= 1000) {
    win = true; 
    winner = 2;
    endGame();
  }

  if (r3pos >= 1000) {
    win = true; 
    winner = 3;
    endGame();
  }
  
  if (win == false) {
    fill(125, 140, 200);
    text('You are purple. ', 10, 50);
  }
  noStroke();
  image(img, 1000, 0); // Finish line
}


function r1() { // Player 1 circle
  fill(125, 140, 200);
  circle(r1pos, 130, 30);
}

function r2() { // Player 2 circle
  fill(46, 225, 159);
  circle(r2pos, 315, 30);
}

function r3() { // Player 3 circle
  fill(66, 182, 245);
  circle(r3pos, 500, 30);
}

function mouseClicked() { // When clicked increase speed by 10
  if (win == false) {
    r1v += 10; // Increase velocity, kinda cool when you set it to Math.random()*1.5
  }
  else {
    r1v = 0;
  }
}

function endGame() { // Force velocity 0
  r1v = 0; // Force stop
  r2v = 0;
  r3v = 0;
  fill(53, 123, 247); // Color of text
  if (winner == 1) {
    text('Race ended. Player 1 has won.', 300, 320); // Who won?
  }
  if (winner == 2) {
    text('Race ended. Player 2 has won.', 300, 320);
  }
  if (winner == 3) {
    text('Race ended. Player 3 has won.', 300, 320);
  }
}
