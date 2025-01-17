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
// class Account {
//     constructor(
//         public readonly id: string,
//         private username: string,
//         public firstName?: string,
//         public lastName?: string
//     ) {}
//     setUserName(user: string) {
//         this.username = user
//     }
//     getUserName() {
//         return this.username
//     }
// }
// const account = new Account('1', 'TrQuan17')
// // console.log(account.getUserName())
// // console.log(account.username)
// // account.username = 'TrQuan'
// account.setUserName('TrQuan')
// console.log(account.id)
/* Protect */
// class Department {
//     constructor(
//         private id: string,
//         public name: string,
//         protected employees: string[] = []
//     ) { }
// }
// class ITDepartment extends Department {
//     getAdmin() {
//         return this.employees[1]
//     }
// }
// const IT = new ITDepartment('1', 'IT Department', ['Quan'])
// console.log(IT.getAdmin())  // 'Quan'
// console.log(IT.employees)
//# sourceMappingURL=access_modifier.js.map