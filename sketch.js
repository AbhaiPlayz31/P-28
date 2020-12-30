
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, tree, treeImg;
var boy, boyImg;
var stone, slingshot;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mangoImg;

function preload()
{
	treeImg = loadImage("tree.png");
	boyImg = loadImage("boy.png");
	//mangoImg = loadImage("mango.png");
}

function setup() {
	createCanvas(1500, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground();
	stone = new Stone(100,700,80);
	mango1 = new Mango(600,290,30);
	mango2 = new Mango(700,325,50);
	mango3 = new Mango(800,260,30);
	mango4 = new Mango(900,200,30);
	mango5 = new Mango(1000,320,30);
	mango6 = new Mango(1100,450,50);
	mango7 = new Mango(1200,500,30);
	mango8 = new Mango(1300,500,50);

	sling = new SlingShot(stone.body, {x:100,y:700});

	tree = createSprite(900,600);
	tree.addImage(treeImg);
	tree.scale = 0.9;

	boy = createSprite(160,810);
	boy.addImage(boyImg);
	boy.scale = 0.15;
	
	ground = createSprite(750,900,1700,20);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  fill("black");
  textSize(18);

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);

  drawSprites();

  stone.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  sling.display();
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}


function mouseReleased(){
	sling.fly();
}



function detectCollision(lstone, lmango){

	if(lstone.body.position.x - lmango.body.position.x <lmango.diametre + lstone.diametre
		&& lmango.body.position.x - lstone.body.position.x <lmango.diametre + lstone.diametre
		&& lstone.body.position.y - lmango.body.position.y <lmango.diametre + lstone.diametre
		&& lmango.body.position.y - lstone.body.position.y <lmango.diametre + lstone.diametre){
			Matter.Body.setStatic(lmango.body, false);
		}
	// mangoBodyPosition = lmango.body.position
	// stoneBodyPosition = lstone.body.position

	// var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	// if(distance<=lmango.r+lstone.r){
	// 	Matter.Body.setStatic(lmango.body, false)
	// }


}

// function keyPressed(){
// 	if(keyCode === 32){
// 		Matter.Body.setPosition(stone.body, {x:100, y:465});
// 		attach.slingshot(stone.body);
// 	}
// }







