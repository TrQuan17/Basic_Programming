class Person {
    private username?: string
    public password?: string
    public firstName?: string
    public lastName?: string

    constructor(
        username?: string,
        pass?: string,
        first?: string,
        last?: string
    ) {
        this.username = username
        this.password = pass
        this.firstName = first
        this.lastName = last
    }

    public showFullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
}

const per = new Person('TrQuan17', '12345678')

console.log(per.showFullName())