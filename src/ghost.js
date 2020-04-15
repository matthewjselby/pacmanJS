import { CreateImageLooper } from "../src/image-looper.js"

export default class Ghost {

    constructor(game, ghostName) {
        // Constants
        this.targetMovementSpeed = 3.5 * 30 // Target movement speed in pixels per second (4 * 30 fps = 120 px/s)
        this.targetMovementAnimationSpeed = 4 // Animate movement 4x / second
        this.lastAnimationUpdate = 0
        // Set local vars from parameters
        this.canvas = document.getElementById(ghostName)
        this.ctx = this.canvas.getContext('2d')
        this.ctx.canvas.width = 28 * 16
        this.ctx.canvas.height = 31 * 16
        this.game = game
        // Current position/state info
        this.row = 1
        this.col = 1
        this.offsetX = 0
        this.offsetY = 0
        this.orientation = "left"
        this.updatedOrientation = undefined
        this.mode = "normal"
        this.frightenedTimer
        this.deadFrames = 0
        // Load images for displaying Blinky
        this.images = this.preloadImages(ghostName)
        this.currentImage = this.images[this.mode].next(this.orientation)
        this.game.pacman.ghosts.push(this)
    }

    preloadImages(ghostName) {
        let imgRight1 = new Image()
        imgRight1.src = "./resources/" + ghostName + "-right-1.png"
        let imgRight2 = new Image()
        imgRight2.src = "./resources/" + ghostName + "-right-2.png"
        let imgDown1 = new Image()
        imgDown1.src = "./resources/" + ghostName + "-down-1.png"
        let imgDown2 = new Image()
        imgDown2.src = "./resources/" + ghostName + "-down-2.png"
        let imgLeft1 = new Image()
        imgLeft1.src = "./resources/" + ghostName + "-left-1.png"
        let imgLeft2 = new Image()
        imgLeft2.src = "./resources/" + ghostName + "-left-2.png"
        let imgUp1 = new Image()
        imgUp1.src = "./resources/" + ghostName + "-up-1.png"
        let imgUp2 = new Image()
        imgUp2.src = "./resources/" + ghostName + "-up-2.png"
        // Load images to display when Blinky is scared
        let imgScaredBlue1 = new Image()
        imgScaredBlue1.src = "./resources/scared-ghost-blue-1.png"
        let imgScaredBlue2 = new Image()
        imgScaredBlue2.src = "./resources/scared-ghost-blue-2.png"
        let imgScaredWhite1 = new Image()
        imgScaredWhite1.src = "./resources/scared-ghost-white-1.png"
        let imgScaredWhite2 = new Image()
        imgScaredWhite2.src = "./resources/scared-ghost-white-2.png"
        // Load images to display when Blinky is dead
        let imgDeadRight = new Image()
        imgDeadRight.src = "./resources/ghost-eyes-right.png"
        let imgDeadDown = new Image()
        imgDeadDown.src = "./resources/ghost-eyes-down.png"
        let imgDeadLeft = new Image()
        imgDeadLeft.src = "./resources/ghost-eyes-left.png"
        let imgDeadUp = new Image()
        imgDeadUp.src = "./resources/ghost-eyes-up.png"
        let scoreImg1 = new Image()
        scoreImg1.src = "./resources/score-1.png"
        let scoreImg2 = new Image()
        scoreImg2.src = "./resources/score-2.png"
        let scoreImg3 = new Image()
        scoreImg3.src = "./resources/score-3.png"
        let scoreImg4 = new Image()
        scoreImg4.src = "./resources/score-4.png"
        return {
            normal: CreateImageLooper({
                right: [imgRight1, imgRight2],
                down: [imgDown1, imgDown2],
                left: [imgLeft1, imgLeft2],
                up: [imgUp1, imgUp2]
            }),
            scatter: CreateImageLooper({
                right: [imgRight1, imgRight2],
                down: [imgDown1, imgDown2],
                left: [imgLeft1, imgLeft2],
                up: [imgUp1, imgUp2]
            }),
            frightened: CreateImageLooper({
                right: [imgScaredBlue1, imgScaredWhite2, imgScaredWhite1, imgScaredBlue2],
                down: [imgScaredBlue1, imgScaredWhite2, imgScaredWhite1, imgScaredBlue2],
                left: [imgScaredBlue1, imgScaredWhite2, imgScaredWhite1, imgScaredBlue2],
                up: [imgScaredBlue1, imgScaredWhite2, imgScaredWhite1, imgScaredBlue2]
            }),
            dead: CreateImageLooper({
                right: [imgDeadRight],
                down: [imgDeadDown],
                left: [imgDeadLeft],
                up: [imgDeadUp]
            }),
            score: [
                scoreImg1,
                scoreImg2,
                scoreImg3,
                scoreImg4
            ]
        }
    }

