const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [...arr1, 7, 8, 9];

console.log(arr2);

// spread operator can also be used to spread an array into function arguments :
function add(a, b, c) {
    return a + b + c;
    
}

const numbers = [1, 2, 3];

console.log(add(...numbers));


// rest operator 
function sum(...numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++){
        result += numbers[i];
    }
    return result;
}

console.log(sum(1, 2, 3, 4, 4, 5));
console.log(sum(11, 32, 13, 34));


const [first, ...rest1] = [1111, 2, 3, 4, 5, 6];

console.log(first);
console.log(rest1);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4};
const obj3 = { ...obj1, ...obj2 };

console.log(obj3);


