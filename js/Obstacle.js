class Obstacle {
    constructor() {
        this.x = WIDTH;
        this.height = 60;
        this.y = random( 0, 430);
        this.width = 60;
        this.speed = 4;

    }

    draw() {
        fill(0);
        rect(this.x,  this.y, this.width, this.height)
        this.x -= this.speed;
    }
}
