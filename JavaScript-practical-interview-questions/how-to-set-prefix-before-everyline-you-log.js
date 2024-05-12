/* Question: How to set prefix before everyline you log.? */

// Example 1
// const addPrefixBeforeEveryLine = (strToAddPrefix) => {
//   const prefixToAdd = "$ ";
//   const splittedStr = strToAddPrefix.split("\n");
//   const mappedListOfStr = splittedStr.map((str) => {
//     return prefixToAdd + str;
//   });
//   const finalList = mappedListOfStr.join("\n");
//   return finalList;
// };

// Example 2
const addPrefixBeforeEveryLine = (strToAddPrefix) => {
  const prefixToAdd = "$ ";

  return strToAddPrefix
    .split("\n")
    .map((str) => prefixToAdd + str)
    .join("\n");
};

const strToLog = addPrefixBeforeEveryLine(`my first line
my second line`);

console.log(strToLog);
