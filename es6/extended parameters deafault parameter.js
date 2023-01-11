//Extended Parameter Handling

//1 Default Parameter Values

function addTwoNumbers(n1, n2=0){
    return n1 + n2;
}

let sum1 = addTwoNumbers(1,2);
console.log("Sum = ", sum1);//3

let sum2 = addTwoNumbers(2);
console.log("Sum = ", sum2);
// Without default paramet -> Sum =  NaN
// With default paramet -> 
