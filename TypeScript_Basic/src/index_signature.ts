interface ErrorHandle {
    id: string
    [prop: string]: string
    
}

const errorHandle: ErrorHandle = {
    id: '1',
    mail: 'Incorrect mail format!',
    username: 'Username is required!',
}

// interface Seasion {
//     [prop: 'Summer' | 'Winner']: string
// }
