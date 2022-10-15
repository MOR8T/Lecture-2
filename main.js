// // Comparison operator

// console.log(5==5)    // true
// console.log(5!=5)    // false
// console.log(5==="5") // false
// console.log(5!=="5") // true
// console.log(5>2)     // true
// console.log(5>=5)    // true
// console.log(5<10)    // true
// console.log(5<=5)    // true

// // logical operator

// // and &&
// console.log(true && true);   // true
// console.log(true && false);  // false
// console.log(false && true); // false
// console.log(false && false); // false

// // or ||
// console.log(true || true);   // true
// console.log(true || false);  // true
// console.log(false || true);  // true
// console.log(false || false); // false

// // not !
// console.log(!true);   // false
// console.log(!false);  // true

// // if / else

// // #1

// let a = 5;

// if(a < 6){
//     a = a+6;
// }
// console.log(a); // 11

// // #2

// let b = 7;

// if(b % 2 == 0){
//     console.log("Even");
// }
// else{
//     console.log("Odd");
// }
// // Odd

// // #3

// let c = 0;

// if(c < 0){
//     console.log(c+1);
// }
// else if(c < 0){
//     console.log(c-1);
// }
// else{
//     console.log(c);
// }
// // 0

// // switch

// let a = 8;

// for(let i=0; i<a; i++){
//     if(a < 10 && a>5){
//         break;
//         a = a*2;
//     }
// }
// console.log(a);

// // ternary

// let b = "chris" ? 100:999;
// console.log(b); // 100


// // for

// let a = 10;
// let b = 10;

// for(let i=1; i<=b; i++){
//     a = a + a;
// }
// console.log(a); // 10240

// // while

// let num = 5;
// let num2 = 3
// let i = 1;
// while(i <= num){
//     console.log(num2);
//     i++;
// }
// // 3 3 3 3 3

// // break

// let num = 5;
// let i = 1;
// while(i <= num){
//     if(i == 3){ break;}
//     console.log(i);
//     i++;
// }
// // 1 2 

for(let i=0; i<10; i++){
    if(i % 2 != 0){continue;}

    console.log(i);
}
// 0 2 4 6 8

