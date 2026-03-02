loop1:
for (let j = 1; j < 4; j++) {
  for (let i = 1; i < 4; i++) {
    if (i === 2) continue loop1;
    console.log("j", j, "i", i);
  }
}
