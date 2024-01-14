// The Nullish Coalescing Operator (??)
// nullish coalescing ??
function printSomething(value) {
  printThis = value ?? "Not found";
  console.log("printThis is ", printThis);
}

let var1; //undefined
// let var1 = null;
printSomething(var1);

//
/* in case of ||
if left is falsy --> right
*/
