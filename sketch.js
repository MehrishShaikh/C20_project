

function preload(){
  bg=loadImage("iss.png")
  sleep=loadImage("sleep.png")
  brush=loadAnimation("brush.png")
  gym=loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png")
  eat=loadAnimation("eat1.png","eat2.png")
  bath=loadAnimation("bath1.png","bath2.png")
  move=loadAnimation("move.png","move1.png")

}

function setup() {
  createCanvas(800,400);
  ast=createSprite(300,230)
  ast.addImage("sleeping",sleep)
  ast.scale=0.1
}

function draw() {
  background(bg); 
  drawSprites();
  edges=createEdgeSprites();
  ast.bounceOff(edges)
  
  if(keyDown("UP_ARROW")){
    ast.addAnimation("brushing",brush)
   ast.changeAnimation("brushing")
    ast.y=350
    ast.velocityX=0
    ast.velocityY=0
  }

  if(keyDown("DOWN_ARROW")){
    ast.addAnimation("gyming",gym)
   ast.changeAnimation("gyming")
    ast.x=350
    ast.velocityX=0
    ast.velocityY=0
  }

  if(keyDown("LEFT_ARROW")){
    ast.addAnimation("bathing",bath)
   ast.changeAnimation("bathing")
    ast.x=350
    ast.velocityX=0
    ast.velocityY=0
  }

  if(keyDown("RIGHT_ARROW")){
    ast.addAnimation("eating",eat)
   ast.changeAnimation("eating")
    ast.y=350
    ast.velocityX=0
    ast.velocityY=0
  }

  if(keyDown("m")){
    ast.addAnimation("moving",move)
   ast.changeAnimation("moving")
    ast.x=350
    ast.velocityX=0
    ast.velocityY=0
  }
  drawSprites();
}
