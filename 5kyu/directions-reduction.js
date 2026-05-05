/*
Write a function dirReduc which will take an array of strings and returns an 
array of strings with the needless directions removed 
(W<->E or S<->N side by side).
*/

// my solution
function dirReduc(arr) {
  const opposites = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    WEST: "EAST",
    EAST: "WEST",
  };

  return arr.reduce((stack, dir) => {
    const lastDir = stack[stack.length - 1];

    if (lastDir === opposites[dir]) {
      stack.pop();
    } else {
      stack.push(dir);
    }
    return stack;
  }, []);
}

console.log(
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]),
);
