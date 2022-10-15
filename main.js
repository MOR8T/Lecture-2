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

// if / else

// #1

let a = 5;

if(a < 6){
    a = a+6;
}
console.log(a); // 11

// #2

let b = 7;

if(b % 2 == 0){
    console.log("Even");
}
else{
    console.log("Odd");
}
// Odd

// #3

let c = 0;

if(c < 0){
    console.log(c+1);
}
else if(c < 0){
    console.log(c-1);
}
else{
    console.log(c);
}
// 0

