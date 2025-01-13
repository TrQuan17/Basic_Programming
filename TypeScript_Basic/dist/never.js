"use strict";
var SEASON;
(function (SEASON) {
    SEASON[SEASON["SPRING"] = 0] = "SPRING";
    SEASON[SEASON["SUMMER"] = 1] = "SUMMER";
    SEASON[SEASON["AUTUMN"] = 2] = "AUTUMN";
    SEASON[SEASON["WINTER"] = 3] = "WINTER";
})(SEASON || (SEASON = {}));
const getTemperature = (season) => {
    switch (season) {
        case SEASON.SPRING:
            return 30;
        case SEASON.SUMMER:
            return 36;
        case SEASON.AUTUMN:
            return 25;
        case SEASON.WINTER:
            return 15;
        default:
            const _exhaustiveCheck = season;
            return _exhaustiveCheck;
    }
};
//# sourceMappingURL=never.js.map