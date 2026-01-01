/*
----
30 June 2025
Fortune teller asignment, DigiPen Intro to Computer Science

Assignment content: "For this assignment, you will be making a simple randomized fortune teller. For this project, making your own flow chart is not needed, but you should still follow the provided one, while making your own choice on aesthetic elements! This fortune teller can be made into a magic 8 ball, fortune cookie, magic mirror, or whatever you want using simple shapes and text output.""
*/

let font;
let x = 4; // The number on the 4-ball
let rolled = 0; // If it is the first time rolling or no (0 = not rolled yet, 1 = rolled)

function preload() {
  font = loadFont('GoogleSans.ttf'); //  Load font (Google Sans)
}

function setup() { // Canvas size, background, and title
  createCanvas(800, 800);  
  background(240);
  fill('deeppink');
  textSize(36);
  textFont(font);
  text('Fortune Teller with a 4-ball', 10, 50);
  text('Click to roll', 10, 100)
  ball4(); // Draw the ball the first time
}

function ball4() { // Ball
  if (rolled == 0) { // If not rolled yet do nothing
  }
  else {
    background(240); // Otherwise redraw the backgound (so that we don't overlap responses)
  }
  fill('black'); 
  noStroke();
  circle(400, 400, 250); // Black circle
  fill('white'); // White circle
  circle(400, 400, 125);
  fill('black');
  text(x, 390, 410); // Number
}

function mouseClicked() { // Clicking to roll the ball
  if (mouseX < 525 && mouseX > 275 && mouseY > 275 && mouseY < 525) { // Basically the square enclosing the ball
    x = Math.floor(Math.random() * 4) + 1; // Random from 1-4
    rolled = 1; // Make sure that the ball is rolled
    console.log("clicked!"); // Debugging
    ball4(); // Redraw ball
  }
  if (x == 4 && rolled == 1) { // Roll 4
    console.log("result 4, yes");
    text('Yes', 380, 700);
  }
  if (x == 3) { // Roll 3
    console.log("result 3, no");
    text('No', 380, 700);
  }
  if (x == 2) { // Roll 2
    console.log("result 2, probably");
    text('Probably', 330, 700);
  }
  if (x == 1) { // Roll 1
    console.log("result 1, not really");
    text('Not really', 330, 700);
  }
}
