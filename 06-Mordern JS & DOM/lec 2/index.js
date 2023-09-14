const content = document.querySelector('#wrapper');

content.addEventListener('click', function (hrishi) {

    console.log(hrishi);
    
});


//prevent default function (not working properly!! on live server run on console)

// getting all links in a website
// let aL = document.querySelectorAll('a');

// //getting third link
// let tL = aL[2];

// tL.addEventListener('click', function (event) {
//     event.preventDefault();
//     console.log('done!!');
// });
    
// let myDiv = document.createElement('div');

// function paraStatus(event) {
//     console.log('para ' + event.target.textContent);
// }

// myDiv.addEventListener('click',paraStatus );

// for (let i = 0; i <= 100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'this is new para ' + i;

    
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

let element = document.querySelector('#wrapper');

element.addEventListener('click', function (event) {
    // if (event.target.nodeName === 'SPAN') {
    //     console.log('span pr click kiya he' + event.target.textContent);
    // }

    console.log('spanpr cclick kiya he ' + event.target.textContent);
});


