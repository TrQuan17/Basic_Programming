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
    
    constructor(
        public readonly id: string,
        private username: string,
        public firstName?: string,
        public lastName?: string
    ) {}

    setUserName(user: string) {
        this.username = user
    }

    getUserName() {
        return this.username
    }
}

const account = new Account('1', 'TrQuan17')

// console.log(account.getUserName())

// console.log(account.username)

// account.username = 'TrQuan'
account.setUserName('TrQuan')

console.log(account.id)
