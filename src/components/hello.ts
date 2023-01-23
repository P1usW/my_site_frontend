interface IUser {
    name: string,
    age: number,
    skills: Array<string>
}

interface IUser {
    getName(): string
}

class User<S extends string,A extends Array<string>,  N extends number> implements IUser {
    constructor(
       public name: S,
       public age: N,
       public skills: A,
    ) {}

    getName(): string {
        return `${this.name}`
    }
}

const Ivan = new User('Ivan', 23, ['1,2,3'])

// class User implements IUser {
//     constructor(
//        public name: string,
//        public age: number,
//        public skills: Array<string>,
//     ) {}
//
//     getName(): string {
//         return `${this.name}`
//     }
// }
//
// const Ivan = new User('Ivan', 23, ['1,2,3'])


// class User<S, N, A>{
//     constructor(
//        public name: S,
//        public age: N,
//        public skills: A,
//     ) {}
//
//     getName(): string {
//         return `${this.name}`
//     }
// }
//
// const Ivan = new User<string, number, Array<string>>('Ivan', 23, ['1,2,3'])


class Testing<A, B> {
    constructor(
        public a: A,
        public b: B
    ) {}
}
let tes = new Testing<string, number>('1',2)
