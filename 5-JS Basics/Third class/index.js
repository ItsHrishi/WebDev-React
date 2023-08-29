// generates a random num
let a = Math.random();
// console.log(a);

a = Math.round(1.5);
// console.log(a);

a = Math.min(1.5, 1, 2, 3, 1, 2,0);
// console.log(a);

a = Math.max(1.5, 1, 2, 3, 1, 2,0);
// console.log(a);

// absolute value

a = Math.abs(0);
// console.log(a);


let lastName = 'hrishi'; //->string

let lName = new String('Hrishi'); //->object


// array ->

let numbers = [1, 2, 3, 4];
numbers.push(9); //end add
numbers.unshift(8); //begining add

numbers.splice(2, 0, 'a', 'b', 'c');
// console.log(numbers);

// console.log(numbers.includes(2, 3));
// console.log(numbers.indexOf(10, 4));
// console.log(numbers.includes(10, 3));


// searching in object/references
let objs = [
    { no: 1, name: 'Hrishi' },
    {no: 2, name : 'Hermione'}
]

// console.log(objs);

let obj = objs.find(function (obj) {
    return obj.name === 'Hrishi';
});

// by using arrow function

let obj1 = objs.find(obj1 => obj1.name === 'Hermione');

// console.log(obj1);


// removing elements from array

let num = [1, 2, 3, 4, 5];
let num1 = num;

// not a proper way to remove ->

// num = [];

// instead  use -> two methode

// method 1 : mostly used
num.length = 0;

// method 2 :
// num.splice(0, num.length);

// console.log(num);
// console.log(num1);

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7];

// let comb = arr1.concat(arr2);
// console.log(comb);

// let sliced = comb.slice(2, 6);

// let sliced1 = comb.slice();

// console.log(sliced1)

// combining and slicing objects

let objs1 = [
    { no: 3, name: 'Rohit' },
    { no: 4, name: 'Ramu' },
    { no: 5, name: 'Ramu' }
];


let comb1 = objs.concat(objs1);

// console.log(comb1);

let sl1 = comb1.slice(1, 4);
// console.log(sl1);

// ***  combining and slicing objects using slice opetrator and we can add elements and create copy ***

// console.log(arr1);
// console.log(arr2);

// let comb2 = [...arr1, ...arr2,23,true];
// console.log(comb2);

//  ***  iterating objs  ***

// for of loop
// for (let value of arr1) {
//     console.log(value);
// }


// for each loop
// arr1.forEach(function (value) {
//     console.log(value);
// });

// same thing in arrow function
// arr1.forEach(value => console.log(value));


// joining array into string =>
const joined = arr1.join(',');
// console.log(joined);


// spliting a string
let message = 'This is a message';
let parts = message.split(' ');
console.log(parts);


// joining a string
let join = parts.join('_');
console.log(join);


// sorting array
let num111 = [10,30,40,1,2,111,50];
// num111.sort();
num111.sort((a,b)=>a-b); //returning true or false if positive
// num111.reverse();
// console.log(num111);


// filter ans array
// let ans = num111.filter(function (value) {
//     return value >= 30;
// })
// console.log(ans);


// filter with arrow function
let ans = num111.filter(a => a >= 30);
// console.log(ans);


// Mapping map function
// let ans1 = num111.map(function (value) {
//     return 'student_no ' + value;
// });
// mapping arraw function
let ans1 = num111.map(value => 'student_no ' + value);
// console.log(ans1);


// mapping with objects
let a1 = [1, 2, -9, -6, 22, -121];
let filtered = a1.filter(value => value >= 0);
// console.log(filtered);
let i1 = filtered.map(num => ({ value: num }));


// same can be done by chaining
let i2 = a1
    .filter(value => value >= 0)
    .map(num => ({ value: num }));
console.log(i2);














