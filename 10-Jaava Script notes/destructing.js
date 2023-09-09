
// destruvting arrays
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
// console.log(a);
// console.log(b);
// console.log(c);

// destructing nested arrays

const num1 = [1, [2, 3]];
const [x, [y, z]] = num1;
// console.log(x);
// console.log(y);
// console.log(z);

const num2 = [1];
const [d = 0, e = 0] = num2; //if num not defined assign 0 d=1, e=0
console.log(d);
console.log(e);

// destructing objects 
const person = { name: 'john', age: '30' };

const { name, age } = person;
console.log(name);
console.log(age);

const { name:personName, age:personAge } = person;
console.log(personName);
console.log(personAge);

