class Bonus {
    constructor() {
        this.x = WIDTH;
        this.height = 70;
        this.y = random(100, 430);
        this.width = 70;
        this.speed = 4;
    }

    draw() {
        fill(0);
        image(bonusImage,this.x, this.y, this.width, this.height);
        this.x -= this.speed;
    }
}
