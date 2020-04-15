import Game from './src/game.js'

// TODO -- adaptive scaling for different window sizes
const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
document.documentElement.style.setProperty('--scaling-factor', 1.2)

document.addEventListener('DOMContentLoaded', () => {
    game = new Game()
})