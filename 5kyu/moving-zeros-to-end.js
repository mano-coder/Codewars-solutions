/* Write an algorithm that takes an array and moves all of the zeros to the
 end, preserving the order of the other elements.*/

function moveZeros(arr) {
  const nonZeros = arr.filter((val) => val !== 0);
  const zeros = arr.filter((val) => val === 0);
  return [...nonZeros, ...zeros];
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
