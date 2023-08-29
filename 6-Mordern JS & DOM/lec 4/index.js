// function sync() {
//     console.log('first');
// }
// // sync();

// // console.log('second');


// setTimeout(sync, 5000);
// // or
// setTimeout(function () {
//     console.log('just another try');
// },3000);


// promise

// let myPromise = new Promise(function (resolve, reject) {
    
//     setTimeout(function () {
//         console.log('I am inside promise ');

//     }, 5000);
//     // resolve(2233);
//     reject(new Error('There is error'));
// });


// async function -> returns a promise

// async function abcd() {
//     return 'hrishi';//promise fulfilled
// }
// let a = abcd();
// console.log(a);

// example 2

// async function utility() {
    
//     let delhiWeather = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('The weather is hot in delhi')
//         }, 5000);
//     });

//     let mumbaiWeather = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('The weather is cold in mumbai')
//         }, 7000);
//     });

//     let dM =  delhiWeather;
//     let mM = await mumbaiWeather;

//     return [dM, mM];
// }

// let ab = utility();
 
// fetch api -> jsonplace holder get call

// async function utility() {
//     let content = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let output = await content.json();
//     console.log(output);
//     let txt = content.text;
//     console.log(txt);
// }
// utility();


// fetch api post call

async function helper(){
    options = {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    };
    
    let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
    
    let response = content.json();
    
    return response;

}
async function utility() {
    let ans = await helper();
    console.log(ans);
} 
utility();