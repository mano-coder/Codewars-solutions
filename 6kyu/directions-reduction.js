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
