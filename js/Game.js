class Game {
    constructor() {
        this.background = new Background();
        this.player = new Player();
        this.obstacles = [];
    }
    keyPressed() {
        this.player.keyPressed();
    }
    draw() {
        clear();
        this.background.draw();
        this.player.draw();

        if (frameCount % 200 === 0) {
            this.obstacles.push(new Obstacle());
        }

        this.obstacles.forEach((obstacle, index) => {
            obstacle.draw();

            if (this.collisionCheck(this.player, obstacle)) {
                
                console.log("WATCH OUT");
            }

            if (obstacle.x <= -obstacle.width) {
                this.obstacles.splice(index, 1);
            }
        });
    }

    collisionCheck(player, obstacle) {
        const playerTopArea = player.y;
        const playerLeftArea = player.x;
        const playerRightArea = player.x + player.width;
        const playerBottomArea = player.y + player.height;

        const obsTopArea = obstacle.y;
        const obsLeftArea = obstacle.x;
        const obsRightArea = obstacle.x + obstacle.width;
        const obsBottomArea = obstacle.y + obstacle.height;
        const isTouchingOnLeft = obsRightArea > playerLeftArea;
        const isTouchingOnBottom = obsTopArea < playerBottomArea;
        const isTouchingOnRight = obsLeftArea < playerRightArea;
        const isTouchingOnTop = obsBottomArea > playerTopArea;

        return (
            isTouchingOnRight &&
            isTouchingOnTop &&
            isTouchingOnBottom &&
            isTouchingOnLeft
        );
    }
}
