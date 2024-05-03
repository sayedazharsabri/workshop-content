// How will you write a method on instance of a date, which will give you next date

// functiont o give next date
function getNextDate() {
  let date = this.getDate();
  return date + 1;
}

// Date instance
let myDateInstance = new Date();

// Attach function to date instance
myDateInstance.getNextDate = getNextDate;

const nextDate = myDateInstance.getNextDate();
console.log(`Next date is ${nextDate}`);
