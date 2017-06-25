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
var sum = 0;
for(var x=1;x<5000;x++){
  if(x%2==1){       // check the odds
    sum += x     // sum = sum + x
  }
}
console.log(sum);
