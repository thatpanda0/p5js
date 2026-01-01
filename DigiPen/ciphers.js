/*
------
2 July 2025
Cipher assignment, DigiPen Intro to Computer Science

Vignere cipher keeping punctuation, with encoding and decoding. 

*/

let result = ""; // global variable result

function preload() {
  font = loadFont('GoogleSans6.ttf'); // Load font
}

function setup() {
  createCanvas(1120, 630);
  textFont(font);

  input = createInput("String");  // Input, button, and position
  input.position(20, 590);
  key_ = createInput("Key");  // Input, button, and position
  key_.position(200, 590);
  button = createButton('Vignere [ENCODE]');
  button.position(key_.x + key_.width + 10, 590);
  
  decodeB = createButton('Vignere [DECODE]');
  decodeB.position(button.x + button.width + 10, 590);
  
  button.mousePressed(() => { // On press button
    let a = input.value();  // Take input
    let b = key_.value(); 
    result = encode(a, b);
    console.log(result); // Debugging
  });

  decodeB.mousePressed(() => { // Decode button
    let a = input.value(); 
    let b = key_.value(); 
    result = decode(a, b);
    console.log(result); 
  });

}

function draw() {
  background(220);

    fill('black'); // result
    textSize(128);
    text(result, 560, 315);
    textAlign(CENTER);

  
  textSize(24); // Top title thing
  fill('deeppink');
  text('The encoding/decoding of "' + input.value() + '" with key "'+ key_.value() + '" is: ', 560, 50);
}

function genKey(a, b) { // Expand key (b) to the total length of encoding/decoding string (a)
  let fullKey = '';
  let j = 0;
  for (let i = 0; i < a.length; i++) {
    if (/[a-zA-Z]/.test(a[i])) {
      fullKey += b[j % b.length];   // so it wraps around and repeats itself
      j++;
    } else {
      fullKey += ' '; // don't encode this if we don't have a letter
    }
  }
  return fullKey;
}

function encode(a, b) { // to encode strings
  let result = '';
  b = genKey(a, b);
  let keyIndex = 0;

  for (let i = 0; i < a.length; i++) { // for each character
    let char = a[i];
    let k = b[i];

    if (char >= 'A' && char <= 'Z') { // uppercase ASCII
      let shift = k.toUpperCase().charCodeAt(0) - 65; // raw value to shift
      let encoded = String.fromCharCode((char.charCodeAt(0) - 65 + shift) % 26 + 65); // Vignere is actually (str + key) mod 26
      result += encoded; // add to result string
    } else if (char >= 'a' && char <= 'z') { // lowercase ASCII
      let shift = k.toLowerCase().charCodeAt(0) - 97; // raw
      let encoded = String.fromCharCode((char.charCodeAt(0) - 97 + shift) % 26 + 97); // (str + key) mod 26
      result += encoded;
    } else {
      result += char;
    }
  }

  return result; // return
}


function decode(a, b) { // to decode strings
  let result = '';
  b = genKey(a, b);
  let keyIndex = 0;

  for (let i = 0; i < a.length; i++) { // for each character
    let char = a[i];
    let k = b[i];

    if (char >= 'A' && char <= 'Z') {
      let shift = k.toUpperCase().charCodeAt(0) - 65;
      let decoded = String.fromCharCode((char.charCodeAt(0) - 65 - shift + 26) % 26 + 65); // Decoding is (encrypted - key) mod 26
      result += decoded; // build result string
    } else if (char >= 'a' && char <= 'z') {
      let shift = k.toLowerCase().charCodeAt(0) - 97;
      let decoded = String.fromCharCode((char.charCodeAt(0) - 97 - shift + 26) % 26 + 97); // same here
      result += decoded;
    } else {
      result += char;
    }
  }

  return result;
}


// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------


/*
------
2 July 2025
Cipher assignment, DigiPen Intro to Computer Science

Caesar cipher keeping punctuation, with encoding and decoding. 

*/

let result = ""; // global variable result

function preload() {
  font = loadFont('idk.ttf'); // Load font
}

function setup() {
  createCanvas(windowWidth, 630);
  textFont(font);

  input = createInput("String");  // Input, button, and position
  input.position(20, 590);
  key_ = createInput("Number 1-26");  // Input, button, and position
  key_.position(200, 590);
  button = createButton('Caesar [ENCODE]');
  button.position(key_.x + key_.width + 10, 590);
  
  decodeB = createButton('Caesar [DECODE]');
  decodeB.position(button.x + button.width + 10, 590);
  
  button.mousePressed(() => { // On press button
    let a = input.value();  // Take input
    let b = Number(key_.value()); 
    result = encode(a, b);
    console.log(b);
    console.log(result); // Debugging
  });

  decodeB.mousePressed(() => { // Decode button
    let a = input.value(); 
    let b = Number(key_.value()); 
    result = decode(a, b);
    console.log(result); 
  });

}

function draw() {
  background(220);

    fill('black'); // result
    textSize(72);
    text(result, windowWidth/2, 315);
    textAlign(CENTER);

  
  textSize(24); // Top title thing
  fill('deeppink');
  text('The encoding/decoding of "' + input.value() + '" with shift '+ key_.value() + ' is: ', windowWidth/2, 50);
}


function encode(a, b) { // to encode strings
  let result = '';
  let keyIndex = 0;

  if (isNaN(b)) {
    return "shift is not number";
  }
  
  for (let i = 0; i < a.length; i++) { // for each character
    let char = a[i];

    if (char >= 'A' && char <= 'Z') {
      let shift = b;
      let encoded = String.fromCharCode((char.charCodeAt(0) - 65 + shift) % 26 + 65);
      result += encoded; 
    } else if (char >= 'a' && char <= 'z') {
      let shift = b;
      let encoded = String.fromCharCode((char.charCodeAt(0) - 97 + shift) % 26 + 97);
      result += encoded;
    } else {
      result += char;
    }
  }

  return result; // return
}


function decode(a, b) { // to decode strings
  let result = '';
  b = b;
  let keyIndex = 0;

  if (isNaN(b)) {
    return "shift is not number";
  }
  
  for (let i = 0; i < a.length; i++) {
    let char = a[i];
    let k = b[i];

    if (char >= 'A' && char <= 'Z') {
      let shift = b;
      let decoded = String.fromCharCode((char.charCodeAt(0) - 65 - shift + 26) % 26 + 65); 
      result += decoded; // build result string
    } else if (char >= 'a' && char <= 'z') {
      let shift = b;
      let decoded = String.fromCharCode((char.charCodeAt(0) - 97 - shift + 26) % 26 + 97); 
      result += decoded;
    } else {
      result += char;
    }
  }

  return result;
}
