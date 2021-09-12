interface Player {
    name: string,
    club: string,
    salary: number,
    wife?: string,
    previousClubs?: string[]
}

const messi: Player = {
    name: 'L Messi',
    club: 'Abhani',
    salary: 12000,
    wife: 'Nosimon ara begum'

}

const hannan: Player = {
    name: 'A.Hannan ',
    club: 'Kolabagan',
    salary: 2000,

}

interface Employee {
    name: string,
    designation: string,
    salary: number,
    age: number
}

interface Developer extends Employee {
    language: string,
    codeEditor: string,
    typingSpeed: number

}


const zuku: Developer = {
    language: 'js',
    codeEditor: 'VS code',
    typingSpeed: 65,
    name: 'zukuarBurg',
    designation: 'CEO',
    age: 53,
    salary: 100000000000000

}