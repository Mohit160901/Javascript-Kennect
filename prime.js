const number = 11;
let isPrime = true;
if (number === 1) {
  console.log("neither prime nor composite number.");
} else if (number < 1) {
  console.log("The number is not a prime number.");
} else {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    n1 = number + 1;
    nxprime = 0;

    while (true) {
      fg = true;
      for (let i = 2; i < n1; i++) {
        if (n1 % i == 0) {
          fg = false;
          break;
        }
      }
      if (fg) {
        nxprime = n1;
        break;
      }
      n1 = n1 + 1;
    }
    console.log(number + " " + "Is a prime number");
    console.log(
      nxprime +
        " " +
        "is next Prime of " +
        " " +
        number +
        " " +
        "difference between both number is " +
        (nxprime - number)
    );
  } else {
    console.log(number + " " + "is a not prime number");
  }
}
