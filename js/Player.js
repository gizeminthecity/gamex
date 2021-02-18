class Player {
    constructor() {
        this.x = 100;
        this.y = 420;
        this.width = WIDTH / 30;
        this.height = HEIGHT / 10;
    }

    draw() {

        rect(this.x, this.y, this.width, this.height);
    }
}