    getAllowedMoves() {
        let allowedMoves = []
        if (this.mode == "normal") { // Force movement out of ghost house in normal mode
            if ((this.row == 14 || this.row == 15) && (this.col >= 11 && this.col <= 16)) {
                return [{ col: 1, row: 1, dir: "up" }]
            } else if (this.row == 13 && (this.col == 15 || this.col == 16)) {
                return [{ col: 1, row: 1, dir: "left" }]
            } else if (this.row == 13 && (this.col == 11 || this.col == 12)) {
                return [{ col: 1, row: 1, dir: "right" }]
            } else if (this.row == 13 && (this.col == 13 || this.col == 14)) {
                return [{ col: 1, row: 1, dir: "up" }]
            } else if (this.row == 12 && (this.col == 13 || this.col == 14)) {
                return [{ col: 1, row: 1, dir: "up" }]
            }
        }
        let upCol = this.col
        let upRow = this.row - 1
        if (this.game.world.worldMap[upRow][upCol] != 2 && this.orientation != "down") {
            if (!((this.col == 12 || this.col == 15) && (this.row == 11 || this.row == 23)) && !(this.row == 14 && (this.col == -1 || this.col == 28))) { // Special rule -- ghosts can't turn up at these locations
                allowedMoves.push({ col: upCol, row: upRow, dir: "up" })
            }
        }
        let downCol = this.col
        let downRow = this.row + 1
        if (this.game.world.worldMap[downRow][downCol] != 2 && this.orientation != "up") {
            if (!(this.row == 14 && (this.col == -1 || this.col == 28))) {
                allowedMoves.push({ col: downCol, row: downRow, dir: "down" })
            }
        }
        let leftCol = this.col - 1
        let leftRow = this.row
        if (this.game.world.worldMap[leftRow][leftCol] != 2 && this.orientation != "right") allowedMoves.push({ col: leftCol, row: leftRow, dir: "left" })
        let rightCol = this.col + 1
        let rightRow = this.row
        if (this.game.world.worldMap[rightRow][rightCol] != 2 && this.orientation != "left") allowedMoves.push({ col: rightCol, row: rightRow, dir: "right" })
        return allowedMoves
    }

    getDistanceFromBlockToTargetBlock(currentBlock, targetBlock) {
        return Math.sqrt(Math.abs(currentBlock.row - targetBlock.row) ** 2 + Math.abs(currentBlock.col - targetBlock.col))
    }

    canMoveToNextSquareInDirection(direction) {
        switch (direction) {
            case "right":
                return this.game.world.worldMap[this.row][this.col + 1] != 2
            case "left":
                return this.game.world.worldMap[this.row][this.col - 1] != 2
            case "down":
                return this.game.world.worldMap[this.row + 1][this.col] != 2
            case "up":
                return this.game.world.worldMap[this.row - 1][this.col] != 2
        }
    }

    reverseDirection() {
        switch (this.orientation) {
            case "right":
                if (this.canMoveToNextSquareInDirection("left")) this.orientation = "left"
                break
            case "down":
                if (this.canMoveToNextSquareInDirection("up")) this.orientation = "up"
                break
            case "left":
                if (this.canMoveToNextSquareInDirection("right")) this.orientation = "right"
                break
            case "up":
                if (this.canMoveToNextSquareInDirection("down")) this.orientation = "down"
                break
        }
    }

    getTargetBlock() {
        // Implemented on a per-ghost basis
        return {
            row: 1,
            col: 1
        }
    }

    determineNewDirection() {
        let targetBlock = this.getTargetBlock()
        let allowedMoves = this.getAllowedMoves()
        let bestMove = allowedMoves[0]
        let shortestDistance = this.getDistanceFromBlockToTargetBlock(bestMove, targetBlock)
        for (var i = 1; i < allowedMoves.length; i++) {
            let distance = this.getDistanceFromBlockToTargetBlock(allowedMoves[i], targetBlock)
            if (distance < shortestDistance) {
                shortestDistance = distance
                bestMove = allowedMoves[i]
            }
        }
        return bestMove.dir
    }

