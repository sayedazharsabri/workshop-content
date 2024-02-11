function printName() {
  console.log(`${this.firstName} ${this.lastName}`);
}

const student1 = {
  firstName: "code",
  lastName: "heart",
};

// printName.call(student1);
// printName.apply(student1);
const callItLaster = printName.bind(student1);

callItLaster();

// Video Link: https://youtu.be/6FRu1LETI5Q
