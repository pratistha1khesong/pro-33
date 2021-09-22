




function preload() {
  bg=loadImage("snow2.jpg")
  sImage=loadImage("Snowman_2.png")
  sImage2=loadImage("snowman_1.png")
  snow1=loadImage("snow5.webp")
}

function setup() {
  createCanvas(1200,600);
snowman = createSprite(100, 500, 50, 50);
snowman.addImage(sImage)
snowman.scale=0.5
snowman2 = createSprite(1000, 500, 50, 50);
snowman2.addImage(sImage2)
snowman2.scale=0.5

}

function draw() {
  background(bg);  
  drawSprites();
  if(frameCount%100===0){
    snow=createSprite(random(100,1000),-10)
    snow.addImage(snow1)
    snow.velocityY=2
    snow.scale=0.1;
  }
}
