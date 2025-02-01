class Department {
    constructor(
        private id: string,
        private name: string,
        protected employees: string[] = []
    ) { }

    get departmentName() {
        return this.name
    }
}

class ITDepartment extends Department {
    constructor(
        id: string,
        employees: string[],
        private mainTech: string
    ) {
        super(id, 'IT Department', employees)
    }

    getAdmin() {
        return this.employees[0]
    }

    getMainTech() {
        return this.mainTech
    }
}

const IT = new ITDepartment('1', ['Quan', 'TrQuan17', 'QuanTT'], 'Web App')

console.log(IT.getAdmin())      // 'Quan'

console.log(IT.getMainTech())   // 'Web App'

console.log(IT.departmentName)  // 'IT Department'

export {}