"use strict";
const addHandle = (num1, num2, cb) => {
    num1 *= 10;
    num2 *= 100;
    return cb(num1 + num2);
};
const pText = document.getElementById('result');
pText.innerText = addHandle(3, 5, (result) => result) + '';
