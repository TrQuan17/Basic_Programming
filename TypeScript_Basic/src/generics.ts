const convertString = <T>(data: T) => data?.toString()

console.log(convertString(5))

console.log(convertString([1, 2, 3]))


function merge<T extends {}>(objA: T, objB: T) {
    return Object.assign(objA, objB)
}

console.log(merge({ language: 'typescript' }, { version: '1.2.3' }))

// function getValueByKey<T>(obj: T, key: keyof T) {
//     return obj[key]
// }

function getValueByKey<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}

const account = {
    username: 'QuanTT',
    age: 24
}

console.log(getValueByKey(account, 'age')) // 'QuanTT'

class DataStorage<T> {
    private data: T[] = []

    add(...items: T[]) {
        this.data.push(...items)
    }

    remove(item: T) {
        this.data = this.data.filter((value) => !this.data.includes(item))
    }

    get dataList() {
        return this.data
    }
}

const numberStorage = new DataStorage<number>()

numberStorage.add(1, 2, 4, 5, 4)

console.log(numberStorage.dataList)

// With string type
const stringStorage = new DataStorage<string>()

stringStorage.add('VietNam', 'China', 'Singapore')

console.log(stringStorage.dataList) // [ 1, 2, 4, 5, 4 ]

/* Partial utility types */

interface Setting {
    id: string,
    theme: 'LIGHT' | 'DARK'
    language: string
    background: string
}

// Error: Property 'background' is missing in type '{ id: string; theme: 'LIGHT'; language: string; }'
//        but required in type 'Setting'.ts(2741)
// const setting: Setting = {
//     id: '1',
//     theme: 'LIGHT',
//     language: 'VN',
// }

// Success
const settingP: Partial<Setting> = {
    id: '1',
    theme: 'LIGHT'
}

/* Readonly utility type */
const setting: Setting = {
    id: '1',
    theme: 'LIGHT',
    language: 'VN',
    background: 'summer.jpg'
}

// Success
setting.id = '2'

const settingR: Readonly<Setting> = {
    id: '1',
    theme: 'DARK',
    language: 'EN',
    background: 'summer.jpg'
}

// Error: Cannot assign to 'id' because it is a read-only property.ts(2540)
// settingR.id = '1'

export {}