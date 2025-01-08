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