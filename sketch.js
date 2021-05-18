var backgroundImg;
var cat, mouse, catSitting, mouseSitting, mouseBully, catChasing, mouseTouched, catTouched;

function preload() {
    backgroundImg = loadImage("images/garden.png");
    catSitting = loadAnimation("images/cat1.png");
    catChasing = loadAnimation("images/cat2.png,cat3.png");
    catTouched = loadAnimation("images/cat4.png");
    mouseSitting = loadAnimation("images/mouse1.png");
    mouseBully = loadAnimation("images/mouse2.png,mouse3.png");
    mouseTouched = loadAnimation("images/mouse4.png");
}

function setup() {
    createCanvas(800, 600);
    backgroundSprite = createSprite(400, 300);
    backgroundSprite.addImage(backgroundImg);

    cat = createSprite(100, 550, 10, 10);
    mouse = createSprite(600, 550, 10, 10);



}

function draw() {

    background(255);

    cat.addAnimation("catSitting", catSitting);
    mouse.addAnimation("mouseSitting", mouseSitting);

    if (cat.x - mouse.x < (cat.width - mouse.width) / 2) {
        cat.velocityX = 0;
        cat.addAnimation("catTouched", catTouched);
        cat.changeAnimation("catTouched");

        mouse.addAnimation("mouseTouched", mouseTouched);
        mouse.changeAnimation("mouseTouched");
    }

    drawSprites();
}


function keyPressed() {

    if (keyCode === LEFT_ARROW) {
        mouse.addAnimation("mouseBully", mouseBully);
        mouse.changeAnimation("mouseBully");

        cat.addAnimation("catChasing", catChasing);
        cat.changeAnimation("catChasing");
    }


}
