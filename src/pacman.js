export default class PacMan {

    constructor(world) {
        // Constants
        this.moveIncrement = 4
        this.controlMargin = 2
        this.targetMovementSpeed = 4 * 30 // Target movement speed in pixels per second (4 * 30 fps = 120 px/s)
        this.world = world
        // Current position/state info
        this.offsetX = 0
        this.offsetY = 0
        this.row = 1
        this.col = 1
        this.orientation = "down"
        this.updatedOrientation = undefined
        this.mouthState = 0
        this.isMoving = true
        // Historical position/state info
        this.previousMouthState = 1
        // Draw pacman when initialized
        this.draw()
    }

    canChangeDirectionFromNextSquare(direction) {
        var rowToTest = this.row
        var colToTest = this.col
        if (Math.abs(this.offsetX) >= this.controlMargin) {
            colToTest = colToTest + Math.sign(this.offsetX)
        }
        if (Math.abs(this.offsetY) >= this.controlMargin) {
            rowToTest = rowToTest + Math.sign(this.offsetY)
        }
        switch (direction) {
            case "right":
                return this.world.worldMap[rowToTest][colToTest + 1] != 2
            case "left":
                return this.world.worldMap[rowToTest][colToTest - 1] != 2
            case "down":
                return this.world.worldMap[rowToTest + 1][colToTest] != 2
            case "up":
                return this.world.worldMap[rowToTest - 1][colToTest] != 2
        }
    }

    changeDirection(newDirection) {
        if (this.canChangeDirectionFromNextSquare(newDirection)) {
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

    chomp() {
        if (this.mouthState == 2) {
            this.previousMouthState = this.mouthState
            this.mouthState = 1
        } else if (this.mouthState == 0) {
            this.previousMouthState = this.mouthState
            this.mouthState = 1
            this.previousMouthState = 0
        } else if (this.previousMouthState == 2) {
            this.previousMouthState = this.mouthState
            this.mouthState = 0
        } else {
            this.previousMouthState = this.mouthState
            this.mouthState = 2
        }
        // Update pacman's position
        if (this.offsetX == 0 && this.offsetY == 0) {
            if (this.updatedOrientation) {
                this.orientation = this.updatedOrientation
            }
        }
    }

    updatePosition(timeDelta) {
        if (this.offsetX == 0 && this.offsetY == 0) {
            if (this.updatedOrientation) {
                this.orientation = this.updatedOrientation
            }
        }
        if (this.canMoveToNextSquareInDirection(this.orientation)) {
            // Calculate movement increment -- how much pacman should move since a given time interval has passed
            this.moveIncrement = this.targetMovementSpeed * timeDelta / 1000
            this.isMoving = true
            this.erase()
            // Update mouth position so that pacman to make pacman "chomp"
            // this.chomp()
            console.log("Moving--" + this.orientation)
            console.log("Col, row", this.col, this.row)
            switch (this.orientation) {
                case "right":
                    this.offsetX += this.moveIncrement
                    if (this.offsetX >= 16 || this.offsetX == 0) {
                        this.col++
                        if (this.col == 28) {
                            this.col = -1
                        }
                        this.offsetX = 0
                    }
                    break
                case "left":
                    this.offsetX -= this.moveIncrement
                    if (this.offsetX <= -16 || this.offsetX == 0) {
                        this.col--
                        if (this.col == -1) {
                            this.col = 28
                        }
                        this.offsetX = 0
                    }
                    break
                case "down":
                    this.offsetY += this.moveIncrement
                    if (this.offsetY >= 16 || this.offsetY == 0) {
                        this.row++
                        this.offsetY = 0
                    }
                    break
                case "up":
                    this.offsetY -= this.moveIncrement
                    if (this.offsetY <= -16 || this.offsetY == 0) {
                        this.row--
                        this.offsetY = 0
                    }
                    break
            }
            this.draw()
        } else {
            if (this.isMoving) {
                // Close pacman's mouth when he hits a wall (can no longer move in desired direction)
                this.erase()
                this.previousMouthState = 1
                this.mouthState = 0
                this.draw()
                this.isMoving = false
            }
        }
    }

    move() {
        switch (this.orientation) {
            case "right":
                this.offsetX += this.moveIncrement
                if (this.offsetX == 16 || this.offsetX == 0) {
                    this.col++
                    this.offsetX = 0
                    if (this.updatedOrientation) {
                        this.orientation = this.updatedOrientation
                        this.updatedOrientation = undefined
                    }
                }
                break
            case "left":
                this.offsetX -= this.moveIncrement
                if (this.offsetX == -16 || this.offsetX == 0) {
                    this.col--
                    this.offsetX = 0
                    if (this.updatedOrientation) {
                        this.orientation = this.updatedOrientation
                        this.updatedOrientation = undefined
                    }
                }
                break
            case "down":
                this.offsetY += this.moveIncrement
                if (this.offsetY == 16 || this.offsetY == 0) {
                    this.row++
                    this.offsetY = 0
                    if (this.updatedOrientation) {
                        this.orientation = this.updatedOrientation
                        this.updatedOrientation = undefined
                    }
                }
                break
            case "up":
                this.offsetY -= this.moveIncrement
                if (this.offsetY == -16 || this.offsetY == 0) {
                    this.row--
                    this.offsetY = 0
                    if (this.updatedOrientation) {
                        this.orientation = this.updatedOrientation
                        this.updatedOrientation = undefined
                    }
                }
                break
        }
    }

    erase() {
        this.world.ctx.clearRect(this.col * 16 - 7 + this.offsetX, this.row * 16 - 7 + this.offsetY, 30, 30)
    }

    draw() {
        var pacmanImg = new Image()
        pacmanImg.onload = () => {
            this.world.ctx.save()
            switch (this.orientation) {
                case "left":
                    this.world.ctx.translate(this.col * 16 + 16 + this.offsetX, this.row * 16 + 16 + this.offsetY)
                    this.world.ctx.rotate(180 * Math.PI / 180)
                    this.world.ctx.translate(-(this.col * 16 + this.offsetX), -(this.row * 16 + this.offsetY))
                    break
                case "down":
                    this.world.ctx.translate(this.col * 16 + 16 + this.offsetX, this.row * 16 + this.offsetY)
                    this.world.ctx.rotate(90 * Math.PI / 180)
                    this.world.ctx.translate(-(this.col * 16 + this.offsetX), -(this.row * 16 + this.offsetY))
                    break
                case "up":
                    this.world.ctx.translate(this.col * 16 + this.offsetX, this.row * 16 + 16 + this.offsetY)
                    this.world.ctx.rotate(-90 * Math.PI / 180)
                    this.world.ctx.translate(-(this.col * 16 + this.offsetX), -(this.row * 16 + this.offsetY))
                    break
            }
            this.world.ctx.drawImage(pacmanImg, this.col * 16 - 7 + this.offsetX, this.row * 16 - 7 + this.offsetY)
            this.world.ctx.restore()
        }
        pacmanImg.src = './resources/pacman-' + this.mouthState + '.png'
    }

}