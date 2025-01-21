class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        Department.count++;
    }
    static get getNumOfEmployees() {
        return this.count;
    }
}
Department.count = 0;
const JsDep = new Department('1', 'JS Department');
const GxDep = new Department('2', 'GX Department');
console.log(Department.getNumOfEmployees);
export {};
//# sourceMappingURL=static.js.map