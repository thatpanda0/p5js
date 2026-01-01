idk = 90; // number of leaves

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(random(80, 94), random(36, 45), random(25, 43))
  for (i = 0; i <= idk; i++) {
    drawLeaf();
  }
}

function drawLeaf() {
  const x = random(0, windowWidth - 20);
  const y = random(0, windowHeight - 20);
  const angle = random(0, TWO_PI);
  

  push();
    translate(x, y);
    rotate(angle);

    stroke(random(230, 255), random(30, 170), random(0, 15));
    strokeWeight(20);
    line(30, 0, 65, 0);
    line(30, 0, 45, 21);
    line(30, 0, 45, -21);


    stroke('brown');
    strokeWeight(5);
    line(0, 0, 30, 0);
  pop();
}
