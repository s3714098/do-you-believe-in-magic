//welcome page
var mode; 
let cards;
let magicwand;
var arcshadowsparkles;
var cardCanvas;
var sparklesHeight = 350;

function preload(){
  magicwand = loadImage('magicwand.png')
  cards = loadImage('card.png');
}

function setup() {
  //welcome page mode
  mode = 0;
  createCanvas(600, 600);
  background(0,0,0);
  cardCanvas = createGraphics(600,600);
  arcshadowsparkles = createGraphics(180,sparklesHeight);
  // noCursor()
  var button = createButton("screenshot");
  button.mousePressed(save);
}

function draw() {
  clear();
  if (mode==0) {
    background(0,0,0);
   
    //do you believe in magic?
    push();
    textSize(30);
    textStyle(BOLDITALIC);
    fill(255,255,255);
    text('do you believe in magic?',110,300);
    pop();
    
    //press "esc" if you do
    textSize(15);
    textStyle(ITALIC);
    fill(255,255,255);
    text('*press esc if you do*', 215, 350);
  }
  if (mode==1) {
    background(0,0,0);
  
   //CARDS TRAIL
  if(mouseIsPressed == true) {
    cardCanvas.push();
    cardCanvas.translate(mouseX,mouseY);
    cardCanvas.rotate(random(0,360));
    cardCanvas.image(cards,0,0,70,70);
    cardCanvas.pop();
  }
  
  imageMode(CORNER);
  image(cardCanvas,0,0,600,600);
  
  imageMode(CENTER);
  //HAT
  //base rectangle
  noStroke();
  fill(60,60,60);
  rect(200,350,200,150);
  //base ellipse
  noStroke();
  fill(60,60,60);
  ellipse(300,500,200,100);
  //red ribbon rectangle
  noStroke();
  fill(214, 34, 41);
  rect(200,350,200,50);
  //red ribbon ellipse
  noStroke();
  fill(214, 34, 41);
  ellipse(300,400,200,75);
  //top hat ellipse
  noStroke();
  fill(120,120,120);
  ellipse(300,350,280,100);
  //top hat inner shadow ellipse
  noStroke();
  fill(36,36,36);
  ellipse(300,350,150,45);
  
  //ARC SHADOW 
  fill(255,255,255,80);
  rect(225,0,150,350);
  arc(width/2,350,150,45,0,PI);
  
  //HOVER ON THE ARC SHADOW FOR SPARKLES
  arcshadowsparkles.circle(mouseX-width/2,mouseY,4);
  
  //ARC SHADOW SPARKLES 
  arcshadowsparkles.fill(245,206,199);
  arcshadowsparkles.noStroke();
  image(arcshadowsparkles,width/2,sparklesHeight/2);
  
  //ROTATING STAR
  push();
  translate(width/2, height/2);
  rotate(frameCount / 50.0);
  fill(255,255,255,30);
  star(0, 0, 5, 80, 5);
  pop();
  
  push();
  translate(width/2, height/2);
  rotate(frameCount / 200.0);
  fill(255,255,255);
  star(0, 0, 5, 70, 5);
  pop();
  
  //MAGIC WAND "PAINT BRUSH"
  image(magicwand,mouseX, mouseY, 150, 150);  
  
}
//STAR DRAWING
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
}
function keyPressed() {
  if (keyCode===ESCAPE) {
    mode=1;
  }
}