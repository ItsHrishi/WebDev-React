// function declaration
function write() {
    console.log('this is a sentence');
}

// invoke function
write();

// function assignment
// let a = function read() {
//     console.log('I am reading')
// }
// a();

// anonymous function assignment
// let a1 = function () {
//     console.log('this is a anonymous function assignment');
// }
// a1();


// accesing arguments in a function
// function sum(a, b) {
//     console.log(arguments);
//     return a + b;
// }
// let b = sum(2, 3);
// console.log(b);


// creating a dynamic function
// function sum() {
//     let total = 0;
//     for (let val of arguments) {
//         total = total + val;
//     }
//     return total;
// }
// console.log(sum(1));
// console.log(sum(1, 2, 3, 4, 1, 112, 1, 1));


// rest parameter
// function examp(...arg) {
//     console.log(arg);
// }
// examp(1, 2, 3, 'hsjsn',21, 'akms');



let person = {
    fName: 'Hermonie',
    lName: 'Granger',
    get fullName() {
        return `${this.fName} ${this.lName}`;
    },
    set fullName(val) {
        parts = val.split(' ');
        if (typeof val != String) {
            throw new Error("Not a string");
        }
        this.fName = parts[0];
        this.lName = parts[1];
    }
};



// function fullName() {
//     return `${person.fName} ${person.lName}`;
// }
// console.log(fullName());


// try {
//     person.fullName = true;
// }
// catch (e) {
//     alert(e);
    
// }

a = [1, 2, 3, 4, 1, 2, , 3];

// reduce

let totalSum = a.reduce((accumulator, currValue) => accumulator + currValue, 0);
console.log(totalSum);
