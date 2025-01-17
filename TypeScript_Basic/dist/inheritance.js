"use strict";
class Department {
    constructor(id, name, employees = []) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }
}
class ITDepartment extends Department {
    constructor(id, employees, mainTech) {
        super(id, 'IT Department', employees);
        this.mainTech = mainTech;
    }
    getAdmin() {
        return this.employees[0];
    }
    getMainTech() {
        return this.mainTech;
    }
}
const IT = new ITDepartment('1', ['Quan', 'TrQuan17', 'QuanTT'], 'Web App');
console.log(IT.getAdmin());
console.log(IT.getMainTech());
//# sourceMappingURL=inheritance.js.map