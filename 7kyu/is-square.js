// You have to check if your number is a perfect square.

//Solution

function isSquare(n) {
  if (n < 0) return false;
  if (n === 1 || n === 0) return true;
  const squareRoot = Math.sqrt(n);
  return Math.floor(squareRoot) === squareRoot ? true : false;
}

const randomNum = Math.floor((Math.random() + 1) * 10);
console.log(isSquare(15241578750190521));
