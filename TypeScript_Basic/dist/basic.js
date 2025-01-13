/* Wellcome typescript*/
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const btn = document.querySelector('input[type=button]');
btn.addEventListener('click', function () {
    console.log(+num1.value + +num2.value);
});
export const sum_two_num = (num1, num2) => num1 + num2;
//# sourceMappingURL=basic.js.map