/*
Write a function, persistence, that takes in a positive parameter num and 
returns its multiplicative persistence, which is the number of times you must 
multiply the digits in num until you reach a single digit.
*/

// my solution
function persistence(num) {
  if (num <= 9) return 0;
  let count = 0;
  while (num > 9) {
    const digits = Array.from(String(num), Number);
    num = digits.reduce((acc, dig) => {
      num = dig * acc;
      return num;
    });
    count++;
  }
  return count;
}

console.log(persistence(4));

// pro solution
function persistence(num) {
   for (var i = 0; num > 9; i++) {
     num = num.toString().split('').reduce((t, c) => c * t);
   }
   return i;
}
