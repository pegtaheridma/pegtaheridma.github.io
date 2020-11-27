var ballx = 400;
var bally = 400;
var ballSize = 10;
var score =0;
var gameState= "L1";


function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} // end setup


function draw() {
  background("red");
  if (gameState=="L1"){
  levelOne();
  } 
  if (gameState=="L2"){
   levelTwo(); 
  }
  if (gameState=="L3"){
   levelThree(); 
  }
  if (gameState=="L4"){
   levelFour(); 
  }
  if (gameState=="L4"){
   text("Congratulation", width/2,height-50);
   text("You made it!", width/2,height-33);
  
  }
  text(("Score: " + score), width/2, 40);
  
  

} // end draw


function levelOne(){
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>5){
// call level 2
 // fill(random(255));
 gameState= "L2";
  }
  
  ellipse(ballx, bally, ballSize, ballSize);
  line(ballx, bally, mouseX, mouseY);
  
} // end level one

function levelTwo(){
  background(30);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>10){
// lvel 3
   gameState = "L3";

  }
  
//  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);
} // end level two

function levelThree(){
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    ballSize=ballSize +5;
    score= score +1;
  }
  if(score>10){
    background(35);
  }
  if(score>15){
    background(40);
  }
  if(score>16){
    background(45);
  }
  if(score>17){
    background(50);
  }
  if(score>18){
    background(55);
  }
  if(score>19){
    background(60);
  }
  if(score>20){
    background(65);
  }
  if(score>21){
    background(70);
  }
  if(score>22){
    background(75);
  }
    if(score>23){
    background(80);
  }
    if(score>24){
    background(85);
  }
    if(score>25){
    background(90);
  }
    if(score>26){
    background(95);
  }
    if(score>27){
    background(100);
  }
    if(score>28){
    background(105);
  }
    if(score>29){
    background(110);
  }
    if(score>30){
    background(115);
  }
    if(score>31){
    background(125);
  }
    if(score>32){
    background(135);
  }
    if(score>33){
    background(145);
  }
    if(score>34){
    background(155);
  }
    if(score>35){
    background(165);
  }
    if(score>36){
    background(175);
  }
    if(score>37){
    background(185);
  }
    if(score>38){
    background(195);
  }
    if(score>39){
    background(205);
  }
    if(score>40){
    background(215);
  }
    if(score>41){
    background(225);
  }
    if(score>42){
    background(235);
  }
    if(score>43){
    background(245);
  }
    if(score>44){
    background(247);
  }
    if(score>45){
    background(249);
  }
    if(score>46){
    background(251);
  }
    if(score>47){
    background(253);
  }
    if(score>48){
    background(255);
  }
    if(score>49){
    gameState = "L4";
  }
//  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);
} // end level three
  
  function levelFour(){
   background(255); 
  if(score>49){
    ballx = 400;
    bally = 400;
// level 4
//   gameState = "L4";
  }  
//  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);
} // end level four