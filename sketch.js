// creating variables
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody1,packageBody2,packageBody3,ground;
var count;
var backgroundImg,backgroundSprite;

// constant variables
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

// loading the image to the canvas
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
    backgroundImg = loadImage("scene.2.png");
}

function setup() {
	createCanvas(900, 500);
	rectMode(CENTER);
	
// creating 'backgroundSprite'
	backgroundSprite = createSprite(400,40,900,500);
	backgroundSprite.addImage(backgroundImg);
	backgroundSprite.scale=2.5;

 // creating 'packageSprites'
	packageSprite1=createSprite(width/4, 80, 10,10);
	packageSprite1.addImage(packageIMG);
	packageSprite1.scale=0.2;

	packageSprite2=createSprite(width/4, 80, 10,10);
	packageSprite2.addImage(packageIMG)
	packageSprite2.scale=0.2

	packageSprite3=createSprite(width/4, 80, 10,10);
	packageSprite3.addImage(packageIMG)
	packageSprite3.scale=0.2

// creating 'helicopterSprite'
	helicopterSprite=createSprite(width/2, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

// creating 'groundSprite' 
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("green")

// creating the count
	count = 0;

// creating engine and world
	engine = Engine.create();
	world = engine.world;

// creating the packageBody's 
	packageBody1 = Bodies.circle(width/2 , 100 , 5 , {restitution:0.5,isStatic:true,friction:50});
	World.add(world, packageBody1);
	packageBody2 = Bodies.circle(width/2 , 100 , 5 , {restitution:0.5,isStatic:true,friction:50});
	World.add(world, packageBody2);
	packageBody3 = Bodies.circle(width/2 , 100 , 5 , {restitution:0.5,isStatic:true,friction:50});
	World.add(world, packageBody3);

// Create a Ground
	ground = Bodies.rectangle(width/2, 450, width, 10 , {isStatic:true} );
 	World.add(world, ground);

// running the engine   
	Engine.run(engine);  
}


function draw() {
  rectMode(CENTER);
  background(0);
	
// changing the position, x and y of packageSprites
  packageSprite1.x= packageBody1.position.x;
  packageSprite1.y= packageBody1.position.y;

  packageSprite2.x= packageBody2.position.x;
  packageSprite2.y= packageBody2.position.y;

  packageSprite3.x= packageBody3.position.x;
  packageSprite3.y= packageBody3.position.y;

//  displaying the sprites in the canvas 
  packageSprite1.display();
  packageSprite2.display();
  packageSprite3.display();
  helicopterSprite.display();
  backgroundSprite.display();

  drawSprites();
}

// creating a function, 'keyPressed'
function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		count++;
	   
	   	if(count === 1){
			Matter.Body.setStatic(packageBody1,false);
		}else if(count === 2){
			Matter.Body.setStatic(packageBody2,false);
			// console.log(rand);
		}else if(count === 3){
			Matter.Body.setStatic(packageBody3,false);
			// console.log(rand);
		}
 	}
}

