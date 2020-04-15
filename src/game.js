import World from "./world.js"
import PacMan from "./pacman.js"
import Blinky from "./blinky.js"
import Pinky from "./pinky.js"
import Inky from "./inky.js"
import Clyde from "./clyde.js"

export default class Game {

    constructor() {
        this.state = 'loading' // loading | playing | won | lost
        this.lastTime = 0
        this.fps = 60
        // Init world and characters
        this.world = new World(this)
        this.pacman = new PacMan(this)
        this.blinky = new Blinky(this)
        this.pinky = new Pinky(this)
        this.inky = new Inky(this)
        this.clyde = new Clyde(this)
        // Init score element for updating score
        this.scoreElement = document.getElementById('score')
        this.highScoreElement = document.getElementById('high-score')
        this.updateHighScore()
        // Init loading screens
        this.gameOverScreen = document.getElementById('game-over')
        this.wonGameScreen = document.getElementById('won-game')
        this.startScreen = document.getElementById('start-screen')
        // Binding for game loop
        this.gameLoop = this.gameLoop.bind(this)
        // Listen for keyboard input
        document.addEventListener('keydown', (event) => {
            this.handleInput(event)
        })
    }

    updateHighScore() {
        this.highScoreElement.innerHTML = this.getHighScore()
    }

    getHighScore() {
        let highScore = 0
        let cookie = document.cookie.split(';')
        for (let entry of cookie) {
            if (entry.includes('highScore')) {
                highScore = entry.split('=')[1]
            }
        }
        return highScore
    }

    setHighScore(newHighScore) {
        document.cookie = 'highScore=' + newHighScore
        this.highScoreElement.innerHTML = newHighScore
    }

    reset() {
        this.updateHighScore()
        this.gameOverScreen.style.visibility = 'hidden'
        this.wonGameScreen.style.visibility = 'hidden'
        this.world = new World(this)
        this.pacman = new PacMan(this)
        this.blinky = new Blinky(this)
        this.pinky = new Pinky(this)
        this.inky = new Inky(this)
        this.clyde = new Clyde(this)
    }

    handleInput(event) {
        switch (this.state) {
            case 'loading':
                this.start()
                break
            case 'playing':
                if (event.key == "ArrowUp") {
                    this.pacman.changeDirection("up")
                } else if (event.key == "ArrowDown") {
                    this.pacman.changeDirection("down")
                } else if (event.key == "ArrowRight") {
                    this.pacman.changeDirection("right")
                } else if (event.key == "ArrowLeft") {
                    this.pacman.changeDirection("left")
                }
                break
            case 'won':
            case 'lost':
                this.reset()
                this.start()
                break
            default:
                break
        }
    }

    start() {
        this.startScreen.style.visibility = 'hidden'
        this.state = 'playing'
        this.gameLoop(0)
    }

    lostGame() {
        this.state = 'lost'
        this.gameOverScreen.style.visibility = 'visible'
        if (this.pacman.score > this.getHighScore()) {
            this.setHighScore(this.pacman.score)
        }
    }

    wonGame() {
        this.state = 'won'
        this.wonGameScreen.style.visibility = 'visible'
        if (this.pacman.score > this.getHighScore()) {
            this.setHighScore(this.pacman.score)
        }
    }

    gameLoop(timeStamp) {
        let timeDelta = timeStamp - this.lastTime
        if (timeDelta > (1000 / this.fps)) {
            this.pacman.updatePosition(timeDelta)
            this.blinky.updatePosition(timeDelta)
            this.pinky.updatePosition(timeDelta)
            this.inky.updatePosition(timeDelta)
            this.clyde.updatePosition(timeDelta)
            this.lastTime = timeStamp
            this.scoreElement.innerHTML = this.pacman.score
        }
        if (this.state == 'playing') {
            requestAnimationFrame(this.gameLoop)
        }
    }
}