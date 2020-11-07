var car, wall;
var speed, weight;
// var defor;

function setup() {
  createCanvas(1200,400);

  speed = random(55,90);
  weight = random(400, 1500);

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1100, 200, 60, height/2);
  wall.shapeColor = (80, 80, 80);

}

function draw() {
  background(0,0,0);  
  
  car.velocityX = speed;

  if(wall.x - car.x < (car.width + wall.width) / 2)
  {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed / 22500;
    if(deformation > 180)
    {
      car.shapeColor = color(255, 0, 0);
    }
    if(deformation < 180 && deformation > 100)
    {
      car.shapeColor = color(230, 230, 0);
    }
    if(deformation < 100)
    {
      car.shapeColor = color(0, 255, 0);
    }

  }



  // defor = (0.5 * weight * speed * speed)/22500;

  // if(isTouching(car, wall) && defor < 100){
    // car.shapeColor = (0, 255, 0);
    // car.velocityX = 0;
  // }

  // if(isTouching(car, wall) && 100 < defor < 180){
    // car.shapeColor = (230, 230, 0);
    // car.velocityX = 0;
  // }
  
  // if(isTouching(car, wall) && defor > 180){
    // car.shapeColor = (255, 0, 0);
    // car.velocityX = 0;
  // }

  drawSprites();
}