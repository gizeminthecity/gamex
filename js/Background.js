class Background {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = WIDTH;
        this.height = HEIGHT;
    }

    draw() {
        this.x -= 6;
        image(backgroundImage, this.x, this.y, this.width, this.height);
        image(backgroundImage, this.x + this.width,
            this.y,
            this.width,
            this.height
        );
        if (this.x <= -this.width) {
            this.x = 0;
        }
    }
}
