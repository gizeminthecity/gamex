class Game {
    constructor() {
        this.background = new Background();
    }
    draw() {
        clear();
        this.background.draw();

    }
}