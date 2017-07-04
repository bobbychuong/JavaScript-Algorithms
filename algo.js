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

// function greaterThanY(y){
//     var arr = [1,3,5,7];
//     var count = 0;
//     for(var x=0;x<arr.length;x++){
//         if(arr[x] > y){
//           count++;
//         }
//     }
//     console.log(count);
// }
// greaterThanY(1);

// Given an Array [1,5,10,-2]
// Algo that squares each value in the array.
// Ex. [1,25,100,4]
// Cannot use pre-built build function
// Ex. x[i] = x[i] * x[i]

// Given an Array [1,5,10,-2]
// Algo that squares each value in the array.
// Ex. [1,25,100,4]
// Cannot use pre-built build function
// Ex. x[i] = x[i] * x[i]

// Given an Array [1,5,10,-2]
// Algo that squares each value in the array.
// Ex. [1,25,100,4]
// Cannot use pre-built build function
// Ex. x[i] = x[i] * x[i]

// var arr = [1,5,10,-2,4,8,3];
// for(var i=0;i<arr.length;i++){      // for(var i=3;3<arr.length;3++)
//     arr[i] = arr[i] * arr[i];
//                                     //arr[3] = -2 * -2           ==> arr[3] = 4
// }
//  console.log(arr);


//console.log()            ==> 1,25,100, 4
// Eliminate Negative Numbers
// Given an array x = [1,5,10-2]
// Algo that replaces negative numbers with the value of 0
// x should have no negative numbers ex. [1,5,10,0]

// var arr = [1, 5, 10, -2,-4,-100];
// for (var x = 0; x<arr.length; x++)
// {
//   if (arr[x] < 0){            // if(arr[0] < 0)  ==> if(1 < 0 )
//       arr[x] = arr[x] - arr[x];             // arr[0] == 0
//   }
// }
// console.log(arr);

// Max, Min, Average
// array x = [1,5,10,-2]
// arr = [1,5,10,-2];
// var max = arr[0];
// var min = arr[0];
// var sum = 0;
//
// for(var i=0;i<arr.length;i++){      //for(var i=2;2<arr.length;2++)
//   sum = sum + arr[i];
//
//   if(arr[i] > max){
//     max = arr[i];
//   }
//   if(arr[i] < min){
//     min = arr[i];
//   }
//   var avg = sum/arr.length;
// }
// console.log("max is ", max);
// console.log("min is ", min);
// console.log("sum is", sum);
// console.log("average is", avg);

// var arr = [1,5,10,7,-2];
// for(var i=0;i<arr.length;i++){
//   arr.shift();
//   arr.push(0);
//   console.log(arr);
// }

// Swapping two values
// var arr = [2,3,5,7,6];
// var first = arr[0];
// var last = arr[arr.length - 1];
// arr[0] = arr[arr.length - 1]
// arr[arr.length - 1] = first
// console.log(arr);

// Reversing
// x = [3,5,1,3,2,10];
// var temp = x[0];
// var temp1 = x[1];
// var temp2 = x[2];
// x[0] = x[x.length-1];
// x[x.length-1] = temp;
//
// x[1] = x[4];            // x[1] = 2
// x[4] =temp1;            // x[4] = 5
// x[2] = x[3];            // x[2] = 3
// x[3] = temp2;           // x[3] = 1
// console.log(x);

// Reversing 2
// var x = [-3,5,1,3,2,10];
// for(var i=0;i<3;i++){               // for(var i=0)
//   var temp = x[i];                  // temp = x[i]
//   x[i] = x[x.length-1-i];           // x[i] = x[x.length-1-i]
//   x[x.length-1-i] = temp            // x[x.length-1-i] = temp
// }
// console.log(x);

// Assignment: Random Array
// Create an array X and fill the array with 10 values, each value being a random integer between 0 to 100.  For example when your program is done, X could be something like this: [35, 15, 3, 39, 53, 93, 25, 39, 59, 21].

var arr = [];
for(var i=0;i<11;i++){
    var random_int = Math.floor(Math.random()*101);
    arr.push(random_int);
}
// console.log(Math.floor(random));
console.log(arr);
