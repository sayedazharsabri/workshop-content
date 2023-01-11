// 1 Example
// const xyz = () => {
//     console.log("XYZ",this);
// }

// --> consturctor XXX
// --> argument xxxx
// --> new.target XXX
// console.log("Here",this);
// xyz();


// 2 Expression Bodies

// 2 - Example 1
// let arr = [1,2,3,4];
// const arrmap = arr.map(function(element){
//     return element * 2;
// })
    //OR
// const arrmap = arr.map(element => element * 2)

// console.log(arrmap);

// 2 - Example 2
// const retObj = (uname, age) => ({uname: uname, age:age})
// console.log(retObj("Alex", 30));

// 2 - Example 3
// const addTwoNumber = (num1, num2) => num1+num2;
// console.log(addTwoNumber(2,4)); 


//3 Statement Bodies
// Example 1

// let arr = [1,2,3,4,5];
// arr.forEach((e)=>{
//     console.log(e," ");
// })

