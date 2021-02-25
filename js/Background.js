class Background {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = WIDTH;
        this.height = HEIGHT;
    }

    draw() {
        this.x -= 12;
        image(backgroundImage, this.x, this.y, this.width, this.height);
        image(
            backgroundImage,
            this.x + this.width,
            this.y,
            this.width,
            this.height
        );
        if (this.x <= -this.width) {
            this.x = 0;
        }
    }

    startBg() {
        if (mode == 0) {
            textFont("Courier New, monospace");
            fill(191, 103, 128);
            text("PRESS ENTER TO START", 830, 200);
        }
    }
}