    checkForCollisionWithPacman() {
        let leftBound = (this.col * 16) + this.offsetX
        let rightBound = (this.col * 16) + this.offsetX + 32
        let upperBound = (this.row * 16) + this.offsetY
        let lowerBound = (this.row * 16) + this.offsetY + 32
        let pacmanLeftBound = (this.game.pacman.col * 16) + this.game.pacman.offsetX
        let pacmanRightBound = (this.game.pacman.col * 16) + this.game.pacman.offsetX + 32
        let pacmanUpperBound = (this.game.pacman.row * 16) + this.game.pacman.offsetY
        let pacmanLowerBound = (this.game.pacman.row * 16) + this.game.pacman.offsetY + 32
        if (this.col == this.game.pacman.col) {
            if ((pacmanUpperBound < lowerBound && pacmanUpperBound > upperBound) || (pacmanLowerBound > upperBound && pacmanLowerBound < lowerBound)) {
                return true
            }
        } else if (this.row == this.game.pacman.row) {
            if ((pacmanLeftBound < rightBound && pacmanLeftBound > leftBound) || (pacmanRightBound > leftBound && pacmanRightBound < rightBound)) {
                return true
            }
        }
        return false
    }

    getScared() {
        this.reverseDirection()
        this.mode = "frightened"
        clearTimeout(this.frightenedTimer)
        this.frightenedTimer = setTimeout(() => {
            if (this.mode == "frightened") this.mode == "normal"
            this.game.pacman.ghostMultiplier = 1
        }, 5 * 1000)
    }

    updatePosition(timeDelta) {
        // If travel to previous block has completed, calculate the next block to travel to
        if (this.offsetX == 0 && this.offsetY == 0) {
            this.orientation = this.determineNewDirection()
        }
        this.erase()
        // Move in direction of current orientation
        if (this.deadFrames == 0) {
            let moveIncrement = this.targetMovementSpeed * timeDelta / 1000
            switch (this.orientation) {
                case "right":
                    this.offsetX += moveIncrement
                    if (this.offsetX >= 16 || this.offsetX == 0) {
                        this.col++
                        if (this.col == 28) {
                            this.col = -1
                        }
                        this.offsetX = 0
                    }
                    break
                case "left":
                    this.offsetX -= moveIncrement
                    if (this.offsetX <= -16 || this.offsetX == 0) {
                        this.col--
                        if (this.col == -1) {
                            this.col = 28
                        }
                        this.offsetX = 0
                    }
                    break
                case "down":
                    this.offsetY += moveIncrement
                    if (this.offsetY >= 16 || this.offsetY == 0) {
                        this.row++
                        this.offsetY = 0
                    }
                    break
                case "up":
                    this.offsetY -= moveIncrement
                    if (this.offsetY <= -16 || this.offsetY == 0) {
                        this.row--
                        this.offsetY = 0
                    }
                    break
            }
            if (this.checkForCollisionWithPacman()) {
                if (this.mode == "frightened") {
                    this.mode = "dead"
                    this.currentImage = this.images["score"][this.game.pacman.ghostMultiplier - 1]
                    this.game.pacman.ateGhost()
                    this.deadFrames = 2
                } else if (this.mode == "normal" || this.mode == "scatter") {
                    this.game.pacman.isDead = true
                    this.mode = "scatter"
                }
            }
            if (this.mode == "dead" && this.row == 13 && (this.col == 13 || this.col == 14)) {
                this.mode = "normal"
            }
        }
        // Animate movement (so that bottom of sprite appears to be moving)
        this.lastAnimationUpdate += timeDelta
        if (this.lastAnimationUpdate > 1000 / this.targetMovementAnimationSpeed) {
            if (this.deadFrames > 0) {
                this.deadFrames--
            } else {
                this.currentImage = this.images[this.mode].next(this.orientation)
            }
            this.lastAnimationUpdate = 0
        }
        this.draw()
    }

    erase() {
        this.ctx.clearRect(this.col * 16 - 8 + this.offsetX, this.row * 16 - 8 + this.offsetY, 32, 32)
    }

    draw() {
        this.ctx.drawImage(this.currentImage, this.col * 16 - 8 + this.offsetX, this.row * 16 - 8 + this.offsetY)
    }

}