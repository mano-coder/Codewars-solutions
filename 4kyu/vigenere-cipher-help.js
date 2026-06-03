class VigenèreCipher {
  constructor(key, abc) {
    this.key = key;
    this.abc = abc;
  }

  encode(str) {
    let result = "";
    for (const [i, char] of [...str].entries()) {
      if (this.abc.indexOf(char) === -1) {
        result += char;
        continue;
      }
      result +=
        this.abc[
          (this.abc.indexOf(char) +
            this.abc.indexOf(this.key[i % this.key.length])) %
            this.abc.length
        ];
    }
    return result;
  }

  decode(str) {
    let result = "";
    for (const [i, char] of [...str].entries()) {
      if (this.abc.indexOf(char) === -1) {
        result += char;
        continue;
      }
      result +=
        this.abc[
          (this.abc.indexOf(char) -
            this.abc.indexOf(this.key[i % this.key.length]) +
            this.abc.length) %
            this.abc.length 
        ];
    }
    return result;
  }
}

const foo = new VigenèreCipher("password", "abcdefghijklmnopqrstuvwxyz");

const input = "hollywood";
const encode = foo.encode(input);

console.log(foo.encode(input));
console.log(foo.decode(encode));
