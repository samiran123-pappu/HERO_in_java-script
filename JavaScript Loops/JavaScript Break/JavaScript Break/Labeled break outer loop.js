loop1:
for (let j = 1; j < 5; j++) {
  for (let i = 1; i < 5; i++) {
    if (i === 3) break loop1;
    console.log("j", j, "i", i);
  }
}
