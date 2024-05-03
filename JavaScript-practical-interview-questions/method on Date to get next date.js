// How will you write a method on Date, which will give you next date

// functiont o give next date
function getNextDate() {
  let date = this.getDate();
  return date + 1;
}

// Date instance
let myDateInstance = new Date();

// Attach function to date instance
Date.prototype.getNextDate = getNextDate;

const nextDate = myDateInstance.getNextDate();
console.log(`Next date is ${nextDate}`);

let myDateInstance1 = new Date();

const nextDate1 = myDateInstance1.getNextDate();
console.log(`Next date is ${nextDate1}`);
