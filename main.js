const game = new Game();

function preload() {
    backgroundImage = loadImage("./assets/1719689.jpg");
    danny = loadImage("./assets/croppedfrank.png");
    bonusImage = loadImage("./assets/rumham.png");
    obstacleImage = loadImage("./assets/monster.gif");
}
function draw() {
    clear();
    if (mode == 0) {
        textFont("Courier New, monospace");
        fill(191, 103, 128);
        text("PRESS ENTER TO START", 830, 200);
    }
    if (mode == 1) {
        game.draw();
    }
}

function setup() {
    mode = 0;
    createCanvas(WIDTH, HEIGHT);
    textSize(30);
}

function keyPressed() {
    if (keyCode === 13) {
        mode = 1;
    }
    game.keyPressed();
}
