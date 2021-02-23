const game = new Game();

function preload() {
    backgroundImage = loadImage("./assets/1719689.jpg");
    danny = loadImage("./assets/croppedfrank.png");
    bonusImage = loadImage("./assets/20200516_141714_480x480.png");
    obstacleImage = loadImage("./assets/monster.gif");
}
function draw() {
    game.draw();
}

function setup() {
    createCanvas(WIDTH, HEIGHT);
}

function keyPressed() {
    game.keyPressed();
}
