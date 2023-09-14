// exercise 1

// prob 1
// function sum(num1, num2) {
//     return num1 + num2;
// }

// console.log(sum(23, 34));

// prob 2
// function strLen(str) {
//     return str.length;
// }

// console.log(strLen('Happy'));

// prob 3
// const num1 = Number(21);
// const num2 = Number(23);

// console.log("Sum : " + (num1 + num2));
// console.log("Product : " + (num1 * num2));
// console.log("Difference : " + (num1 - num2));
// console.log("Quotient : " + (num1 / num2));


// prob 4
// function largestNum(num1, num2) {
//     if (num1 > num2) {
//         return num1;
//     }
//     else if (num2 > num1) {
//         return num2;
//     }
//     else {
//         return "both are equal!!";
//     }
// }

// let num1 = 27;
// let num2 = 27;

// console.log("The largest nuber is : " + largestNum(num1, num2));


// prob 5
// function revStr(str) {
//     let rStr = str.split('').reverse().join("");
//     return rStr;
// }

// let str = "happy";

// console.log("the reverse strinh is : " + revStr(str));

// prob 6
// function checkNum(num) {
//     if (num > 0) {
//         return ('Positive Number');
//     }
//     else if (num < 0) {
//         return ('Negative Number');
//     }
//     else {
//         return ('zero');
//     }
// }

// let num = 0;
// console.log('The number is : ' + checkNum(num));

// prob 7
// function mulTable(num) {
//     console.log("Multiplication table for number : " + num);
//     for (let i = 1; i <= 10; i++){
//         console.log(num + ' X ' + i + ' = ' + num * i);
//     }
// }
// mulTable(21);

// prob 8
// function sumTillNum(num) {
//     let ans = 0;
//     for (let i = 0; i <= num; i++){
//         ans += i;
//     }
//     return ans;
// }

// console.log("The sum of numbers : "+sumTillNum(21));

// prob 8
// function numOfVowels(str) {
//     let v = ['a', 'e', 'i', 'o', 'u'];
//     let strChar = str.split('');
//     count = 0;
    
//     for (i in strChar) {
        
//         for (j in v) {
//             if (strChar[i] === v[j]) {
//                 // console.log(v[j]);
//                 count++;

//             }
//         }
//     }
//     console.log(count);
// }

// or

// function vowelsCount(str) {
//     let v = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;

//     for (i = 0; i < str.length; i++)
//     {
//         if (v.includes(str[i].toLowerCase())) {
//             count++;
//         }
//     }
//     return count;
// }

// let str = 'hrishikesh';
// console.log('The vowels in the sring are : ');
// console.log(vowelsCount(str));



// prob 10
// arr1 = [1, 2, 3, 4, 5];
// arr2 = [3, 4, 5, 6];
// comEle = [];
// for (i of arr1) {
//     for (j of arr2) {
//         if (i === j) {
//             comEle.push(i);
//             console.log(i);
//         }
//     }
// }
// console.log(comEle);


