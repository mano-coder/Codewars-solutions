function towerBuilder(nFloors, nBlockSz) {
  // build here
  const blockBuilder = (width, height) => {
    const block = [];
    for (let i = 0; i <= height; i++) {
      block.push("*".repeat(width));
    }
    return block;
  };
  const [w, h] = nBlockSz;
  return blockBuilder(w, h);
}

console.log(towerBuilder(1, [1, 2]));
