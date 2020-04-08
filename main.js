import World from "./src/world.js"
import PacMan from "./src/pacman.js"
import Blinky from "./src/blinky.js"
import Pinky from "./src/pinky.js"
import Inky from "./src/inky.js"

let world
let pacman
let blinky
let pinky
let inky
var scoreElement
const fps = 60
// Get screen size
const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
document.documentElement.style.setProperty('--scaling-factor', 1.2)


document.addEventListener('DOMContentLoaded', () => {
    let worldCanvas = document.getElementById('world')
    let pacmanCanvas = document.getElementById('pacman')
    let blinkyCanvas = document.getElementById('blinky')
    let pinkyCanvas = document.getElementById('pinky')
    let inkyCanvas = document.getElementById('inky')
    world = new World(worldCanvas)
    pacman = new PacMan(pacmanCanvas, world)
    blinky = new Blinky(blinkyCanvas, world, pacman)
    pinky = new Pinky(pinkyCanvas, world, pacman)
    inky = new Inky(inkyCanvas, world, pacman, blinky)
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
        pinky.updatePosition(timeDelta)
        inky.updatePosition(timeDelta)
        lastTime = timeStamp
        scoreElement.innerHTML = pacman.score
    }
    requestAnimationFrame(gameLoop)
}