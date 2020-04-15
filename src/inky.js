import Ghost from "./ghost.js"

export default class Inky extends Ghost {

    constructor(game) {
        super(game, "inky")
        this.row = 29
        this.col = 23
    }

    getTargetBlock() {
        let targetBlock
        switch (this.mode) {
            case "normal":
                switch(this.game.pacman.orientation) {
                    case "right":
                        targetBlock = {
                            row: this.game.pacman.row,
                            col: this.game.pacman.col + 2
                        }
                    case "left":
                        targetBlock = {
                            row: this.game.pacman.row,
                            col: this.game.pacman.col - 2
                        }
                    case "up":
                        targetBlock = {
                            row: this.game.pacman.row - 2,
                            col: this.game.pacman.col - 2
                        }
                    case "down":
                        targetBlock = {
                            row: this.game.pacman.row + 2,
                            col: this.game.pacman.col
                        }
                }
                targetBlock.row = targetBlock.row - (targetBlock.row - this.game.blinky.row)
                targetBlock.col = targetBlock.col = (targetBlock.col - this.game.blinky.col)
                return targetBlock
            case "scatter":
                return { // If in scatter, Blinky moves to the upper right corner
                    row: 29,
                    col: 23
                }
            case "frightened":
                return { // If in scatter, Blinky moves to the upper right corner
                    row: 29,
                    col: 23
                }
            case "dead":
                return {
                    row: 14,
                    col: 13
                }
        }
    }

}