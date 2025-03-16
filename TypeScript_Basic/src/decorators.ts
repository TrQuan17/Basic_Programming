function Logger() {
    console.log('LOGGER FACTORY')

    return function(args: Function) {
        console.log('RETURN LOGGER')
    }
}

function Display() {
    console.log('DISPLAY FACTORY')

    return function(args: Function) {
        console.log('RETURN DISPLAY')
    }
}

@Logger()
@Display()
class Setting {}

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