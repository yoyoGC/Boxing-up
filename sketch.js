var box;
function setup() {
  createCanvas(400,400);
  box=createSprite(200,150,20,20);
}

function draw() 
{
  background(30);
 drawSprites();
box.velocityY=0;
box.velocityX=0;
 if(keyDown("w")){
   box.velocityY=-5;
   box.velocityX=0;

 }
}




