import World from "./src/world.js"

var pacPosition = {
    "row": 6,
    "column": 1
}
var score = 0

function movePacman(direction) {
    if (direction == "right") {
        let nextLocation = world[pacPosition.row][pacPosition.column + 1]
        if (nextLocation != 2) {
            if (nextLocation == 1) {
                score += 10
            } else if (nextLocation == 3) {
                score += 50
            }
            world[pacPosition.row][pacPosition.column] = 0
            pacPosition.column++
            drawWorld()
            document.getElementById("pacman").style.transform = "rotate(0deg)"
        }
    } else if (direction == "left") {
        let nextLocation = world[pacPosition.row][pacPosition.column - 1]
        if (nextLocation != 2) {
            if (nextLocation == 1) {
                score += 10
            } else if (nextLocation == 3) {
                score += 50
            }
            world[pacPosition.row][pacPosition.column] = 0
            pacPosition.column--
            drawWorld()
            document.getElementById("pacman").style.transform = "scaleX(-1)"
        }
    } else if (direction == "up") {
        let nextLocation = world[pacPosition.row - 1][pacPosition.column]
        if (nextLocation != 2) {
            if (nextLocation == 1) {
                score += 10
            } else if (nextLocation == 3) {
                score += 50
            }
            world[pacPosition.row][pacPosition.column] = 0
            pacPosition.row--
            drawWorld()
            document.getElementById("pacman").style.transform = "rotate(270deg)"
        }
    } else if (direction == "down") {
        let nextLocation = world[pacPosition.row + 1][pacPosition.column]
        if (nextLocation != 2) {
            if (nextLocation == 1) {
                score += 10
            } else if (nextLocation == 3) {
                score += 50
            }
            world[pacPosition.row][pacPosition.column] = 0
            pacPosition.row++
            drawWorld()
            document.getElementById("pacman").style.transform = "rotate(90deg)"
        }
    }
    
}

