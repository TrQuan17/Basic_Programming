"use strict";
class Person {
    constructor(username, pass, first, last) {
        this.username = username;
        this.password = pass;
        this.firstName = first;
        this.lastName = last;
    }
    showFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const per = new Person('TrQuan17', '12345678');
console.log(per.showFullName());
//# sourceMappingURL=classes.js.map