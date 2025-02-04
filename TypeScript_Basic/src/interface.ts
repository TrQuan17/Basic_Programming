interface DateTime {
    year: number
    month: number
    date: number
    hour: number
    minute: number
    second: number

    toString(): string
}

const datetime: DateTime = {
    year: 2025,
    month: 1,
    date: 24,
    hour: 8,
    minute: 0,
    second: 0,

    toString() {
        return `${this.year}/${this.month}/${this.date} ${this.hour}:${this.minute}:${this.second}`
    }
}

class Time implements DateTime {

    constructor(
        public year: number,
        public month: number,
        public date: number,
        public hour: number,
        public minute: number,
        public second: number
    ) { }

    toString(): string {
        return `${this.year}/${this.month}/${this.date} ${this.hour}:${this.minute}:${this.second}`
    }

    convertTimeToDays() {
        return (this.second / (60 * 60 * 24) + this.minute / (60 * 24) + this.hour / 24).toFixed(3)
    }
}

const time: DateTime = new Time(2025, 2, 4, 14, 20, 20)
console.log(time.toString())            // 2025/2/4 14:20:20
// console.log(time.convertTimeToDays())   // 0.597

// class DateCustom implements DateTime {
//     constructor(
//         public year: number,
//         public month: number,
//         public date: number,
//     ) {}
// }


/* ----------------------------------------------*/

interface Product {
    name: string
    price: number
}

interface Bill {
    id: string
    nums: number
    discount: number
}

class Pay implements Product, Bill {
    constructor(
        public id: string,
        public nums: number,
        public discount: number,
        public name: string,
        public price: number,
    ) { }

    get payable() {
        return (this.nums * this.price) * this.discount / 100
    }
}

const bill: Bill = new Pay('1', 5, 4, 'Phone', 1250000)
const product: Product = new Pay('1', 5, 4, 'Phone', 1250000)

interface CommonRole {
    name: string
    readonly level: string
    sublevel?: string
}

class Guest implements CommonRole {
    constructor(
        public name: string,
        public level: string
    ) { }
}

const guest:CommonRole = new Guest('Quan', '1')

// guest.level = '2'

const guestC = new Guest('Quan', '1')

// Success
guestC.level = '2'

/* --------------------------------------------- */

interface IPerson {
    name: string
    age: number
}

interface IEmployee extends IPerson {
    department: string
}

const employee: IEmployee = {
    name: 'Quan',
    age: 24,
    department: 'IT'
}