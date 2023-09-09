export class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }
    sayHello() {
        console.log(`hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}