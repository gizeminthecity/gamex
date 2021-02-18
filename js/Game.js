class Game {
    constructor() {
        this.background = new Background();
        this.player = new Player();
    }
    draw() {
        clear();
        this.background.draw();
        this.player.draw();
    }
}
