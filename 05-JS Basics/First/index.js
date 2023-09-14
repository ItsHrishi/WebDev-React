var a = 12;
// console.log(a);
var a = 11;
// console.log(a);


// objects :

let rectangle11 = {
    length: 1,
    breadth: 12,

    // methods
    // draw: function () {
    //     console.log("drawing rectangle");
    // }

    // or

    draw() {
        console.log("drawing rectangle");
    }
};

// console.log(rectangle);

// factory function

// function createRectangle(len,bred) {
    
//     return rectangle = {

//         length : len,
//         breadth: bred,
        
//         draw() {
//             console.log('happy');
//         }
//     };
// }


// let rectObj1 = createRectangle(6, 7);
// console.log(rectObj1);


// constructor funtion
    // pascal notation used
function Rectangle() {
    this.length = 1;
    this.breadth = 12;
    this.draw = function () {

        // console.log('hello, im dawing!!');
    }
}



let a1 = new Rectangle();

// add a property
a1.color = 'green';
// deleting a property
delete a1.color;


// internal working of Function :
let Fruit = new Function('c', 'n', 
`this.color = c,
this.name = n`);

let apple = new Fruit('red', 'apple');

// console.log(apple);

// for in loop

for (let key in a1) {
    // console.log(key, a1[key]);
}

// or for of loop

for (let key of Object.entries(a1)) {
    // console.log(key);
}

let src = {
    a: 10,
    b: 2,
    c: 3
};

let dest = {};

// iteration
// for (key in src) {
//     dest[key] = src[key];
// }

// assign

// dest = Object.assign({}, src);


// spread operator to copy 

dest = { ...src };

console.log(dest);
