"use strict";
// const sum = (...nums: number[]) => {
//     return nums.reduce((sum, current) => sum + current)
// }
// Limit params with tuple
const sum = (...nums) => {
    return nums.reduce((sum, current) => sum + current);
};
const person = {
    name: 'QuanTT',
    age: 24
};
const coppiedPerson = Object.assign({}, person);
//# sourceMappingURL=rest_param.js.map