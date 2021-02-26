class Background {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = WIDTH;
        this.height = HEIGHT;
        this.openning;
    }

    draw() {
        this.x -= 12;
        image(backgroundImage, this.x, this.y + 40, this.width, this.height);
        image(
            backgroundImage,
            this.x + this.width,
            this.y + 40,
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
            image(logo, 750, 0);
            text(
                `HELP FRANK TO EAT HIS FAVORITE RUM HAM WITHOUT 
            TOUCHING LIAM MCPOYLE`,
                620,
                400
            );
            text("PRESS SPACE TO JUMP", 840, 550);
            text("", 830, 550);
            text("PRESS ENTER TO START", 840, 650);
        }
    }
}
