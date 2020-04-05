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

export default CreateImageLooper


// class ImageLooper {

//     constructor(images) {
//         this.images = images
//     }

//     [Symbol.iterator]() {
//         let step = 0
//         return {
//             next: (orientation = "left") => {
//                 if (step >= this.images[orientation].length) {
//                     step = 0
//                 }
//                 return { value: this.images[orientation][step++] }
//             }
//         }
//     }

// }