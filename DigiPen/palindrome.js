/*
------
2 July 2025
Palindrome Assignment, DigiPen Intro to Computer Science

Makes a function to check whether the string is a palindrome, with 2 options, letters only (no case) or also considering case and numbers 

*/

let result = null;

function preload() {
  font = loadFont('GoogleSans5.ttf'); // Load font
}

function setup() {
  createCanvas(1120, 630);
  textFont(font);

  input = createInput();  // Input, button, and position
  input.position(20, 590);
  button = createButton('Case and number sensitive');
  button1 = createButton('Only check letters');
  button.position(input.x + input.width + 10, 590);
  button1.position(input.x + input.width + 200, 590);
  
  button.mousePressed(() => { // On press button
    let n = input.value();  // Take input
    result = isPalindrome(n);
    console.log(result); // Debugging
  });

  button1.mousePressed(() => {
    let n = fix(input.value());
    result = isPalindrome(n);
    console.log(result);
  });

}



function draw() {
  background(220);

  if (result !== null) { // If result exists (it will)
    fill('black');
    textSize(128);
    text(result, 380, 300);
  }
  
  fill('deeppink'); // title
  textSize(24);
  text('The string: "' + input.value() + '"', 10, 40);
  text("a palindrome", 930, 570);
}

function fix(string) {
  let lowercaseString = string.toLowerCase();
  return lowercaseString.replace(/[^a-zA-Z]/g, '');
}

function isPalindrome(n) {
  const len = n.length;
    for (let i = 0; i < len / 2; i++) {
        if (n[i] !== n[len - 1 - i]) {
            return "is not";
        }
    }
    return "is";
}
