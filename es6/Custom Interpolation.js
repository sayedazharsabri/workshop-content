//Custom Interpolation

function something(string, name, age){
    console.log("STRING", string)
    console.log("NAME", name)
    console.log("AGE", age)
}


let sname = "Azhar";
let age = 30;
// something("Student's name is ' ' and age is ' '", sname, age)

something`Student's name is ${sname} and age is ${age}`;