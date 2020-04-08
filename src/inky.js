import Ghost from "./ghost.js"

export default class Pinky extends Ghost {

    constructor(canvas, world, pacman, blinky) {
        super(canvas, world, pacman, "inky")
        this.row = 1
        this.col = 23
        this.blinky = blinky
    }

    getTargetBlock() {
        let targetBlock
        switch (this.mode) {
            case "normal":
                switch(this.pacman.orientation) {
                    case "right":
                        targetBlock = {
                            row: this.pacman.row,
                            col: this.pacman.col + 2
                        }
                    case "left":
                        targetBlock = {
                            row: this.pacman.row,
                            col: this.pacman.col - 2
                        }
                    case "up":
                        targetBlock = {
                            row: this.pacman.row - 2,
                            col: this.pacman.col - 2
                        }
                    case "down":
                        targetBlock = {
                            row: this.pacman.row + 2,
                            col: this.pacman.col
                        }
                }
                targetBlock.row = targetBlock.row - (targetBlock.row - this.blinky.row)
                targetBlock.col = targetBlock.col = (targetBlock.col - this.blinky.col)
                return targetBlock
            case "scatter":
                return { // If in scatter, Blinky moves to the upper right corner
                    row: 1,
                    col: 1
                }
            case "frightened":
                return { // If in scatter, Blinky moves to the upper right corner
                    row: 1,
                    col: 1
                }
            case "dead":
                return {
                    row: 14,
                    col: 13
                }
        }
    }

}