class Bonus {
    constructor() {
        this.x = WIDTH;
        this.height = 65;
        this.y = random(100, 400);
        this.width = 65;
        this.speed = 4;
    }

    draw() {
        fill(0);
        image(bonusImage,this.x, this.y, this.width, this.height);
        this.x -= this.speed;
    }
}
