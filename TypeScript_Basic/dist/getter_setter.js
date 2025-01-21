class Department {
    constructor(name, employee, employees = []) {
        this.name = name;
        this.employee = employee;
        this.employees = employees;
    }
    get lastEmployee() {
        if (!this.employee) {
            throw new Error(`No employees in ${this.name} department`);
        }
        return this.employee;
    }
    set lastEmployee(employee) {
        if (!employee) {
            throw new Error('Employee is required!!!');
        }
        this.employees.push(employee);
        this.employee = employee;
    }
}
const dep = new Department('IT Department');
dep.lastEmployee = 'TrQuan17';
console.log(dep.lastEmployee);
export {};
//# sourceMappingURL=getter_setter.js.map