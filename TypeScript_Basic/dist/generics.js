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
// Error: Property 'background' is missing in type '{ id: string; theme: 'LIGHT'; language: string; }'
//        but required in type 'Setting'.ts(2741)
// const setting: Setting = {
//     id: '1',
//     theme: 'LIGHT',
//     language: 'VN',
// }
// Success
const settingP = {
    id: '1',
    theme: 'LIGHT'
};
/* Readonly utility type */
const setting = {
    id: '1',
    theme: 'LIGHT',
    language: 'VN',
    background: 'summer.jpg'
};
// Success
setting.id = '2';
const settingR = {
    id: '1',
    theme: 'DARK',
    language: 'EN',
    background: 'summer.jpg'
};
// Error: Cannot assign to 'id' because it is a read-only property.ts(2540)
// settingR.id = '1'
//# sourceMappingURL=generics.js.map