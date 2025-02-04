// type AddFn = (...nums: number[]) => number
interface AddFn {
    (...nums: number[]): number
}

const add: AddFn = (...nums: number[]) => nums.reduce((result, element) => result + element)

console.log(add(1, 2, 3))