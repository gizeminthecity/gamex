class lostGame {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = WIDTH;
        this.height = HEIGHT;
    }

    draw() {
        clear();
        //  image(backgroundImage, this.x, this.y, this.width, this.height);
        textAlign('center');
        textSize(30);
        textFont("Courier New, monospace");
        fill(191, 103, 128);
        text("YOU LOST", 980, 200);
        text("Press ENTER to PLAY again.", 1000, 250);

    }
}
