function solution(text, markers) {
  return text
    .split("\n")
    .map(line => {
      const markerIndex = markers.length
        ? Math.min(...markers.map(m => {
            const i = line.indexOf(m);
            return i === -1 ? Infinity : i;
          }).filter(i => i !== Infinity), Infinity)
        : Infinity;

      const trimmed = markerIndex === Infinity
        ? line
        : line.slice(0, markerIndex);

      return trimmed.trimEnd();
    })
    .join("\n");
}


console.log(solution("aa / bb\ncc ^ dd\nee $ ff", ["/", "^", "$"])); // 'aa\ncc\/nee'
console.log(solution("aa bb\n#cc dd", ["#"])); 
console.log(solution("#aa bb\n!cc dd", ["#", "!"])); 
