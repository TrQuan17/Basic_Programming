interface DateTime {
    year: number
    month: number
    date: number
    hour: number
    minute: number
    second: number

    toString(): string
}

const datetime: DateTime = {
    year: 2025,
    month: 1,
    date: 24,
    hour: 8,
    minute: 0,
    second: 0,

    toString() {
        return `${this.year}/${this.month}/${this.date} ${this.hour}:${this.minute}:${this.second}`
    }
}

console.log(datetime.toString())