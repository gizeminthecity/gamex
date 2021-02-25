class Obstacle {
    constructor() {
        this.x = WIDTH;
        this.height = 110;
        this.y = random(0, 390);
        this.width = 100;
        this.speed = 4;

    }

    draw() {
        fill(0);
        image(obstacleImage,this.x,  this.y, this.width, this.height)
        this.x -= this.speed;
    }
}
