// Implement the function unique_in_order which takes as argument a sequence
// and returns a list of items without any elements with the same value next
// to each other and preserving the original order of elements.

// Solution:

function uniqueInOrder(str) {
  let arr = []
  if (str.length < 0) {
    console.log(arr)
    arr = str.split("");
  } else {
    arr = str;
  }
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(uniqueInOrder("AAAABBBCCDAABBB"));
console.log(uniqueInOrder("ABBCcAD"));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));


// Pro solution:
/*
  var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}
*/
