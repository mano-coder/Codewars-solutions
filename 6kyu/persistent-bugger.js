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
