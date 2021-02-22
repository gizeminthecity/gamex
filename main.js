const game = new Game();

function preload() {
    backgroundImage = loadImage("./assets/1719689.jpg");
    danny = loadImage('./assets/3f757814107cd1e3a923c4a3418411f928e80842_hq.png'); 
    bonusImage = loadImage('./assets/20200516_141714_480x480.png');
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
