class History {
    static instance(id: string, log: string, type: string) {

    }
    
    private constructor(
        private id: string,
        private log: string,
        private type: string
    ) {}
}

// const updateHistory = new History()

export {}