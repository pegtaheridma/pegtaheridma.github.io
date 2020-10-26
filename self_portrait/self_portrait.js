function setup() {
  createCanvas(660, 600);
}

function draw() {
  background(25, 193, 133);

  //Hair
  noStroke()
  fill('black');
  arc(260, 300, 300, 380, QUARTER_PI + HALF_PI, QUARTER_PI, OPEN);
  arc(260, 300, 300, 380, QUARTER_PI + HALF_PI, QUARTER_PI, OPEN);
  //Face 
  noStroke()
  fill(247, 221, 212);
  ellipse(260, 255, 200, 260);
  ellipse(260, 255, 200, 260);

  //Ears
  arc(150, 265, 40, 60, 0, PI + HALF_PI, PI + HALF_PI, OPEN);
  arc(370, 265, 40, 60, 0, PI + PI + HALF_PI, OPEN)
  
  //earring
  noStroke(0)
  fill('lightblue')
  ellipse (150,300,30,30);
  ellipse (380,300,30,30);
  //eyelashes
  fill('black')
  line(400, 150, 420, 110);

  //Bang
  noStroke()
  fill('black');
  arc(300, 160, 150, 100, 0, PI + QUARTER_PI, CHORD);
  arc(180, 160, 140, 148, 0, 0.75 * Math.PI);
  arc(200, 130, 140, 148, 0, 0.75 * Math.PI);
  ellipse(250, 135, 40);

 

  //Eyebrows
  stroke('black');
  strokeWeight(7);
  noFill();
  arc(210, 235, 45, 15, PI, TWO_PI, OPEN);
  arc(310, 235, 45, 15, PI, TWO_PI, OPEN);

  //Eyeshadow
  stroke('black');
  strokeWeight(3);
  arc(210, 255, 45, 15, PI, TWO_PI, OPEN);
  arc(310, 255, 45, 15, PI, TWO_PI, OPEN);
  arc(210, 257, 40, 30, HALF_PI, PI);
  arc(310, 257, 40, 30, 0, HALF_PI);

  //Eyes
  strokeWeight(1)
  fill('brown');
  ellipse(210, 260, 28, 25);
  ellipse(310, 260, 28, 25);

  //Eyeballs
  strokeWeight(1)
  fill(300)
  ellipse(207, 252, 8, 8);
  ellipse(306, 252, 8, 8);

  noStroke()
  fill('Black')
  rect(180,255,3,3)
 //Nose
fill('tan');
ellipse (255,300,10,10);
ellipse (270,300,10,10);


  //Mouth
  fill('red');
  arc(260, 325, 59, 45, 0, PI);
  
   //Neck
  fill(247, 221, 212)
  rect(240, 375, 50, 55, 20);
  
  //Hoodie
  noStroke()
  fill('yellow');
  arc(265, 600, 250, 390, PI, TWO_PI, OPEN);
  
  //Hoodie's logo
  strokeWeight(3)
  fill('purple')
  rect(210, 470, 30, 30);
  strokeWeight(3)
  fill('green')
  rect(250, 470, 30, 30);
  strokeWeight(3)
  fill('orange')
  rect(290, 470, 30, 30);
 

 






}
