var s;
var scl = 20;
var food;
var left,right,up,down ;
var bar ;
var leftimg , rightimg , upimg, downimg ;
var score = 0 ;
var overs , eats , spawns ;


function setup() {
  //createCanvas(1200, 600);
  createCanvas(windowWidth-25 ,windowHeight-100 );
  s = new Snake();
  frameRate(10);
  grid();
  
  bar = createSprite(width/2,height-125,width,1)  ;

  left = createSprite(width/10-20,height-60,80,80);
  left.addImage("left",leftimg)
  left.scale=0.3 ;

  right = createSprite(width/4-80,height-62,80,80);
  right.addImage("right",rightimg)
  right.scale=0.25 ;

  up = createSprite(width/2-250,height-62,80,80);
  up.addImage("up",upimg)
  up.scale=0.55 ;

  down = createSprite(width/2-40,height-60,80,80);
  down.addImage("down",downimg)
  down.scale=0.7 ;

  //right=createSprite();
  //up=createSprite();
  //down=createSprite();
}



function preload(){
  leftimg = loadImage("left1.png");
 rightimg = loadImage("right1.png");
 upimg = loadImage("up1.png");
  downimg = loadImage("down1.png");

eats=loadSound("eat1.wav");
overs=loadSound("over1.wav");
spawns-loadSound("spawn1.wav");


}

function grid() {
  
  let cols = floor(width / scl);
  let rows = floor((height-130) / scl);
  console.log(rows);
  console.log(height-130);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}






function draw() {
  background(194, 150, 220);

  if (s.eat(food)) {
    grid();
  }

  fill("black");
  textSize(28);
text("SCORE : " + score ,width-200 , height-60  ) ;

if (mousePressedOver(up)){
  s.dir(0, -1);
}

if (mousePressedOver(down)){
  s.dir(0, 1);
}
 

if (mousePressedOver(left)){
  s.dir(-1, 0);
}
 

if (mousePressedOver(right)){
  s.dir(1, 0);
}


  s.death();
  s.update();
  s.show();
  fill(0, 145, 124);
  rect(food.x, food.y, scl, scl);

drawSprites();

}




function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}


