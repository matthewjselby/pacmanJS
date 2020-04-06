import { CreateImageLooper, CreateImageIterator } from './image-looper.js'

export default class PacMan {

    constructor(canvas, world) {
        // Constants
        this.controlMargin = 2
        this.targetMovementSpeed = 4 * 30 // Target movement speed in pixels per second (4 * 30 fps = 120 px/s)
        this.targetMovementAnimationSpeed = 12 // Animate movement 4x / second
        this.lastAnimationUpdate = 0
        this.ghosts = []
        this.ghostMultiplier = 1
        // Init local params from input
        this.canvas = canvas
        this.ctx = this.canvas.getContext('2d')
        this.ctx.canvas.width = 28 * 16
        this.ctx.canvas.height = 31 * 16
        this.world = world
        // Score
        this.score = 0
        // Current position/state info
        this.offsetX = 8
        this.offsetY = 0
        this.row = 23
        this.col = 14
        this.orientation = "left"
        this.updatedOrientation = undefined
        this.isMoving = true
        this.changeDirRow = 0
        this.changeDirCol = 0
        this.isPoweredUp = false
        this.isDead = false
        // Load images for displaying Pacman
        this.currentImage
        let img0 = new Image()
        img0.src = "./resources/pacman-0.png"
        let imgRight1 = new Image()
        imgRight1.src = "./resources/pacman-right-1.png"
        let imgRight2 = new Image()
        imgRight2.src = "./resources/pacman-right-2.png"
        let imgDown1 = new Image()
        imgDown1.src = "./resources/pacman-down-1.png"
        let imgDown2 = new Image()
        imgDown2.src = "./resources/pacman-down-2.png"
        let imgLeft1 = new Image()
        imgLeft1.src = "./resources/pacman-left-1.png"
        let imgLeft2 = new Image()
        imgLeft2.src = "./resources/pacman-left-2.png"
        let imgUp1 = new Image()
        imgUp1.src = "./resources/pacman-up-1.png"
        let imgUp2 = new Image()
        imgUp2.src = "./resources/pacman-up-2.png"
        this.images = CreateImageLooper({
            right: [img0, imgRight1, imgRight2],
            down: [img0, imgDown1, imgDown2],
            left: [img0, imgLeft1, imgLeft2],
            up: [img0, imgUp1, imgUp2]
        })
        let deadImages = []
        for (var i = 0; i <= 10; i++) {
            let newImage = new Image()
            newImage.src = "./resources/pacman-dead-" + i + ".png"
            deadImages.push(newImage)
        }
        this.deadImages = CreateImageIterator(deadImages)
    }

    canChangeDirection(direction) {
        if (this.canMoveToNextSquareInDirection(direction) && this.offsetX == 0 && this.offsetY == 0) { // Check if pacman is inside of a square where the new direction is open
            console.log("Current square", this.col, this.row, "can move", direction)
            this.changeDirCol = this.col
            this.changeDirRow = this.row
            return true
        } else if (this.canMoveToNextSquareInDirection(this.orientation)) { // Check if pacman is in a leading square to a square where the new direction is open
            this.changeDirCol = this.col
            this.changeDirRow = this.row
            switch (this.orientation) {
                case "right":
                    this.changeDirCol++
                    break
                case "left":
                    this.changeDirCol--
                    break
                case "down":
                    this.changeDirRow++
                    break
                case "up":
                    this.changeDirRow--
                    break
            }
            console.log("Checking if col, row", this.col, this.row, "can move", direction, "actual col, row", this.col, this.row, "offset x, y", this.offsetX, this.offsetY)
            switch (direction) {
                case "right":
                    return this.world.worldMap[this.changeDirRow][this.changeDirCol + 1] != 2
                case "left":
                    return this.world.worldMap[this.changeDirRow][this.changeDirCol - 1] != 2
                case "down":
                    return this.world.worldMap[this.changeDirRow + 1][this.changeDirCol] != 2
                case "up":
                    return this.world.worldMap[this.changeDirRow - 1][this.changeDirCol] != 2
            }
        }
        return false
    }

    changeDirection(newDirection) {
        if (this.canChangeDirection(newDirection)) {
            console.log("======= Orientation change ========")
            console.log("Offset X, Y", this.offsetX, this.offsetY)
            console.log("Actual row, col", this.row, this.col)
            switch (newDirection) {
                case "right":
                    console.log("Pacman -- changing orientation right")
                    this.updatedOrientation = newDirection

                    break
                case "left":
                    console.log("Pacman -- changing orientation left")
                    this.updatedOrientation = newDirection
                    break
                case "up":
                    console.log("Pacman -- changing orientation up")
                    this.updatedOrientation = newDirection
                    break
                case "down":
                    console.log("Pacman -- changing orientation down")
                    this.updatedOrientation = newDirection
                    break
            }
        }
    }

    canMoveToNextSquareInDirection(direction) {
        switch (direction) {
            case "right":
                return this.world.worldMap[this.row][this.col + 1] != 2
            case "left":
                return this.world.worldMap[this.row][this.col - 1] != 2
            case "down":
                return this.world.worldMap[this.row + 1][this.col] != 2
            case "up":
                return this.world.worldMap[this.row - 1][this.col] != 2
        }
    }

    scareGhosts() {
        for (let ghost of this.ghosts) {
            ghost.getScared()
        }
    }

    ateGhost() {
        this.score += 200
    }

    updatePosition(timeDelta) {
        // Update pacman's position
        if (this.isDead) {
            this.lastAnimationUpdate += timeDelta
            if (this.lastAnimationUpdate > 1000 / this.targetMovementAnimationSpeed) {
                this.lastAnimationUpdate = 0
                this.erase()
                this.currentImage = this.deadImages.next()
                if (this.currentImage != false) this.draw()
            }
        } else {
            if (this.updatedOrientation) {
                if (this.changeDirRow == this.row && this.changeDirCol == this.col) {
                    this.orientation = this.updatedOrientation
                }
            }
            if (this.canMoveToNextSquareInDirection(this.orientation) && !this.isDead) {
                // Calculate movement increment -- how much pacman should move since a given time interval has passed
                let moveIncrement = this.targetMovementSpeed * timeDelta / 1000
                this.isMoving = true
                this.erase()
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
                if(this.world.worldMap[this.row][this.col] == 1) {
                    this.score += 10
                    this.world.worldMap[this.row][this.col] = 0
                    this.world.erasePellet(this.row, this.col)
                } else if (this.world.worldMap[this.row][this.col] == 3) {
                    this.scareGhosts()
                    this.score += 50
                    this.world.worldMap[this.row][this.col] = 0
                    this.world.erasePellet(this.row, this.col)
                }
                this.currentImage = this.images.next(this.orientation)
                this.draw()
            } else {
                if (this.isMoving) {
                    // Close pacman's mouth when he hits a wall (can no longer move in desired direction)
                    this.erase()
                    this.currentImage = this.images.stop(this.orientation)
                    this.draw()
                    this.isMoving = false
                }
            }
        }
    }

    erase() {
        this.ctx.clearRect(this.col * 16 - 8 + this.offsetX, this.row * 16 - 8 + this.offsetY, 32, 32)
    }

    draw() {
        console.log("Drawing pacman at col, row", this.col, this.row)
        this.ctx.drawImage(this.currentImage, this.col * 16 - 8 + this.offsetX, this.row * 16 - 8 + this.offsetY)
    }

}