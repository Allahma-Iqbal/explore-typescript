const city: string = 'dhaka';
const fruits: string[] = ['mango', 'apple', 'banana'];


type Person = {
    name: string,
    age: number,
    salary: number,

}

const student: Person = {
    name: 'Kamal Ataturk',
    age: 115,
    salary: 24000
}

const employee: { name: string, age: number, salary: number } = {
    name: 'Solaiman',
    age: 29,
    salary: 100000
}

/* 
name? = this means it is an optional object;
*/

function getSalary(player: { name?: string, salary: number }): number {
    return player.salary;
}

getSalary({ name: 'kudus bhai', salary: 50 })


function getSalary2(player: Person): number {
    return player.salary;
}