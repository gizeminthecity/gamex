class Game {
    constructor() {
        this.background = new Background();
        this.player = new Player();
    }
    keyPressed() {
        this.player.keyPressed(); 
    }
    draw() {
        clear();
        this.background.draw();
        this.player.draw();
    }
}
