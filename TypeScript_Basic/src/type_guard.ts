/* instanceof */
class Bird {
    constructor(public flySpeed: number) {}
}

class Horse {
    constructor(public runSpeed: number) {}
}

const getAnimalSpeed = (animal: Bird | Horse) => {
    if (animal instanceof Bird) {
        return animal.flySpeed
    }
    
    return animal.runSpeed
}

/* typeof */
const logData = (data: number | string) => {
    if (typeof data === 'number') {
        data = data.toFixed(2)
    }

    return data
}

console.log(logData(5.2566))

/* Equality */

const showLimit = (x: number, y: string | number) => {
    if (x === y) {
        return `[${x.toFixed(2)}; ${y.toFixed(2)}]`
    } 
    
    return `[${x.toFixed(2)}; ${y.toString()})`
}

console.log(showLimit(3, '∞'))  // [3.00; ∞)
console.log(showLimit(4, 4))    // [4.00; 4.00]