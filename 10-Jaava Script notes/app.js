// example 1
// import { add } from './math.js';

// example 2
// import { Person } from './person.js';

// example 3
import { add, sub, Person } from './utils.js';

// example 4
import sayHello from './greet.js';

sayHello('rahul');


const result = add(2, 3);
console.log(result);


const result1 = sub(2, 3);
console.log(result1);


const john = new Person('john', 30);
john.sayHello();

