/*
------
2 July 2025
Sorting assignment, DigiPen Intro to Computer Science

mergeSort algorithm

*/

let frames = [];
let frameIndex = 0;

// barHeights = 20, 30, 10, 70, 50, 40, 200, 300, 210, 220, 230, 240, 250, 90, 80, 100, 60, 190, 180, 170, 160, 260, 270, 280, 290, 150, 140, 130, 120, 110  

let result = ""; // global variable result
let inputArray = [1];
function preload() {
  font = loadFont('GoogleSans7.ttf'); // Load font
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);

  input = createInput("Heights"); // Input, button
  input.position(20, windowHeight-40);
  button = createButton('Sort');
  button.position(input.x + input.width + 10, windowHeight-40);

  button.mousePressed(() => { // On press button
    inputArray = input.value().split(",").map(Number).filter(num => !Number.isNaN(num));  // Take input
    result = mergeSort([...inputArray]);
    console.log(result); // Debugging
    
    frames = [];
    frameIndex = 0;
    mergeSort(inputArray);
  });

}
function draw() {
  background(220);
    noStroke();
    fill('black'); // result
    textSize(36);
    text(result, windowWidth/2, 315);
    textAlign(CENTER);

  if (frames.length > 0 && frameIndex < frames.length) {
    drawBars(frames[frameIndex]);
    frameIndex+= 1;
  } else if (frames.length > 0) {
    drawBars(frames[frames.length - 1]);
  }
  
  textSize(24); // Top title thing
  fill('deeppink');
  text('mergeSort algorithm: ' + input.value().split(",").map(Number).filter(num => !Number.isNaN(num)), windowWidth/2, 50);
}

function drawBars(arr) {
  for (let i = 0; i < arr.length; i++) {
    fill(75, 100, 200);
    rect(10 + i * windowWidth/(1.05*inputArray.length), (windowHeight - 100) - arr[i]*2, windowWidth/(inputArray.length*1.05), arr[i]*2, 2);
  }
}


function mergeSort(list) { // actual function 
  step = 1;
  n = list.length;
  
  while (step < n) {
    for (i = 0; i < n; i += 2*step) { // slicing
      left = list.slice(i, i + step);
      right = list.slice(i + step, i + 2*step);
      merged = merge(left, right);
      for (let j = 0; j < merged.length; j++) {
        list[i + j] = merged[j];
        frames.push(list.slice()); // animation
      }
    }
    step *= 2; // larger
  }
  return list;
}

function merge(left, right) { // sub function for merge()
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i += 1;
    } else {
      result.push(right[j]);
      j += 1;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i += 1;
  }

  while (j < right.length) {
    result.push(right[j]);
    j += 1;
  }

  return result;
}
