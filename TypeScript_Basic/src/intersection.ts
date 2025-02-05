interface Admin {
    name: string
    privileges: string[]
}

interface Employee {
    name: string
    startDate: Date
}

type ElevatedEmployee = Admin & Employee

const e: ElevatedEmployee = {
    name: 'Quan',
    privileges: ['build-server'],
    startDate: new Date()
}

type Numeric = number
type Characters = string

type VarChar = Numeric & Characters // typeof VarChar = never