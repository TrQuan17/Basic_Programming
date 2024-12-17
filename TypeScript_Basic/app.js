/* Wellcome typescript*/
// const num1 = document.querySelector('#num1') as HTMLInputElement
// const num2 = document.querySelector('#num2') as HTMLInputElement
// const btn = document.querySelector('input[type=button]') as HTMLButtonElement
// btn.addEventListener('click', function(){
//     console.log(+num1.value  + +num2.value)
// })
/* Enum */
var MOVE;
(function (MOVE) {
    MOVE[MOVE["Up"] = 1] = "Up";
    MOVE[MOVE["Down"] = 2] = "Down";
    MOVE[MOVE["Left"] = 7] = "Left";
    MOVE[MOVE["Right"] = 8] = "Right";
})(MOVE || (MOVE = {}));
var a = MOVE.Down + 2;
console.log(a + '');
