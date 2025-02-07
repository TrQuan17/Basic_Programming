"use strict";
const convertString = (data) => data === null || data === void 0 ? void 0 : data.toString();
console.log(convertString(5));
console.log(convertString([1, 2, 3]));
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
console.log(merge({ language: 'typescript' }, { version: '1.2.3' }));
// function getValueByKey<T>(obj: T, key: keyof T) {
//     return obj[key]
// }
function getValueByKey(obj, key) {
    return obj[key];
}
const account = {
    username: 'QuanTT',
    age: 24
};
console.log(getValueByKey(account, 'age')); // 'QuanTT'
class DataStorage {
    constructor() {
        this.data = [];
    }
    add(...items) {
        this.data.push(...items);
    }
    remove(item) {
        this.data = this.data.filter((value) => !this.data.includes(item));
    }
    get dataList() {
        return this.data;
    }
}
const numberStorage = new DataStorage();
numberStorage.add(1, 2, 4, 5, 4);
console.log(numberStorage.dataList);
// With string type
const stringStorage = new DataStorage();
stringStorage.add('VietNam', 'China', 'Singapore');
console.log(stringStorage.dataList); // [ 1, 2, 4, 5, 4 ]
//# sourceMappingURL=generics.js.map