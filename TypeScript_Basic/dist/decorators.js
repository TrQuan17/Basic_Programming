"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger() {
    console.log('LOGGER FACTORY');
    return function (args) {
        console.log('RETURN LOGGER');
    };
}
function Display() {
    console.log('DISPLAY FACTORY');
    return function (args) {
        console.log('RETURN DISPLAY');
    };
}
let Setting = class Setting {
};
Setting = __decorate([
    Logger(),
    Display()
], Setting);
// LOG - SETTING
// class Setting {
//     constructor(id, theme, language, background) {
//         this.id = id;
//         this.theme = theme;
//         this.language = language;
//         this.background = background;
//     }
//     set setLanguage(lang) {
//         this.language = lang;
//     }
// }
//# sourceMappingURL=decorators.js.map