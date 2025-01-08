const addHandle = (num1: number, num2: number, cb: (result: number) => void) => {
    num1 *= 10
    num2 *= 100

    return cb(num1 + num2)
}

const pText = document.getElementById('result') as HTMLElement

pText.innerText = addHandle(3, 5, (result: number) => result) + ''