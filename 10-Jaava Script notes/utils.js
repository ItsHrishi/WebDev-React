// exporting multiple class and functions

export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

export class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }
    sayHello() {
        console.log(`hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}