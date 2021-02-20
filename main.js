const game = new Game();

function preload() {
    backgroundImage = loadImage("./assets/1719689.jpg");
}
function draw() {
    game.draw();
}

function setup() {
    createCanvas(WIDTH, HEIGHT);
}

function keyPressed() {}
