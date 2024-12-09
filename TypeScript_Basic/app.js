var num1 = document.querySelector('#num1');
var num2 = document.querySelector('#num2');
var btn = document.querySelector('input[type=button]');
btn.addEventListener('click', function () {
    console.log(+num1.value + +num2.value);
});
