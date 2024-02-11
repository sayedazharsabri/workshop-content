function isTwoPassed() {
  //   return Array.from(arguments).indexOf(2) >= 0;

  if (Array.from(arguments).indexOf(2) >= 0) {
    console.log("Yes 2 is passed to this function");
  } else {
    console.log("No 2 is not passed to this function");
  }
}

isTwoPassed(2);
