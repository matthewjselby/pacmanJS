import Ghost from "./ghost.js"

export default class Pinky extends Ghost {

    constructor(canvas, world, pacman) {
        super(canvas, world, pacman, "pinky")
        this.row = 1
        this.col = 1
    }

    getTargetBlock() {
        switch (this.mode) {
            case "normal":
                switch(this.pacman.orientation) {
                    case "right":
                        return {
                            row: this.pacman.row,
                            col: this.pacman.col + 4
                        }
                    case "left":
                        return {
                            row: this.pacman.row,
                            col: this.pacman.col - 4
                        }
                    case "up":
                        return {
                            row: this.pacman.row - 4,
                            col: this.pacman.col - 4
                        }
                    case "down":
                        return {
                            row: this.pacman.row + 4,
                            col: this.pacman.col
                        }
                }
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