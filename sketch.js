var fixedRect, movingRect;
var speed,weight,thickness;
function setup() {
  createCanvas(1200,300);
  fixedRect = createSprite(1100, 145, thickness, height/2);
  fixedRect.shapeColor = "grey";
  fixedRect.debug = false;
  movingRect = createSprite(100,150,80,30);
  //movingRect.shapeColor = "green";
  movingRect.debug = false;
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(10,80)
}



function draw() {
  background(0,0,0);
 // movingRect.collide(fixedRect)
 movingRect.velocityX = speed;

if(movingRect.x-fixedRect.x<(fixedRect.width+movingRect.width)/2)
{
  fixedRect.velocityX=0;
  var damage = 0.5 * weight * speed * speed /(thickness*thickness*thickness)
  if(damage>10)
  {
    if(weight>thickness){
      thickness=random(10,20)
    }
    fixedRect.shapeColor="green"
  }
  
  if(damage<10)
  {
    if(weight<thickness){
      thickness=random(30,40)
    }
    fixedRect.shapeColor="red"
  }
}

  drawSprites();
}


