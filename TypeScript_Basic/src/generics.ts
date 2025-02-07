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