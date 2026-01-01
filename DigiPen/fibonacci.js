/*
------
1 July 2025
Fibonacci Sequence assignment, DigiPen Intro to Computer Science

Function to find and display fibonacci sequence, using DP

*/

let result = null; // Define our variables

function preload() {
  font = loadFont('GoogleSans4.ttf'); // Load font
}

function setup() {
  createCanvas(1120, 630);
  textFont(font);

  input = createInput();  // Input, button, and position
  input.position(20, 590);
  button = createButton('Find fibonacci number');
  button.position(input.x + input.width + 10, 590);
  
  button.mousePressed(() => { // On press button
    let n = Number(input.value());  // Take input
    result = fibo(n);
    console.log(result); // Debugging
  });

}

function draw() {
  background(220);

  if (result !== null) { // If result exists (it will)
    fill('black');
    textSize(72);
    text(result, 40, 150);
  }
  
  fill('deeppink'); // title
  textSize(24);
  text('The ' + input.value() + 'th Fibonacci number is ', 10, 40);
}

function fibo(n, memo = {}) { // n is input, memo is dictionary to store values (so we don't need to call EVERY fibo() down to fibo(1) when computing the numbers (optimization))
    if (isNaN(n)) { // You're not slick (if input (n) not a number)
        return "please input a number";
      }
  if (n <= 2) return 1; // F1 and F2 are 1
  if (n in memo) return memo[n]; // If we have already computed (in memo) then return memo[n]

  memo[n] = fibo(n - 1, memo) + fibo(n - 2, memo); // otherwise call fibo(n-1) and fibo(n-2)
  return memo[n];
 }
