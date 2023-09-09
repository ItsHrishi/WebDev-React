// // arrow functions
// const multiply = (a,b) => {
//     return a * b;
// }

// console.log(multiply(4, 3));

// // or

// const add = (a, b) => a + b;

// console.log(add(5, 6));


// // object, this and arrow functions
// const person = {
//     name: "steve",
//     age: 30,
//     sayName: function () {
//         console.log(this.name);
//     },
//     sayAge: () => {
//         console.log(this.age);
//     }
// };

// person.sayAge();//undefined arrow functions dont bind their this value
// person.sayName();//'steve'


// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map(n => n * 2);
// console.log(doubled);

// Exporting a function =>
