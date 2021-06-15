var cityBackground;
var health;
var healthMeter = 100;
var hunger;
var hungerMeter = 100;

var ground;
 
var zombie,frank;
var zombieGroup;
var cityBackgroungImg, cityBackground;

function preload(){
    cityBackgroungImg= loadImage("assets/CityBackgroung.png")
}
function setup(){
    createCanvas(displayWidth,displayHeight);
    cityBackground = createSprite(50, 50, width*10, height);
    cityBackground.addImage(cityBackgroungImg);
    //cityBackground.scale = 0.8;
   

    //ground = createSprite(0,400, 1600, 50);

 //frank = createSprite(70, 340, 50, 50);
//frank.scale = 1;
//frank.setAnimation("frank_right");

 //zombieGroup = new Group();


}

 



 


function draw() {
  background("yellow");
  //if(cityBackground.x < 0){
    //  cityBackground.x = 200
  //}
  //ground.shapeColor = "black";
  //frank.collide(ground);
  
  //for(var i = 20; i<120; i = i + 20){
    //health = createSprite(i, 20, 30, 30);
     // health.scale = 0.3;
      //health.setAnimation("health");
 // }
  //for(var i = 20; i<120; i = i + 20){
    //hunger = createSprite(i, 50, 30, 30);
     // hunger.scale = 0.6;
     // hunger.setAnimation("hunger");
  //}

  //cityBackground.velocityX = -10;

    //if(cityBackground < 0){
     //   cityBackground.x = 200;
    //}

    //cityBackground.velocityX = -1;
  
  //frank.velocityY = frank.velocityY + 0.8;
  
  //if (keyDown("a")) {
  //  frank.x = frank.x - 3;
    //frank.setAnimation("frank_running_left");
  //}
  
 // if (keyDown("d")) {
    //frank.x = frank.x + 3;
   // frank.setAnimation("frank_running_right");
 // }
  
  //if (keyDown("space")&& frank.y >= 320) {
   // frank.velocityY = -12;
 // }


 // spawnZombie();
  
  drawSprites();
}

//function spawnZombie(){
  //if(frameCount%260==0){
  //zombie = createSprite(500, 340, 50,50);
  //zombie.setAnimation("zombie_attack");
  
   // zombie.velocityX = -1;

    //zombieGroup.add(zombie);
  //}
//}


//function mousePressed(){
 // console.log("checking");
//}

