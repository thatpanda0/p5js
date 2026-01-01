/*
-----
1 July 2025
Calculating Pi, DigiPen Intro to Computer Science

Assignment content: "There are many ways out there to calculate pi. For this project, I am going to describe the Leibniz method, and your goal is to make a flowchart of the algorithm, code the algorithm into p5js, and have it output the number some interesting way. This could print pi as a slowly rotating number, this could print pi as a meme; it is your choice on how it is displayed. For your program, you are going to choose a number to represent how many iterations the series runs for (how many terms you are adding up)."

*/

let xpos = 560; // initial x-position
let pi = 0; // global pi, i
let i = 0;

function preload() {
  font = loadFont('GoogleSans3.ttf'); // Load font
}

function setup() {
  createCanvas(1120, 630);
  textSize(36);
  textFont(font);

  input = createInput(); // Input and button
  button = createButton('Estimate');

  button.mousePressed(calcPi); // Trigger func calcPi() when button pressed

}



function draw() {
  background(220);

  let txt = pi.toString();
  let x = xpos;
  
  fill(0, 0, 0);
  textSize(72);
  for (let j = 0; j < txt.length; j++) {
    let charWidth = textWidth(txt[j]);

    // Only draw if character is visible on canvas
    if (x + charWidth > 0 && x < width) {
      text(txt[j], x, 315);
    }

    x += charWidth;

  }

  // Move text to the left
  xpos -= 1;

  // Reset xpos when full text has moved out
  let totalTextWidth = textWidth(txt);
  if (xpos < -totalTextWidth) {
    xpos = width;
  }
  
  fill('deeppink');
  textSize(24);
  text('The estimation of pi with ' + input.value() + ' iterations of the Leibniz approximation is:', 10, 30);
}

function calcPi() {
  pi = 0;
  i = 0; // Counting
  let n = input.value();
  while (i < n) { // While loop for iterating
    pi += (1/(2*i + 1)) * Math.pow(-1, i); // Leibniz function expressed with JS terms
    i += 1;
  }
  pi *= 4; // Multiply by 4 because sums to pi/4 not pi
}
