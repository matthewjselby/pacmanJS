import World from "./src/world.js"
import PacMan from "./src/pacman.js"
import Blinky from "./src/blinky.js"

let world
let pacman
let blinky
var scoreElement
const fps = 60


document.addEventListener('DOMContentLoaded', () => {
    let worldCanvas = document.getElementById('world')
    let pacmanCanvas = document.getElementById('pacman')
    let blinkyCanvas = document.getElementById('blinky')
    world = new World(worldCanvas)
    pacman = new PacMan(pacmanCanvas, world)
    blinky = new Blinky(blinkyCanvas, world, pacman)
    scoreElement = document.getElementById('score')
    gameLoop(0)
})

document.addEventListener("keydown", function(event) {
    if (event.key == "ArrowUp") {
        pacman.changeDirection("up")
    } else if (event.key == "ArrowDown") {
        pacman.changeDirection("down")
    } else if (event.key == "ArrowRight") {
        pacman.changeDirection("right")
    } else if (event.key == "ArrowLeft") {
        pacman.changeDirection("left")
    }
})

let lastTime = 0

const gameLoop = (timeStamp) => {
    let timeDelta = timeStamp - lastTime
    if (timeDelta > (1000 / fps)) {
        pacman.updatePosition(timeDelta)
        blinky.updatePosition(timeDelta)
        lastTime = timeStamp
        scoreElement.innerHTML = pacman.score
    }
    requestAnimationFrame(gameLoop)
}