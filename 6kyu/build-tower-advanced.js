// My solution

function towerBuilder(nFloors, nBlockSz) {
  const [w, h] = nBlockSz;
  let block = [];
const blockBuilder = (width, height, arr) => {
  const strLen = w * (2 * nFloors - 1);
  for (let i = 0; i < height; i++) {
    arr.push(
      " ".repeat((strLen - width) / 2) +
        "*".repeat(width) +
        " ".repeat((strLen - width) / 2)
    );
  }
};
  let a = 1;
  for (let i = 0; i < nFloors; i++) {
    blockBuilder(w * a, h, block);
    a += 2;
  }
  return block
}

console.log(towerBuilder(3, [2, 3]));
