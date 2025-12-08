/* 
Analyze the following code. Identify the bug and fix it. Then, below, explain what the bug was using scope terminology.

<Your analysis goes here>
The error was that a variable declared by const is block scoped which means it cant be used outside the if else that it was declared in.

*/
const calculateDiscount = (price) => {
  // if (price > 100) {
  //   const discountRate = 0.1;
  // } else {
  //   const discountRate = 0.05;
  // }
  let discountRate;
  if (price > 100) {
    discountRate = 0.1;
  } else {
    discountRate = 0.05;
  }

  const discount = price * discountRate;
  return price - discount;
}

console.log(calculateDiscount(150)); // This should print 135
