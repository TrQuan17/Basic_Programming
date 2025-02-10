function Logger(log: string) {
    console.log(log)

    return function(args: Function) {
        console.log(args.toString())
    }
}

@Logger('LOG - SETTING')
class Setting {
    constructor(
        private id?: string,
        private theme?: 'LIGHT' | 'DARK',
        private language?: string,
        private background?: string
    ) {}

    set setLanguage(lang: string) {
        this.language = lang
    }
}

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