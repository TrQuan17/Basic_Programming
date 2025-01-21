type Employee = {
    name: string,
    language: string
}

abstract class Department {

    abstract name: string

    constructor(protected id: string) { }

    abstract addEmployees(employee: Employee): void
}

class ITDepartment extends Department {
    constructor(
        id: string,
        public name: string = 'IT Department',
        private employees: Employee[] = []
    ) {
        super(id)
    }

    addEmployees(employee: Employee): void {
        if (!employee.language) {
            throw new Error(`Not eligible to join ${this.name}`)
        }

        this.employees.push(employee)
    }

    get employeesList() {
        return this.employees
    }
}

const IT = new ITDepartment('1')

const employee: Employee = {
    name: 'TrQuan',
    language: 'Typescript'
}
IT.addEmployees(employee)

console.log(IT.employeesList)