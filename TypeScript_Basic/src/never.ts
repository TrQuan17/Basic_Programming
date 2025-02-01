enum SEASON {
    SPRING,
    SUMMER,
    AUTUMN,
    WINTER
}

const getTemperature = (season: SEASON) => {
    switch(season) {
        case SEASON.SPRING:
            return 30
        case SEASON.SUMMER:
            return 36
        case SEASON.AUTUMN:
            return 25
        case SEASON.WINTER:
            return 15
        default:
            const _exhaustiveCheck:never = season
            return _exhaustiveCheck
    }
}

// let obj: unknown
// let variable: any
// let age: number = 5

// // Success
// obj = variable
// obj = age

// // Error: 'obj' is of type 'unknown'.ts(18046)
// obj.call()