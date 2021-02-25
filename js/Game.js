class Game {
    constructor() {
        this.background = new Background();
        this.player = new Player();
        this.obstacles = [];
        this.bonuses = [];
        this.score = 0;
        this.lostGame = new lostGame();
    }

    keyPressed() {
        this.player.keyPressed();

        if(this.gameOver && keyCode === 13) {
            this.init();
            loop();
        }
    }

    init() {
        this.background = new Background();
        this.player = new Player();
        this.obstacles = [];
        this.bonuses = [];
        this.score = 0;
        this.lostGame = new lostGame();
        this.gameOver = false;
    }

    draw() {
        clear();
        this.background.draw();
        this.player.draw();

        if (frameCount % 173 === 0) {
            this.obstacles.push(new Obstacle());
        }

        this.obstacles.forEach((obstacle, index) => {
            obstacle.draw();

            if (obstacle.x <= -obstacle.width) {
                this.obstacles.splice(index, 1);
            }

            if (this.collisionCheck(this.player, obstacle)) {
                console.log("WATCH OUT");
                noLoop();
                this.lostGame.draw();
                this.obstacles.length = 0;
                this.bonuses.length = 0;
                this.gameOver = true;
                this.score = '';
            }
        });

        /// BONUS PART

        textSize(35);
        fill(124, 88, 124);
        text(`${this.score}`, 1600, 50);

        if (frameCount % 60 === 0) {
            this.bonuses.push(new Bonus());
        }

        this.bonuses.forEach((bonus, index) => {
            bonus.draw();

            if (this.collisionCheck(this.player, bonus)) {
                this.score += 10;
                bonus.y = -500;
                console.log("EATEN");
            }

            if (bonus.x <= -bonus.width) {
                this.bonuses.splice(index, 1);
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
