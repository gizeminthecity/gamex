class Player {
    constructor() {
        this.x = 570;
        this.y = 200;
        this.velocity = 0;
        this.floor = 408;
        this.lift = -15;
        this.width = 120;
        this.height = 90;
    }

    keyPressed() {
        if (keyCode === 32) {
            this.jump();
        }

        if (keyCode === 40) {
            this.y -= 50;  
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

        // fill(0);
        image(danny,this.x, this.y, this.width, this.height);
    }
}
