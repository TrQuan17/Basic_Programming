class Department {
    private static count: number = 0

    constructor(
        private id: string,
        private name: string
    ) {
        Department.count++
    }

    static get getNumOfEmployees() {
        return this.count
    }
}

const JsDep = new Department('1', 'JS Department')
const GxDep = new Department('2', 'GX Department')

console.log(Department.getNumOfEmployees)

export {}