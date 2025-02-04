"use strict";
const datetime = {
    year: 2025,
    month: 1,
    date: 24,
    hour: 8,
    minute: 0,
    second: 0,
    toString() {
        return `${this.year}/${this.month}/${this.date} ${this.hour}:${this.minute}:${this.second}`;
    }
};
class Time {
    constructor(year, month, date, hour, minute, second) {
        this.year = year;
        this.month = month;
        this.date = date;
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }
    toString() {
        return `${this.year}/${this.month}/${this.date} ${this.hour}:${this.minute}:${this.second}`;
    }
    convertTimeToDays() {
        return (this.second / (60 * 60 * 24) + this.minute / (60 * 24) + this.hour / 24).toFixed(3);
    }
}
const time = new Time(2025, 2, 4, 14, 20, 20);
console.log(time.toString()); // 2025/2/4 14:20:20
class Pay {
    constructor(id, nums, discount, name, price) {
        this.id = id;
        this.nums = nums;
        this.discount = discount;
        this.name = name;
        this.price = price;
    }
    get payable() {
        return (this.nums * this.price) * this.discount / 100;
    }
}
const bill = new Pay('1', 5, 4, 'Phone', 1250000);
const product = new Pay('1', 5, 4, 'Phone', 1250000);
class Guest {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }
}
const guest = new Guest('Quan', '1');
// guest.level = '2'
const guestC = new Guest('Quan', '1');
// Success
guestC.level = '2';
const employee = {
    name: 'Quan',
    age: 24,
    department: 'IT'
};
//# sourceMappingURL=interface.js.map