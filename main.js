import World from "./src/world.js"
import PacMan from "./src/pacman.js"

var score = 0
var world
var pacman
const fps = 60

document.addEventListener('DOMContentLoaded', () => {
    world = new World()
    pacman = new PacMan(world)
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
        lastTime = timeStamp
    }
    requestAnimationFrame(gameLoop)
}