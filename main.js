const game = new Game();

function preload() {
    backgroundImage = loadImage("./assets/1719689.jpg");
    danny = loadImage("./assets/croppedfrank.png");
    bonusImage = loadImage("./assets/rumham.png");
    obstacleImage = loadImage(
        "./assets/st,small,507x507-pad,600x600,f8f8f8.png"
    );
    logo = loadImage('./assets/hqdefault.png');
    endImage = loadImage('./assets/flat,750x,075,f-pad,750x1000,f8f8f8.u3.jpg');
}
function draw() {
    clear();
    game.background.startBg();
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

