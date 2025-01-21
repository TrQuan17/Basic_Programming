"use strict";
class Department {
    constructor(id) {
        this.id = id;
    }
}
class ITDepartment extends Department {
    constructor(id, name = 'IT Department', employees = []) {
        super(id);
        this.name = name;
        this.employees = employees;
    }
    addEmployees(employee) {
        if (!employee.language) {
            throw new Error(`Not eligible to join ${this.name}`);
        }
        this.employees.push(employee);
    }
    get employeesList() {
        return this.employees;
    }
}
const IT = new ITDepartment('1');
const employee = {
    name: 'TrQuan',
    language: 'Typescript'
};
IT.addEmployees(employee);
console.log(IT.employeesList);
//# sourceMappingURL=abstract.js.map