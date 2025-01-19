class Department {
    constructor(
        private name: string,
        private employee?:string,
        private employees: string[] = []
    ) {}

    get lastEmployee() {
        if (!this.employee) {
            throw new Error(`No employees in ${this.name} department`)
        }
        return this.employee
    }

    set lastEmployee(employee: string) {
        if (!employee) {
            throw new Error('Employee is required!!!')
        }

        this.employees.push(employee)
        this.employee = employee
    }
}

const dep = new Department('IT Department')

dep.lastEmployee = 'TrQuan17'
console.log(dep.lastEmployee)