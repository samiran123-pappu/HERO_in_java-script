let output = "";

outerLoop:
for (let j = 1; j <= 3; j++) {
  for (let i = 1; i <= 5; i++) {
    if (i === 3) {
      break outerLoop;
    }
    output += `${j}:${i} `;
  }
}

console.log(output.trim());
