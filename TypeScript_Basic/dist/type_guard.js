"use strict";
/* instanceof */
class Bird {
    constructor(flySpeed) {
        this.flySpeed = flySpeed;
    }
}
class Horse {
    constructor(runSpeed) {
        this.runSpeed = runSpeed;
    }
}
const getAnimalSpeed = (animal) => {
    if (animal instanceof Bird) {
        return animal.flySpeed;
    }
    return animal.runSpeed;
};
/* typeof */
const logData = (data) => {
    if (typeof data === 'number') {
        data = data.toFixed(2);
    }
    return data;
};
console.log(logData(5.2566));
/* Equality */
const showLimit = (x, y) => {
    if (x === y) {
        return `[${x.toFixed(2)}; ${y.toFixed(2)}]`;
    }
    return `[${x.toFixed(2)}; ${y.toString()})`;
};
console.log(showLimit(3, '∞')); // [3.00; ∞)
console.log(showLimit(4, 4)); // [4.00; 4.00]
//# sourceMappingURL=type_guard.js.map