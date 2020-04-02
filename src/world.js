export default class World {

    constructor() {
        this.worldMap = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
            [0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0],
            [0, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 0],
            [0, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 0],
            [0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0],
            [0, 2, 1, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 1, 2, 0],
            [0, 2, 1, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 1, 2, 0],
            [0, 2, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 2, 0],
            [0, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 0],
            [0, 0, 0, 0, 0, 0, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 2, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 0, 0, 0, 0, 0, 0],
            [0, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 0, 0, 0, 0, 0, 0, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 0, 0, 0, 0, 0, 0, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 0],
            [0, 0, 0, 0, 0, 0, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 2, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 0, 0, 0, 0, 0, 0],
            [0, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 0],
            [0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0],
            [0, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 0],
            [0, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 0],
            [0, 2, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 2, 0],
            [0, 2, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 2, 0],
            [0, 2, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 2, 0],
            [0, 2, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 2, 0],
            [0, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 0],
            [0, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 0],
            [0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0],
            [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
    }

    test() {
        let canvas = $('#game')[0]
        if (canvas.getContext) {
            let ctx = canvas.getContext('2d')
            ctx.canvas.width = 28 * 16 + 2
            ctx.canvas.height = 32 * 16 + 2
            var worldBitmap = new Image()
            worldBitmap.onload = () => {
                ctx.drawImage(worldBitmap, 0, 0)
            }
            worldBitmap.src = './resources/world.png'
        }
    }

    makeWorld() {
        // Set up initial vars
        let canvas = $('#game')[0]
        let blockSize = 16 // Size of the blocks representing the world -- used for scaling up or down
        let scalingFactor = blockSize / 8
        let lineOffset = scalingFactor / 2
        let boardSize = {
            width: this.worldMap[0].length,
            height: this.worldMap.length
        }
        console.log(boardSize.height, boardSize.width)
        // Draw corners
        // Corner types = outer-border, inner-border, outer-border-special, ghost-box
        // Corner positions = top-left, top-right, bottom-right, bottom-left
        function drawCorner(blockX, blockY, cornerType, cornerPosition, ctx) {
            // Move to lower left corner of target block
            let path = new Path2D()
            var x = 0
            var y = 0
            switch (cornerType) {
                case "outer-border":
                    // Draw inner section of border (by calling this function w/ inner-border arguments)
                    drawCorner(blockX, blockY, "inner-border", cornerPosition, ctx)
                    // Draw outer section of border
                    // Move to lower left pixel of target block
                    x = blockX * blockSize - blockSize + lineOffset
                    y = blockY * blockSize
                    path.moveTo(x, y)
                    y = y - (4 * scalingFactor)
                    path.lineTo(x, y)
                    x = x + (1 * scalingFactor)
                    path.moveTo(x, y)
                    y = y - (2 * scalingFactor)
                    path.lineTo(x, y)
                    x = x + lineOffset
                    y = y - lineOffset
                    path.moveTo(x, y)
                    x = x + (2 * scalingFactor)
                    path.lineTo(x, y)
                    y = y - (1 * scalingFactor)
                    path.moveTo(x, y)
                    x = x + (4 * scalingFactor)
                    path.lineTo(x, y)
                    break
                case "inner-border":
                    // Draw inner section of border
                    // Move to lower middle pixel of target block
                    x = (blockX * blockSize - blockSize) + (4 * scalingFactor) + lineOffset
                    y = blockY * blockSize
                    path.moveTo(x, y)
                    y = y - (2 * scalingFactor)
                    path.lineTo(x, y)
                    x = x + lineOffset
                    y = y - lineOffset
                    path.moveTo(x, y)
                    x = x + (1 * scalingFactor)
                    path.lineTo(x, y)
                    y = y - (1 * scalingFactor)
                    path.moveTo(x, y)
                    x = x + (2 * scalingFactor)
                    path.lineTo(x, y)
                    break
                case "inner-border-inside":
                    // Draw inner section of border
                    // Move to lower middle pixel of target block
                    x = (blockX * blockSize - blockSize) + (3 * scalingFactor) + lineOffset
                    y = blockY * blockSize
                    path.moveTo(x, y)
                    y = y - (3 * scalingFactor)
                    path.lineTo(x, y)
                    x = x + lineOffset
                    y = y - lineOffset
                    path.moveTo(x, y)
                    x = x + (1 * scalingFactor)
                    path.lineTo(x, y)
                    y = y - (1 * scalingFactor)
                    path.moveTo(x, y)
                    x = x + (3 * scalingFactor)
                    path.lineTo(x, y)
                    break
                case "outer-border-special-1":
                    // Draw inner section of border
                    // Move to lower middle pixel of target block
                    x = (blockX * blockSize - blockSize) + (4 * scalingFactor) + lineOffset
                    y = blockY * blockSize
                    path.moveTo(x, y)
                    y = y - (3 * scalingFactor)
                    path.lineTo(x, y)
                    x = x + lineOffset
                    y = y - lineOffset
                    path.moveTo(x, y)
                    x = x + (1 * scalingFactor)
                    path.lineTo(x, y)
                    y = y - (1 * scalingFactor)
                    path.moveTo(x, y)
                    x = x + (2 * scalingFactor)
                    path.lineTo(x, y)
                    // Draw straight line on outer edge
                    // Move to lower left pixel of target block
                    x = blockX * blockSize - blockSize + lineOffset
                    y = blockY * blockSize
                    path.moveTo(x, y)
                    y = y - (1 * blockSize)
                    path.lineTo(x, y)
                    ctx.save()
                    x = (blockX * blockSize - blockSize) + blockSize / 2
                    y = blockY * blockSize - blockSize / 2
                    ctx.translate(x, y)
                    switch (cornerPosition) {
                        case "top-left":
                            break
                        case "top-right":
                            ctx.scale(-1, 1)
                            break
                        case "bottom-right":
                            ctx.scale(-1, -1)
                            break
                        case "bottom-left":
                            ctx.scale(1, -1)
                            break
                    }
                    ctx.translate(-x, -y)
                    ctx.stroke(path)
                    ctx.restore()
                    return
                    break
                case "outer-border-special-2":
                    // Draw inner section of border
                    // Move to lower middle pixel of target block
                    x = (blockX * blockSize - blockSize) + (3 * scalingFactor) + lineOffset
                    y = blockY * blockSize
                    path.moveTo(x, y)
                    y = y - (2 * scalingFactor)
                    path.lineTo(x, y)
                    x = x + lineOffset
                    y = y - lineOffset
                    path.moveTo(x, y)
                    x = x + (1 * scalingFactor)
                    path.lineTo(x, y)
                    y = y - (1 * scalingFactor)
                    path.moveTo(x, y)
                    x = x + (3 * scalingFactor)
                    path.lineTo(x, y)
                    // Draw straight line on outer edge
                    // Move to lower left pixel of target block
                    x = blockX * blockSize - blockSize
                    y = blockY * blockSize - blockSize + lineOffset
                    path.moveTo(x, y)
                    x = x - (1 * blockSize)
                    path.lineTo(x, y)
                    ctx.save()
                    x = (blockX * blockSize - blockSize) + blockSize / 2
                    y = blockY * blockSize - blockSize / 2
                    ctx.translate(x, y)
                    switch (cornerPosition) {
                        case "top-left":
                            break
                        case "top-right":
                            ctx.scale(-1, 1)
                            break
                        case "bottom-right":
                            ctx.scale(-1, -1)
                            break
                        case "bottom-left":
                            ctx.scale(1, -1)
                            break
                    }
                    ctx.translate(-x, -y)
                    ctx.stroke(path)
                    ctx.restore()
                    return
                    break
                case "ghost-box":
                    // Draw inner section of border
                    // Move to lower middle pixel of target block
                    x = (blockX * blockSize - blockSize + lineOffset) + 3 * scalingFactor
                    y = blockY * blockSize
                    path.moveTo(x, y)
                    y = y - (4 * scalingFactor)
                    path.lineTo(x, y)
                    x = x + (4 * scalingFactor)
                    path.lineTo(x, y)
                    // Move to lower right pixel of target block
                    x = blockX * blockSize - scalingFactor
                    y = blockY * blockSize
                    path.moveTo(x, y)
                    y = y - (1 * scalingFactor)
                    path.lineTo(x, y)
                    break
                default:
                    break
            }
            ctx.save()
            x = (blockX * blockSize - blockSize) + blockSize / 2
            y = blockY * blockSize - blockSize / 2
            ctx.translate(x, y)
            switch (cornerPosition) {
                case "top-left":
                    break
                case "top-right":
                    ctx.rotate(90 * Math.PI / 180)
                    break
                case "bottom-right":
                    ctx.rotate(180 * Math.PI / 180)
                    break
                case "bottom-left":
                    ctx.rotate(270 * Math.PI / 180)
                    break
            }
            ctx.translate(-x, -y)
            ctx.stroke(path)
            ctx.restore()
        }

        // Draw straight lines
        // Line types = inner-border, outer-border
        function drawLine(blockX, blockY, lineType, linePosition, ctx) {
            let path = new Path2D()
            var x = 0
            var y = 0
            switch (lineType) {
                case "inner":
                    // Draw inner line (in middle of box)
                    // Move to lower middle pixel of target block
                    x = (blockX * blockSize - blockSize + lineOffset) + 4 * scalingFactor
                    y = blockY * blockSize
                    path.moveTo(x, y)
                    y = y - (1 * blockSize)
                    path.lineTo(x, y)
                    break
                case "outer":
                    // Draw inner line by calling this function
                    drawLine(blockX, blockY, "inner", linePosition, ctx)
                    // Draw outer line (outside edge of box)
                    // Move to lower left pixel of target block
                    x = blockX * blockSize - blockSize + lineOffset
                    y = blockY * blockSize
                    path.moveTo(x, y)
                    y = y - (1 * blockSize)
                    path.lineTo(x, y)
                    break
                default:
                    break
            }
            ctx.save()
            x = (blockX * blockSize - blockSize) + blockSize / 2
            y = blockY * blockSize - blockSize / 2
            ctx.translate(x, y)
            switch (linePosition) {
                case "left":
                    break
                case "top":
                    ctx.rotate(90 * Math.PI / 180)
                    break
                case "right":
                    ctx.rotate(180 * Math.PI / 180)
                    break
                case "bottom":
                    ctx.rotate(270 * Math.PI / 180)
                    break
            }
            ctx.translate(-x, -y)
            ctx.stroke(path)
            ctx.restore()
        }

        if (canvas.getContext) {
            let ctx = canvas.getContext('2d')
            ctx.canvas.width = boardSize.width * blockSize + 2
            ctx.canvas.height = boardSize.height * blockSize + 2
            ctx.strokeStyle = "#2121FF"
            ctx.lineWidth = scalingFactor
            for (var row = 1; row < this.worldMap.length - 1; row++) {
                for (var col = 1; col < this.worldMap[row].length - 1; col++) {
                    if (this.worldMap[row][col] == 2) {
                        let leftVal = this.worldMap[row][col - 1]                      
                        let rightVal = this.worldMap[row][col + 1]
                        let topVal = this.worldMap[row - 1][col]
                        let bottomVal = this.worldMap[row + 1][col]
                        // Conditions for outer-border corners
                        if (leftVal == 0 && topVal == 0 && rightVal == 2 && bottomVal == 2) {
                            drawCorner(col, row, "outer-border", "top-left", ctx)
                        } else if (leftVal == 2 && topVal == 0 && rightVal == 0 && bottomVal == 2) {
                            drawCorner(col, row, "outer-border", "top-right", ctx)
                        } else if (leftVal == 0 && topVal == 2 && rightVal == 2 && bottomVal == 0) {
                            drawCorner(col, row, "outer-border", "bottom-left", ctx)
                        } else if (leftVal == 2 && topVal == 2 && rightVal == 0 && bottomVal == 0) {
                            drawCorner(col, row, "outer-border", "bottom-right", ctx)
                        } else if (leftVal == 0 && topVal == 2 && rightVal == 2 && bottomVal == 2) {
                            let addVal = this.worldMap[row - 1][col + 1]
                            if (addVal == 1) {
                                drawCorner(col, row, "outer-border-special-1", "bottom-left", ctx)
                            } else {
                                drawCorner(col, row, "outer-border-special-1", "top-left", ctx)
                            }
                        } else if (leftVal == 2 && topVal == 2 && rightVal == 0 && bottomVal == 2) {
                            let addVal = this.worldMap[row - 1][col - 1]
                            if (addVal == 1) {
                                drawCorner(col, row, "outer-border-special-1", "bottom-right", ctx)
                            } else {
                                drawCorner(col, row, "outer-border-special-1", "top-right", ctx)
                            }
                        } else if (leftVal == 2 && topVal == 0 && rightVal == 2 && bottomVal == 2) {
                            let addVal = this.worldMap[row + 1][col - 1]
                            if (addVal == 1) {
                                drawCorner(col, row, "outer-border-special-2", "top-right", ctx)
                            } else {
                                drawCorner(col, row, "outer-border-special-2", "top-left", ctx)
                            }
                        } else if (leftVal == 2 && topVal == 2 && rightVal == 2 && bottomVal == 0) {
                            let addVal = this.worldMap[row - 1][col - 1]
                            if (addVal == 1) {
                                drawCorner(col, row, "outer-border-special-2", "bottom-right", ctx)
                            } else {
                                drawCorner(col, row, "outer-border-special-2", "bottom-left", ctx)
                            }
                        }
                        // Conditions for inner-border corners
                        else if (leftVal == 1 && topVal == 1 && rightVal == 2 && bottomVal == 2) {
                            drawCorner(col, row, "inner-border", "top-left", ctx)
                        } else if (leftVal == 2 && topVal == 1 && rightVal == 1 && bottomVal == 2) {
                            drawCorner(col, row, "inner-border", "top-right", ctx)
                        } else if (leftVal == 2 && topVal == 2 && rightVal == 1 && bottomVal == 1) {
                            drawCorner(col, row, "inner-border", "bottom-right", ctx)
                        } else if (leftVal == 1 && topVal == 2 && rightVal == 2 && bottomVal == 1) {
                            drawCorner(col, row, "inner-border", "bottom-left", ctx)
                        } else if (leftVal == 2 && topVal == 2 && rightVal == 2 && bottomVal == 2) {
                            var addVal = this.worldMap[row - 1][col - 1]
                            if (addVal == 1) {
                                drawCorner(col, row, "inner-border-inside", "bottom-right", ctx)
                            } else {
                                addVal = this.worldMap[row - 1][col + 1]
                                if (addVal == 1) {
                                    drawCorner(col, row, "inner-border-inside", "bottom-left", ctx)
                                } else {
                                    addVal = this.worldMap[row + 1][col + 1]
                                    if (addVal == 1) {
                                        drawCorner(col, row, "inner-border-inside", "top-left", ctx)
                                    } else {
                                        drawCorner(col, row, "inner-border-inside", "top-right", ctx)
                                    }
                                }
                            }
                            
                        }
                        // Conditions for outer-border lines
                        else if (topVal == 0 && bottomVal == 1) {
                            drawLine(col, row, "outer", "top", ctx)
                        } else if (leftVal == 0 && rightVal == 1) {
                            drawLine(col, row, "outer", "left", ctx)
                        } else if (topVal == 1 && bottomVal == 0) {
                            drawLine(col, row, "outer", "bottom", ctx)
                        } else if (leftVal == 1 && rightVal == 0) {
                            drawLine(col, row, "outer", "right", ctx)
                        }
                        // Conditions for inner-border lines
                        else if (topVal == 1 && bottomVal == 2) {
                            drawLine(col, row, "inner", "top", ctx)
                        } else if (leftVal == 1 && rightVal == 2) {
                            drawLine(col, row, "inner", "left", ctx)
                        } else if (topVal == 2 && bottomVal == 1) {
                            drawLine(col, row, "inner", "bottom", ctx)
                        } else if (leftVal == 2 && rightVal == 1) {
                            drawLine(col, row, "inner", "right", ctx)
                        }
                    }
                }
            }
        }
    }

    drawWorld() {
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
}