import Ghost from "./ghost.js"

export default class Clyde extends Ghost {

    constructor(game) {
        super(game, "clyde")
        this.row = 29
        this.col = 1
    }

    getTargetBlock() {
        let targetBlock
        switch (this.mode) {
            case "normal":
                if (Math.abs(this.row - this.game.pacman.row) < 8 || Math.abs(this.col - this.game.pacman.col) < 8) {
                    return {
                        row: 29,
                        col: 1
                    }
                } else {
                    return {
                        row: this.game.pacman.row,
                        col: this.game.pacman.col
                    }
                }
            case "scatter":
                return { // If in scatter, Blinky moves to the upper right corner
                    row: 29,
                    col: 1
                }
            case "frightened":
                return { // If in scatter, Blinky moves to the upper right corner
                    row: 29,
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