/*
Given a number, say prod (for product), 
we search two Fibonacci numbers F(n) and F(n+1) 
*/

// my solution
function productFib(prod) {
  //generate FIB list
  let prev = 0;
  let curr = 1;

  while (true) {
    let temp = curr;

    if (curr * prev >= prod) {
      return [prev, curr, curr * prev === prod ? true : false];
    } else {
      curr += prev;
      prev = temp;
    }
  }
}

// pro solution
/*
function productFib(prod) {
  let [a, b] = [0, 1];
  while (a * b < prod) [a, b] = [b, a + b];
  return [a, b, a * b === prod];
}
*/

console.log(productFib(f));
