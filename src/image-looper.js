let CreateImageLooper = (images) => {
    let index = 0
    return {
        next: (orientation = "left") => {
            if (index >= images[orientation].length) {
                index = 0
            }
            return images[orientation][index++]
        },
        stop: (orientation = "left") => {
            index = 0
            return images[orientation][0]
        },
        reset: () => {
            index = 0
        }
    }
}

let CreateImageIterator = (images) => {
    let index = 0
    return {
        next: () => {
            if (index < images.length) {
                return images[index++]
            } else {
                return false
            }
        }
    }
}

export { CreateImageLooper, CreateImageIterator }