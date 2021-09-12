/* const myNumber = 5;
const myName = 'Hridoy'
console.log('Hello From Typescript', myNumber, myName) */

/* 
let money = 500;
let koney = '';
let honey = false;
money = 50;
 */

let money: number = 5;
let honey: string = 'this is your honey';
let funny: boolean = false;

const age: number = 21;

/* function add(first: number, second: number): number {
    const result = first + second;
    return result;
}

const output: number = add(23, 39); 


*/
//////////////////////////////////////////////////////////////////////
/* 

// multi purpose
function add(first: number | string, second: number | string): number | string {
    const result: number | string = first + second;
    return result;
}

const output: number | string = add(23, 39);
const fullName = add('adam', 'Sandler'); 

*/

///////////////////////////////


function doubleConsole(number: number): void {
    console.log(2 * number);
}


