//1 Array Matching
// let arr =  [1,2,3,4];
// let [a,b] = arr;
// console.log("First element a: ",a);
// console.log("Second element b: ",b);
// [b,a] = [a,b];
// console.log("arr is :",arr);
// console.log("First element a: ",a);
// console.log("Second element b: ",b);



//2 Object Matching, Shorthand Notation
// function getStudent(){
//     let student = {
//         sname:"Azhar",
//         age:"31",
//         level: "MCA"
//     }

//     return student;
// }

// let {sname, age} = getStudent();

// console.log(sname, age);


// 3 Object Matching, Deep Matching

// function getData(){
//     let obj = {
//         ename:"Amit",
//         salary: 100000,
//         location:{
//             city: "Bangalore"
//         }
//     }
//     return obj;
// }

// let {ename: employeeName, salary: employeeSalary, location: {city:employeeCity}} =  getData();

// console.log("Ename: ", employeeName, ", Salary: ", employeeSalary, ", Location: ",employeeCity);