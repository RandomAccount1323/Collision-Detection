var movingRect;
var rect;
// var d;

function setup() {
    createCanvas(800, 400);
    movingRect = createSprite(400, 200, 30, 80);
    movingRect.shapeColor = "red";

    rect = createSprite(200, 200, 50, 50);
    rect.shapeColor = "red";
}

function draw() {
    background(0);
    movingRect.y = mouseY;
    movingRect.x = mouseX;

    if (movingRect.x - rect.x <= movingRect.width / 2 + rect.width / 2 &&
        rect.x - movingRect.x <= movingRect.width / 2 + rect.width / 2 &&
        movingRect.y - rect.y <= movingRect.height / 2 + rect.height / 2 &&
        rect.y - movingRect.y <= movingRect.height / 2 + rect.height / 2) {

        movingRect.shapeColor = "yellow";
        rect.shapeColor = "yellow";

    } else {
        movingRect.shapeColor = "red";
        rect.shapeColor = "red";
    }


    drawSprites();
}