function load() {
    var canvas = $('#game')[0]
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d')
        let blockSize = 16
        let boardSize = {
            width: 28,
            height: 31
        }
        ctx.canvas.width = boardSize.width * blockSize + 1
        ctx.canvas.height = boardSize.height * blockSize + 1
        // Set up context for border drawing
        ctx.strokeStyle = "#2121FF"
        ctx.lineWidth = 2
        // Draw outer border
        let outerBorder = new Path2D()
        outerBorder.moveTo((boardSize.width / 2) * blockSize + 1, 1)
        outerBorder.lineTo(blockSize, 1)
        outerBorder.arc(blockSize, blockSize, blockSize - 1, 1.5 * Math.PI, Math.PI, true)
        outerBorder.lineTo(1, blockSize * 9)
        outerBorder.arc(blockSize, blockSize * 9, blockSize - 1, Math.PI, 0.5 * Math.PI, true)
        outerBorder.lineTo(blockSize * 5, blockSize * 10)
        outerBorder.lineTo(blockSize * 5, blockSize * 13)
        outerBorder.lineTo(1, blockSize * 13)
        outerBorder.moveTo(1, blockSize * 16)
        outerBorder.lineTo(blockSize * 5, blockSize * 16)
        outerBorder.lineTo(blockSize * 5, blockSize * 19)
        outerBorder.lineTo(blockSize, blockSize * 19)
        outerBorder.arc(blockSize, blockSize * 20, blockSize - 1, 1.5 * Math.PI, Math.PI, true)
        outerBorder.lineTo(1, (boardSize.height - 1) * blockSize)
        outerBorder.arc(blockSize, (boardSize.height - 1) * blockSize, blockSize - 1, Math.PI, 0.5 * Math.PI, true)
        outerBorder.lineTo((boardSize.width / 2) * blockSize + 1, boardSize.height * blockSize)
        ctx.stroke(outerBorder)
        ctx.save()
        ctx.translate(canvas.width, 0)
        ctx.scale(-1, 1)
        ctx.stroke(outerBorder)
        ctx.restore()
        // Draw the inner border
        let innerBorder = new Path2D()
        innerBorder.moveTo((boardSize.width / 2) * blockSize + 1, blockSize * 4 + blockSize / 2)
        innerBorder.arc((boardSize.width / 2) * blockSize, blockSize * 4, blockSize / 2, 0.5 * Math.PI, Math.PI)
        innerBorder.lineTo((boardSize.width / 2) * blockSize - blockSize / 2, blockSize)
        innerBorder.arc((boardSize.width / 2 - 1) * blockSize, blockSize, blockSize / 2, 0, 1.5 * Math.PI, true)
        innerBorder.lineTo(blockSize, blockSize / 2)
        innerBorder.arc(blockSize, blockSize, blockSize / 2, 1.5 * Math.PI, Math.PI, true)
        innerBorder.lineTo(blockSize / 2, blockSize * 9)
        innerBorder.arc(blockSize, blockSize * 9, blockSize / 2, Math.PI, 0.5 * Math.PI, true)
        innerBorder.lineTo(blockSize * 5, blockSize * 9 + blockSize / 2)
        innerBorder.arc(blockSize * 5, blockSize * 10, blockSize / 2, 1.5 * Math.PI, 0)
        innerBorder.lineTo(blockSize * 5 + blockSize / 2, blockSize * 13)
        innerBorder.arc(blockSize * 5, blockSize * 13, blockSize / 2, 0, 0.5 * Math.PI)
        innerBorder.lineTo(1, blockSize * 13 + blockSize / 2)
        innerBorder.moveTo(1, blockSize * 15 + blockSize / 2)
        innerBorder.lineTo(blockSize * 5, blockSize * 15 + blockSize / 2)
        innerBorder.arc(blockSize * 5, blockSize * 16, blockSize / 2, 1.5 * Math.PI, 0)
        innerBorder.lineTo(blockSize * 5 + blockSize / 2, blockSize * 19)
        innerBorder.arc(blockSize * 5, blockSize * 19, blockSize / 2, 0, 0.5 * Math.PI)
        innerBorder.lineTo(blockSize, blockSize * 19 + blockSize / 2)
        innerBorder.arc(blockSize, blockSize * 20, blockSize / 2, 1.5 * Math.PI, Math.PI, true)
        innerBorder.lineTo(blockSize / 2, (boardSize.height - 1) * blockSize)
        innerBorder.arc(blockSize, (boardSize.height - 1) * blockSize, blockSize / 2, Math.PI, 0.5 * Math.PI, true)
        innerBorder.lineTo((boardSize.width / 2) * blockSize + 1, boardSize.height * blockSize - blockSize / 2)
        ctx.stroke(innerBorder)
        ctx.save()
        ctx.translate(canvas.width, 0)
        ctx.scale(-1, 1)
        ctx.stroke(innerBorder)
        ctx.restore()
        // Draw the inner walls
        let innerWalls = new Path2D()
        // Shape 1
        innerWalls.moveTo(blockSize * 8, blockSize * 3 - blockSize / 2)
        innerWalls.arc(blockSize * 8, blockSize * 3, blockSize / 2, 1.5 * Math.PI, Math.PI, true)
        innerWalls.lineTo(blockSize * 8 - blockSize / 2, blockSize * 4)
        innerWalls.arc(blockSize * 8, blockSize * 4, blockSize / 2, Math.PI, 0.5 * Math.PI, true)
        innerWalls.lineTo(blockSize * 11, blockSize * 4 + blockSize / 2)
        innerWalls.arc(blockSize * 11, blockSize * 4, blockSize / 2, 0.5 * Math.PI, 0, true)
        innerWalls.lineTo(blockSize * 11 + blockSize / 2, blockSize * 3)
        innerWalls.arc(blockSize * 11, blockSize * 3, blockSize / 2, 0, 1.5 * Math.PI, true)
        innerWalls.lineTo(blockSize * 8, blockSize * 3 - blockSize / 2)
        // Shape 2
        innerWalls.moveTo(blockSize * 3, blockSize * 3 - blockSize / 2)
        innerWalls.arc(blockSize * 3, blockSize * 3, blockSize / 2, 1.5 * Math.PI, Math.PI, true)
        innerWalls.lineTo(blockSize * 3 - blockSize / 2, blockSize * 4)
        innerWalls.arc(blockSize * 3, blockSize * 4, blockSize / 2, Math.PI, 0.5 * Math.PI, true)
        innerWalls.lineTo(blockSize * 5, blockSize * 4 + blockSize / 2)
        innerWalls.arc(blockSize * 5, blockSize * 4, blockSize / 2, 0.5 * Math.PI, 0, true)
        innerWalls.lineTo(blockSize * 5 + blockSize / 2, blockSize * 3)
        innerWalls.arc(blockSize * 5, blockSize * 3, blockSize / 2, 0, 1.5 * Math.PI, true)
        innerWalls.lineTo(blockSize * 3, blockSize * 3 - blockSize / 2)
        // Shape 3
        innerWalls.moveTo(blockSize * 3, blockSize * 7 - blockSize / 2)
        innerWalls.arc(blockSize * 3, blockSize * 7, blockSize / 2, 1.5 * Math.PI, 0.5 * Math.PI, true)
        innerWalls.lineTo(blockSize * 5, blockSize * 7 + blockSize / 2)
        innerWalls.arc(blockSize * 5, blockSize * 7, blockSize / 2, 0.5 * Math.PI, 1.5 * Math.PI, true)
        innerWalls.lineTo(blockSize * 3, blockSize * 7 - blockSize / 2)
        // Shape 3
        innerWalls.moveTo(blockSize * 8 + blockSize / 2, blockSize * 7)
        innerWalls.arc(blockSize * 8, blockSize * 7, blockSize / 2, 0, Math.PI, true)
        innerWalls.lineTo(blockSize * 8 - blockSize / 2, blockSize * 13)
        innerWalls.arc(blockSize * 8, blockSize * 13, blockSize / 2, Math.PI, 0, true)
        innerWalls.lineTo(blockSize * 8 + blockSize / 2, blockSize * 11)
        innerWalls.arc(blockSize * 9, blockSize * 11, blockSize / 2, Math.PI, 1.5 * Math.PI)
        innerWalls.lineTo(blockSize * 11, blockSize * 11 - blockSize / 2)
        innerWalls.arc(blockSize * 11, blockSize * 10, blockSize / 2, 0.5 * Math.PI, 1.5 * Math.PI, true)
        innerWalls.lineTo(blockSize * 9, blockSize * 9 + blockSize / 2)
        innerWalls.arc(blockSize * 9, blockSize * 9, blockSize / 2, 0.5 * Math.PI, Math.PI)
        innerWalls.lineTo(blockSize * 9 - blockSize / 2, blockSize * 7)
        // Shape 4
        innerWalls.moveTo(blockSize * 14 + 1, blockSize * 7 - blockSize / 2)
        innerWalls.lineTo(blockSize * 11, blockSize * 7 - blockSize / 2)
        innerWalls.arc(blockSize * 11, blockSize * 7, blockSize / 2, 1.5 * Math.PI, 0.5 * Math.PI, true)
        innerWalls.lineTo(blockSize * 13, blockSize * 7 + blockSize / 2)
        innerWalls.arc(blockSize * 13, blockSize * 8, blockSize / 2, 1.5 * Math.PI, 0)
        innerWalls.lineTo(blockSize * 13 + blockSize / 2, blockSize * 10)
        innerWalls.arc(blockSize * 14, blockSize * 10, blockSize / 2, Math.PI, 0.5 * Math.PI - 1, true)
        // Ghost box
        innerWalls.moveTo(blockSize * 13, blockSize * 13)
        innerWalls.lineTo(blockSize * 11, blockSize * 13)
        innerWalls.lineTo(blockSize * 11, blockSize * 16)
        innerWalls.lineTo(blockSize * 15 + 1, blockSize * 16)
        innerWalls.moveTo(blockSize * 13, blockSize * 13)
        innerWalls.lineTo(blockSize * 13, blockSize * 13 - blockSize / 2)
        innerWalls.lineTo(blockSize * 11 - blockSize / 2, blockSize * 13 - blockSize / 2)
        innerWalls.lineTo(blockSize * 11 - blockSize / 2, blockSize * 16 + blockSize / 2)
        innerWalls.lineTo(blockSize * 16 + 1, blockSize * 16 + blockSize / 2)
        // Shape 5
        innerWalls.moveTo(blockSize * 8 + blockSize / 2, blockSize * 16)
        innerWalls.arc(blockSize * 8, blockSize * 16, blockSize / 2, 0, Math.PI, true)
        innerWalls.lineTo(blockSize * 8 - blockSize / 2, blockSize * 19)
        innerWalls.arc(blockSize * 8, blockSize * 19, blockSize / 2, Math.PI, 0, true)
        innerWalls.lineTo(blockSize * 8 + blockSize / 2, blockSize * 16)
        // Shape 6
        innerWalls.moveTo(blockSize * 14 + 1, blockSize * 19 - blockSize / 2)
        innerWalls.lineTo(blockSize * 11, blockSize * 19 - blockSize / 2)
        innerWalls.arc(blockSize * 11, blockSize * 19, blockSize / 2, 1.5 * Math.PI, 0.5 * Math.PI, true)
        innerWalls.lineTo(blockSize * 13, blockSize * 19 + blockSize / 2)
        innerWalls.arc(blockSize * 13, blockSize * 20, blockSize / 2, 1.5 * Math.PI, 0)
        innerWalls.lineTo(blockSize * 13 + blockSize / 2, blockSize * 22)
        innerWalls.arc(blockSize * 14, blockSize * 22, blockSize / 2, Math.PI, 0.5 * Math.PI - 1, true)
        // Shape 7
        innerWalls.moveTo(blockSize * 14 + 1, blockSize * 25 - blockSize / 2)
        innerWalls.lineTo(blockSize * 11, blockSize * 25 - blockSize / 2)
        innerWalls.arc(blockSize * 11, blockSize * 25, blockSize / 2, 1.5 * Math.PI, 0.5 * Math.PI, true)
        innerWalls.lineTo(blockSize * 13, blockSize * 25 + blockSize / 2)
        innerWalls.arc(blockSize * 13, blockSize * 26, blockSize / 2, 1.5 * Math.PI, 0)
        innerWalls.lineTo(blockSize * 13 + blockSize / 2, blockSize * 28)
        innerWalls.arc(blockSize * 14, blockSize * 28, blockSize / 2, Math.PI, 0.5 * Math.PI - 1, true)
        // Shape 8
        innerWalls.moveTo(blockSize * 3, blockSize * 22 - blockSize / 2)
        innerWalls.arc(blockSize * 3, blockSize * 22, blockSize / 2, 1.5 * Math.PI, 0.5 * Math.PI, true)
        innerWalls.lineTo(blockSize * 4, blockSize * 22 + blockSize / 2)
        innerWalls.arc(blockSize * 4, blockSize * 23, blockSize / 2, 1.5 * Math.PI, 0)
        innerWalls.lineTo(blockSize * 4 + blockSize / 2, blockSize * 25)
        innerWalls.arc(blockSize * 5, blockSize * 25, blockSize / 2, Math.PI, 0, true)
        innerWalls.lineTo(blockSize * 5 + blockSize / 2, blockSize * 22)
        innerWalls.arc(blockSize * 5, blockSize * 22, blockSize / 2, 0, 1.5 * Math.PI, true)
        innerWalls.lineTo(blockSize * 3, blockSize * 22 - blockSize / 2)
        // Shape 9
        innerWalls.moveTo(blockSize * 8, blockSize * 22 - blockSize / 2)
        innerWalls.arc(blockSize * 8, blockSize * 22, blockSize / 2, 1.5 * Math.PI, 0.5 * Math.PI, true)
        innerWalls.lineTo(blockSize * 11, blockSize * 22 + blockSize / 2)
        innerWalls.arc(blockSize * 11, blockSize * 22, blockSize / 2, 0.5 * Math.PI, 1.5 * Math.PI, true)
        innerWalls.lineTo(blockSize * 8, blockSize * 22 - blockSize / 2)
        // Shape 10
        innerWalls.moveTo(blockSize * 3, blockSize * 28 - blockSize / 2)
        innerWalls.arc(blockSize * 3, blockSize * 28, blockSize / 2, 1.5 * Math.PI, 0.5 * Math.PI, true)
        innerWalls.lineTo(blockSize * 11, blockSize * 28 + blockSize / 2)
        innerWalls.arc(blockSize * 11, blockSize * 28, blockSize / 2, 0.5 * Math.PI, 1.5 * Math.PI, true)
        innerWalls.lineTo(blockSize * 9, blockSize * 28 - blockSize / 2)
        innerWalls.arc(blockSize * 9, blockSize * 27, blockSize / 2, 0.5 * Math.PI, Math.PI)
        innerWalls.lineTo(blockSize * 9 - blockSize / 2, blockSize * 25)
        innerWalls.arc(blockSize * 8, blockSize * 25, blockSize / 2, 0, Math.PI, true)
        innerWalls.lineTo(blockSize * 8 - blockSize / 2, blockSize * 27)
        innerWalls.arc(blockSize * 7, blockSize * 27, blockSize / 2, 0, 0.5 * Math.PI)
        innerWalls.lineTo(blockSize * 3, blockSize * 28 - blockSize / 2)
        ctx.stroke(innerWalls)
        ctx.save()
        ctx.translate(canvas.width, 0)
        ctx.scale(-1, 1)
        ctx.stroke(innerWalls)
        ctx.restore()
        // Draw ghost box door
        ctx.strokeStyle = "#FEB8FF"
        ctx.lineWidth = 4
        ctx.moveTo(blockSize * 13 + 2, blockSize * 13 - 3)
        ctx.lineTo(blockSize * 15 - 1, blockSize * 13 - 3)
        ctx.stroke()
    }
}

