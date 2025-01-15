"use strict";
class Account {
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
const account = new Account('TrQuan17', '12345678');
console.log(account.showFullName());
//# sourceMappingURL=classes.js.map