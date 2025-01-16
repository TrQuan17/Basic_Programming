"use strict";
/* Public */
// class Account {
//     username: string
//     firstName?: string
//     lastName?: string
//     constructor(user: string) {
//         this.username = user
//     }
//     getUserName() {
//         return this.username
//     }
// }
// const account = new Account('TrQuan17')
// console.log(account.getUserName())   // 'TrQuan17'
// account.username = 'TrQuan'
// console.log(account.getUserName())   // 'TrQuan'
/* private */
class Account {
    constructor(id, username, firstName, lastName) {
        this.id = id;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    setUserName(user) {
        this.username = user;
    }
    getUserName() {
        return this.username;
    }
}
const account = new Account('1', 'TrQuan17');
// console.log(account.getUserName())
// console.log(account.username)
// account.username = 'TrQuan'
account.setUserName('TrQuan');
console.log(account.id);
//# sourceMappingURL=access_modifier.js.map