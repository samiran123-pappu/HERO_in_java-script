loop1:
for (let j = 1; j < 3; j++) {
  loop2:
  for (let i = 1; i < 5; i++) {
    if (i === 3) continue loop2;
    console.log("j", j, "i", i);
  }
}
