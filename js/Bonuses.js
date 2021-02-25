class Bonus {
    constructor() {
        this.x = WIDTH;
        this.height = 75;
        this.y = random(100, 400);
        this.width = 75;
        this.speed = 4;
    }

    draw() {
        fill(0);
        image(bonusImage,this.x, this.y, this.width, this.height);
        this.x -= this.speed;
    }
}
