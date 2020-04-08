import Ghost from "./ghost.js"

export default class Blinky extends Ghost {

    constructor(canvas, world, pacman) {
        super(canvas, world, pacman, "blinky")
        this.row = 11
        this.col = 13
        this.offsetX = 8
        this.offsetY = 0
    }

    getTargetBlock() {
        switch (this.mode) {
            case "normal":
                return {
                    row: this.pacman.row,
                    col: this.pacman.col
                }
            case "scatter":
                return { // If in scatter, Blinky moves to the upper right corner
                    row: 1,
                    col: 26
                }
            case "frightened":
                return { // If in scatter, Blinky moves to the upper right corner
                    row: 1,
                    col: 26
                }
            case "dead":
                return {
                    row: 14,
                    col: 13
                }
        }
    }

}