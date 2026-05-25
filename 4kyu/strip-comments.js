function solution(text, markers) {
  return text.split("\n").map((string) => {
    for (let i=0; i < string.length; i++) {
      if (markers.includes(string[i])){
        string.slice(0, i).trimEnd();
      }
    }
    return string
  }).join("\n").trim()
}

console.log(solution("aa / bb\ncc ^ dd\nee $ ff", ["/", "^", "$"])); // 'aa\ncc\/nee'
