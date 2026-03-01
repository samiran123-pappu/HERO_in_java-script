const level = 1;

switch (level) {
  case 1:
    console.log("Level 1");
  case 2:
    console.log("Level 2 (fall-through)");
  default:
    console.log("Default (fall-through)");
}
