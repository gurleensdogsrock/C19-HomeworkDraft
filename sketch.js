var backG, backGImg;
var rocket, rocketImg;
var star, starImg;
var fire, fireImg;

function preload() {
    backGImg = loadImage("star.jpeg");
    rocketImg = addAnimation("rocket.png");
    starImg = loadAnimation("starindi.png");
    fireImg = loadAnimation("fire.jpg");
}

function setup() {
    createCanvas(600, 600)

    backG = createSprite(300, 300);
    backG.addImage("backG", backGImg);
    backG.velocityY = 1;

    rocket = createSprite(200, 200, 50, 50);
    rocket.scale = 0.1;
    rocket.addAnimation("rocket", rocketImg);

    star = createSprite(200, 200,70,80);
star.scale=0.1;
star.addImage("star", starImg);

    starGroup = new Group();
    fireGroup = new Group();
    invisibleBlockGroup = new Group();
    
 
}

function spawnObstacles() {
    if (frameCount % 240 === 0) {
        fire = createSprite(200, 200,80,80);
        fire.addImage("fire", fireImg);
        fire.scale=0.1;
   
        invisibleBlock = createSprite(200, 15);
        invisibleBlock.width = fire.width;
        invisibleBlock.height =2;
        rocket.x = Math.round(random(120, 400));
    

    }

}
function draw() {
    drawSprites();
}