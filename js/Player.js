class Player {
    constructor() {
        this.x = 570;
        this.y = 200;
        this.velocity = 0;
        this.floor = 465;
        this.lift = -15;
        this.width = 50;
        this.height = 50;
    }

    keyPressed() {
        if (keyCode === 32) {
            this.jump();
        }
    }

    jump() {
        this.velocity += this.lift;
    }

    draw() {
        this.velocity += GRAVITY;
        this.y += this.velocity;

        if (this.y >= this.floor) {
            this.y = this.floor;
            this.velocity = 0;
        }

        if (this.y < 25) {
            this.y = 25;
            this.velocity = 0;
        }

        fill(0);
        ellipse(this.x, this.y, this.width, this.height);
    }
}
