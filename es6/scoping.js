// Scoping
//     Block-Scoped Variables

//Example 1
// console.log(a);//ReferenceError: Cannot access 'a' before initialization
// let a = 8;

//Example 2
// {
//     var n = 5;
//     let x = 7;
//     const y = 9;
// }

// console.log(n);
// console.log(x);//ReferenceError: x is not defined
// console.log(y);//eferenceError: y is not defined

    // Block-Scoped Functions
'use strict'
// function one(){
//     return 1;
// } 
// console.log(one());

// scope 0

{//scope1
    function one(){
        return 2;
    }

    console.log(one())
    
}
console.log(one());//ReferenceError: one is not defined