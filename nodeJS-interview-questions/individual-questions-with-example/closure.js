const generatePowerFunction = (power) => {
  return (number) => {
    return number ** power;
  };
};

const square = generatePowerFunction(2);
const cube = generatePowerFunction(3);
const quad = generatePowerFunction(4);

console.log(square(3));
console.log(cube(3));
console.log(quad(3));
