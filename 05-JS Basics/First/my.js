function BracketMatcher(str){
    var left=0;
    var right=0;
    for(var i=0; i<str.length; i++){
        if(str[i]==="("){
            left++;
        }
        else if(str[i]===")"){
            right++;
        }
    }
    if(right===left){
    return 1;
  }
    else{
      return 0;
    }
}


// function TripleDouble(num1,num2) {
//     var arr =num1.toString().split("");
//       var num =0;
//       for(var i=0; i<arr.length; i++){
//         if(arr[i]===arr[i+1] && arr[i]===arr[i+2]){
//           num = arr[i];
//           break;
//         }
//       }
//     var arr2 =num2.toString().split("");
//       for(var i=0; i<arr2.length; i++){
//         if(arr2[i]===arr2[i+1] && arr2[i]===num){
//           return 1;
//         }
//       }
//       return 0;
// }
    
// function DistinctList(arr){
//     var duplicates=0;
//     for(var i=0; i<arr.length; i++){
//         for(var j=0; j<arr.length; j++){
//             if(arr[i]===arr[j] && i!==j){
//                 duplicates++;
//                 arr.splice(arr.indexOf(arr[i]), 1)
//             }
//         }
//     }
//    for(var i=0; i<arr.length; i++){
//         for(var j=0; j<arr.length; j++){
//             if(arr[i]===arr[j] && i!==j){
//                 duplicates++;
//                 arr.splice(arr.indexOf(arr[i]), 1)
//             }
//         }
//     }
//     return duplicates;
// }

function OverlappingRectangles(strAzz) {
    function parseCoordinates(coordStr) {
      return coordStr
        .trim()
        .replace('(', '')
        .replace(')', '')
        .split(',')
        .map(Number);
    }
  
    const coords = strAzz
      .trim()
      .replace('[', '')
      .replace(']', '')
      .split('),(')
      .map(parseCoordinates);
  
    // Rectangle 1 coordinates
    const [x1, y1] = coords[0];
    const [x2, y2] = coords[1];
    const [x3, y3] = coords[2];
    const [x4, y4] = coords[3];
  
    // Rectangle 2 coordinates
    const [x5, y5] = coords[4];
    const [x6, y6] = coords[5];
    const [x7, y7] = coords[6];
    const [x8, y8] = coords[7];
  
    // Check if there is any overlap
    const xOverlap = Math.max(0, Math.min(x2, x8) - Math.max(x1, x5));
    const yOverlap = Math.max(0, Math.min(y2, y8) - Math.max(y1, y5));
  
    if (xOverlap === 0 || yOverlap === 0) {
      return 0;
    }
  
    // Calculate the area of the overlapping region
    const overlappingArea = xOverlap * yOverlap;
  
    // Calculate the area of the first rectangle
    const rect1Area = Math.abs((x2 - x1) * (y2 - y1));
  
    // Calculate the number of times the overlapping region can fit into the first rectangle
    const timesFit = Math.floor(rect1Area / overlappingArea);
  
    return timesFit;
  }
  
  // Test the function with the given example
  console.log(OverlappingRectangles("(0,0),(2,2),(2,0),(0,2),(1,0),(1,2),(6,0),(6,2)")); // Output: 2
  

// function Maxsubarray(arr) {
//     let currentSum = arr[0];
//     let maxSum = arr[0];
  
//     for (let i = 1; i < arr.length; i++) {
//       // Compare the current element with the sum of the current element and the previous subarray sum
//       currentSum = Math.max(arr[i], currentSum + arr[i]);
      
//       // Update the maximum sum if the current sum is greater
//       maxSum = Math.max(maxSum, currentSum);
//     }
  
//     return maxSum;
//   }
  
//   // Test the function with the given example
//   const arr = [-2, 5, -1, 7, -3];
//   console.log(Maxsubarray(arr)); // Output: 11
  