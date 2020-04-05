import CreateImageLooper from "../src/image-looper.js"

export default class Blinky {

    constructor(world, pacman) {
        // Constants
        this.world = world
        this.pacman = pacman
        this.targetMovementSpeed = 4 * 30 // Target movement speed in pixels per second (4 * 30 fps = 120 px/s)
        this.targetMovementAnimationSpeed = 4 // Animate movement 4x / second
        this.lastAnimationUpdate = 0
        // Current position/state info
        this.row = 11
        this.col = 13
        this.offsetX = 8
        this.offsetY = 0
        this.orientation = "left"
        this.status = "normal"
        // Load images for displaying Blinky
        let imgRight1 = new Image()
        imgRight1.src = "./resources/blinky-right-1.png"
        let imgRight2 = new Image()
        imgRight2.src = "./resources/blinky-right-2.png"
        let imgDown1 = new Image()
        imgDown1.src = "./resources/blinky-down-1.png"
        let imgDown2 = new Image()
        imgDown2.src = "./resources/blinky-down-2.png"
        let imgLeft1 = new Image()
        imgLeft1.src = "./resources/blinky-left-1.png"
        let imgLeft2 = new Image()
        imgLeft2.src = "./resources/blinky-left-2.png"
        let imgUp1 = new Image()
        imgUp1.src = "/.resources/blinky-up-1.png"
        let imgUp2 = new Image()
        imgUp2.src = "./resources/blinky-up-2.png"
        // Load images to display when Blinky is scared
        let imgScaredBlue1 = new Image()
        imgScaredBlue1.src = "/.resources/scared-ghost-blue-1.png"
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
        this.images = {
            normal: CreateImageLooper({
                right: [imgRight1, imgRight2],
                down: [imgDown1, imgDown2],
                left: [imgLeft1, imgLeft2],
                up: [imgUp1, imgUp2]
            }),
            scared: CreateImageLooper({
                right: [imgScaredBlue1, imgScaredBlue2, imgScaredWhite1, imgScaredWhite2],
                down: [imgScaredBlue1, imgScaredBlue2, imgScaredWhite1, imgScaredWhite2],
                left: [imgScaredBlue1, imgScaredBlue2, imgScaredWhite1, imgScaredWhite2],
                up: [imgScaredBlue1, imgScaredBlue2, imgScaredWhite1, imgScaredWhite2]
            }),
            dead: CreateImageLooper({
                right: [imgDeadRight],
                down: [imgDeadDown],
                left: [imgDeadLeft],
                up: [imgDeadUp]
            })
        }
        this.currentImage = this.images[this.status].next(this.orientation)
    }

    calculateNextBlock() {

    }

    updatePosition(timeDelta) {
        this.erase()
        this.lastAnimationUpdate += timeDelta
        if (this.lastAnimationUpdate > 1000 / this.targetMovementAnimationSpeed) {
            this.currentImage = this.images[this.status].next(this.orientation)
            this.lastAnimationUpdate = 0
        }
        this.draw()
    }

    erase() {
        this.world.ctx.clearRect(this.col * 16 - 6 + this.offsetX, this.row * 16 - 6 + this.offsetY, 30, 30)
    }

    draw() {
        //console.log("Drawing blinky at col, row", this.col, this.)
        this.world.ctx.drawImage(this.currentImage, this.col * 16 - 8 + this.offsetX, this.row * 16 - 8 + this.offsetY)
    }

}