function loadGame() {
    var canvas = $('#game')[0]
    if (canvas.getContext) {
        let context = canvas.getContext('2d')
        // let blockSize = 16
        // context.strokeStyle = "#707072"
        // context.setLineDash([1, 1])
        // context.lineWidth = 2
        // for(var i = 0; i < canvas.width; i++) {
        //     if (i % blockSize == 0) {
        //         context.beginPath()
        //         context.moveTo(i, 1)
        //         context.lineTo(i, canvas.height)
        //         context.stroke()
        //     }
        // }
        // for (var i = 0; i < canvas.height; i++) {
        //     if (i % blockSize == 0) {
        //         context.beginPath()
        //         context.moveTo(0, i)
        //         context.lineTo(canvas.width, i)
        //         context.stroke()
        //     }
        // }
        context.setLineDash([])
        context.strokeStyle = "#2121FF"
        context.lineWidth = 2
        // Stroke outside border
        // Straight sections - top left moving counter clockwise
        context.beginPath()
        context.moveTo(1, 16)
        context.lineTo(1, 144)
        context.moveTo(16, 160)
        context.lineTo(80, 160)
        context.lineTo(80, 208)
        context.lineTo(0, 208)
        context.moveTo(16, 208)
        context.moveTo(0, 256)
        context.lineTo(80, 256)
        context.lineTo(80, 304)
        context.lineTo(16, 304)
        context.moveTo(1, 320)
        context.lineTo(1, 480)
        context.moveTo(16, 496)
        context.lineTo(432, 496)
        context.moveTo(448, 480)
        context.lineTo(448, 320)
        context.moveTo(432, 304)
        context.lineTo(368, 304)
        context.lineTo(368, 256)
        context.lineTo(448, 256)
        context.moveTo(448, 208)
        context.lineTo(368, 208)
        context.lineTo(368, 160)
        context.lineTo(432, 160)
        context.moveTo(448, 144)
        context.lineTo(448, 16)
        context.moveTo(432, 1)
        context.lineTo(16, 1)
        context.stroke()
        // Corners - top left moving counter clockwise
        context.beginPath()
        context.arc(16, 16, 16, Math.PI, 1.5 * Math.PI)
        context.stroke()
        context.beginPath()
        context.arc(16, 144, 16, Math.PI, 0.5 * Math.PI, true)
        context.stroke()
        context.beginPath()
        context.arc(16, 320, 16, 1.5 * Math.PI, Math.PI, true)
        context.stroke()
        context.beginPath()
        context.arc(16, 480, 16, Math.PI, 0.5 * Math.PI, true)
        context.stroke()
        context.beginPath()
        context.arc(432, 480, 16, 0.5 * Math.PI, 0, true)
        context.stroke()
        context.beginPath()
        context.arc(432, 320, 16, 0, 1.5 * Math.PI, true)
        context.stroke()
        context.beginPath()
        context.arc(432, 144, 16, 0.5 * Math.PI, 0, true)
        context.stroke()
        context.beginPath()
        context.arc(432, 16, 16, 0, 1.5 * Math.PI, true)
        context.stroke()
        // Stroke inside border
        // Straight sections - top left moving counter clockwise
        context.beginPath()
        context.moveTo(8, 16)
        context.lineTo(8, 144)
        context.moveTo(16, 152)
        context.lineTo(80, 152)
        context.moveTo(88, 160)
        context.lineTo(88, 208)
        context.moveTo(80, 216)
        context.lineTo(0, 216)
        context.moveTo(0, 248)
        context.lineTo(80, 248)
        context.moveTo(88, 256)
        context.lineTo(88, 304)
        context.moveTo(80, 312)
        context.lineTo(16, 312)
        context.moveTo(8, 320)
        context.lineTo(8, 384)
        context.moveTo(16, 392)
        context.lineTo(32, 392)
        context.moveTo(32, 408)
        context.lineTo(16, 408)
        context.moveTo(8, 416)
        context.lineTo(8, 480)
        context.moveTo(16, 488)
        context.lineTo(432, 488)
        context.moveTo(440, 480)
        context.lineTo(440, 416)
        context.moveTo(432, 408)
        context.lineTo(416, 408)
        context.moveTo(416, 392)
        context.lineTo(432, 392)
        context.moveTo(440, 384)
        context.lineTo(440, 320)
        context.moveTo(432, 312)
        context.lineTo(368, 312)
        context.moveTo(360, 304)
        context.lineTo(360, 256)
        context.moveTo(368, 248)
        context.lineTo(448, 248)
        context.moveTo(448, 216)
        context.lineTo(368, 216)
        context.moveTo(360, 208)
        context.lineTo(360, 160)
        context.moveTo(368, 152)
        context.lineTo(432, 152)
        context.moveTo(440, 144)
        context.lineTo(440, 16)
        context.moveTo(432, 8)
        context.lineTo(240, 8)
        context.moveTo(232, 16)
        context.lineTo(232, 64)
        context.moveTo(216, 64)
        context.lineTo(216, 16)
        context.moveTo(208, 8)
        context.lineTo(16, 8)
        context.stroke()
        // Corners - top left moving counter clockwise
        context.beginPath()
        context.arc(16, 16, 8, Math.PI, 1.5 * Math.PI)
        context.stroke()
        context.beginPath()
        context.arc(16, 144, 8, Math.PI, .5 * Math.PI, true)
        context.stroke()
        context.beginPath()
        context.arc(80, 160, 8, 1.5 * Math.PI, 0)
        context.stroke()
        context.beginPath()
        context.arc(80, 208, 8, 0, 0.5 * Math.PI)
        context.stroke()
        context.beginPath()
        context.arc(80, 256, 8, 1.5 * Math.PI, 0)
        context.stroke()
        context.beginPath()
        context.arc(80, 304, 8, 0, 0.5 * Math.PI)
        context.stroke()
        context.beginPath()
        context.arc(16, 320, 8, 1.5 * Math.PI, Math.PI, true)
        context.stroke()
        context.beginPath()
        context.arc(16, 384, 8, Math.PI, .5 * Math.PI, true)
        context.stroke()
        context.beginPath()
        context.arc(32, 400, 8, 1.5 * Math.PI, 0.5 * Math.PI)
        context.stroke()
        context.beginPath()
        context.arc(16, 416, 8, 1.5 * Math.PI, Math.PI, true)
        context.stroke()
        context.beginPath()
        context.arc(16, 480, 8, Math.PI, 0.5 * Math.PI, true)
        context.stroke()
        context.beginPath()
        context.arc(432, 480, 8, 0.5 * Math.PI, 0, true)
        context.stroke()
        context.beginPath()
        context.arc(432, 416, 8, 0, 1.5 * Math.PI, true)
        context.stroke()
        context.beginPath()
        context.arc(416, 400, 8, 0.5 * Math.PI, 1.5 * Math.PI)
        context.stroke()
        context.beginPath()
        context.arc(432, 384, 8, 0.5 * Math.PI, 0, true)
        context.stroke()
        context.beginPath()
        context.arc(432, 320, 8, 0, 1.5 * Math.PI, true)
        context.stroke()
        context.beginPath()
        context.arc(368, 304, 8, 0.5 * Math.PI, Math.PI)
        context.stroke()
        context.beginPath()
        context.arc(368, 256, 8, Math.PI, 1.5 * Math.PI)
        context.stroke()
        context.beginPath()
        context.arc(368, 208, 8, 0.5 * Math.PI, Math.PI)
        context.stroke()
        context.beginPath()
        context.arc(368, 160, 8, Math.PI, 1.5 * Math.PI)
        context.stroke()
        context.beginPath()
        context.arc(432, 144, 8, 0.5 * Math.PI, 0, true)
        context.stroke()
        context.beginPath()
        context.arc(240, 16, 8, 1.5 * Math.PI, Math.PI, true)
        context.stroke()
        context.beginPath()
        context.arc(224, 64, 8, 0, Math.PI)
        context.stroke()
        context.beginPath()
        context.arc(208, 16, 8, 0, 1.5 * Math.PI, true)
        context.stroke()
        context.beginPath()
        context.arc(432, 16, 8, 0, 1.5 * Math.PI, true)
        context.stroke()
        // Stroke in-board elements - grouped by element - start at top left and move counter clockwise
        context.beginPath()
        context.arc(48, 48, 8, 1.5 * Math.PI, Math.PI, true)
        context.lineTo(40, 64)
        context.arc(48, 64, 8, Math.PI, 0.5 * Math.PI, true)
        context.lineTo(80, 72)
        context.arc(80, 64, 8, 0.5 * Math.PI, 0, true)
        context.lineTo(88, 48)
        context.arc(80, 48, 8, 0, 1.5 * Math.PI, true)
        context.lineTo(48, 40)
        context.stroke()
    }
}

window.onload = function() {
    let world = new World()
    world.test()
}

document.addEventListener("keydown", function(event) {
    if (event.key == "ArrowUp") {
        movePacman("up")
    } else if (event.key == "ArrowDown") {
        movePacman("down")
    } else if (event.key == "ArrowRight") {
        movePacman("right")
    } else if (event.key == "ArrowLeft") {
        movePacman("left")
    }
})