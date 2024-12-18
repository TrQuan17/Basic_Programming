/* Wellcome typescript*/
// const num1 = document.querySelector('#num1') as HTMLInputElement
// const num2 = document.querySelector('#num2') as HTMLInputElement

// const btn = document.querySelector('input[type=button]') as HTMLButtonElement

// btn.addEventListener('click', function(){
//     console.log(+num1.value  + +num2.value)
// })

/* Enum */
enum MOVE {
    Up,
    Down, 
    Left,
    Right
}

let a = MOVE.Down

console.log('MOVE ' + a)