// Print from 1-255
// for(var x=0;x<=255;x++){
//   console.log(x);
// }
// // Assignment: Odd Numbers
// // Write a program that would print all the odd numbers from 1 to 1000
// for(var x=0;x<=1000;x++){
//   if(x%2 ==1){
//     console.log(x);
//   }
// }
// Write a program that would print the sum of all the odd numbers from 1 to 5000
// var sum = 0;
// for(var x=1;x<5000;x++){
//   if(x%2==1){       // check the odds
//     sum += x     // sum = sum + x
//   }
// }
// console.log(sum);
// Iterating through the array
// var x = [1,3,5,7,9,13];
// for (var i=0;i<x.length;i++){
//   console.log(x[i]);
// }

// Find Max
// var arr=[-3, 3, 5, 7,10,1000000,-10000];
// var max= -3;
// for (var x=0;x<arr.length;x++){
//     if(arr[x] > max){                    //if(3 > -3)    => if(arr[0] > max)
//         max = arr[x];                    // max = arr[1] => max = 3
//     }
// }
// console.log (max)

// // Find average
// var arr = [1,3,5,7,20];
// var sum = 0;
// for (var x=0;x<arr.length;x++){
//     sum = sum + arr[x];
// }
// console.log(sum/arr.length);

// Assignment: Array With Odd Numbers
// Write a program that creates an array 'Y' that contains all the odd numbers between 1 to 255. When the program is done, 'y'
// should have the value of [1, 3, 5, 7, ... 255]. You are allowed to use .push method)
// var y = [];
// for (var x=0;x<=256;x++){
//   if(x%2==1){
//     y.push(x);
//   }
//   console.log(y);
// }

function greaterThanY(y){
    var arr = [1,3,5,7];
    var newarr =[]
    var count = 0;
    for(var x=0;x<arr.length;x++){
        if(arr[x] > y){
          count++;
        }
    }
    console.log(count);
}
greaterThanY(6);
