// ==============================================
// 1. Original strings
// ==============================================
{
  const greeting = "Hello World! 🌍";
  const name = "Samiran";
  const messyText = "   JavaScript is   awesome!   ";

  console.log("1. Original strings:");
  console.log("greeting  →", greeting);
  console.log("name      →", name);
  console.log("messyText →", messyText);
  console.log("");
}

// ==============================================
// 2. Length & Character Access
// ==============================================
{
  const greeting = "Hello World! 🌍";

  console.log("2. length");
  console.log(greeting.length);

  console.log("\n3. charAt(), at(), [ ], codePointAt()");
  console.log(greeting.charAt(1));
  console.log(greeting.at(1));
  console.log(greeting[1]);
  console.log(greeting.codePointAt(7));
  console.log(greeting.at(-1));
  console.log("");
}

// ==============================================
// 3. Case Conversion
// ==============================================
{
  const name = "Samiran";

  console.log("4. toUpperCase() & toLowerCase()");
  console.log(name.toUpperCase());
  console.log(name.toLowerCase());
  console.log("");
}

// ==============================================
// 4. Trimming
// ==============================================
{
  const messyText = "   JavaScript is   awesome!   ";

  console.log("5. trim(), trimStart(), trimEnd()");
  console.log("[" + messyText.trim() + "]");
  console.log("[" + messyText.trimStart() + "]");
  console.log("[" + messyText.trimEnd() + "]");
  console.log("");
}

// ==============================================
// 5. Padding
// ==============================================
{
  const year = "2025";
  const score = "95";

  console.log("6. padStart() & padEnd()");
  console.log("Year: " + year.padStart(9, "$"));
  console.log("Score: " + score.padEnd(10, "&"));
  console.log("");
}

// ==============================================
// 6. Repeat & Concat
// ==============================================
{
  const name = "Samiran";

  console.log("7. repeat() & concat()");
  console.log("★".repeat(6));
  console.log(name.concat("!", " ", "Welcome!"));
  console.log("");
}

// ==============================================
// 7. Extracting Parts
// ==============================================
{
  const sentence = "The quick brown fox jumps over the lazy dog";

  console.log("8. slice(), substring(), substr()");
  console.log(sentence.slice(4, 9));
  console.log(sentence.substring(4, 9));
  console.log(sentence.substr(4, 5)); // start, length
  console.log(sentence.slice(-8));
  console.log("");
}

// ==============================================
// 8. Replacing
// ==============================================
{
  const sentence = "The quick brown fox jumps over the lazy dog";
  const text = "cool cool cool";

  console.log("9. replace() & replaceAll()");
  console.log(sentence.replace("fox", "cat"));
  console.log(text.replaceAll("cool", "great"));
  console.log("");
}

// ==============================================
// 9. Splitting
// ==============================================
{
  const csvData = "apple,banana,cherry,date";
  const sentence = "The quick brown fox jumps over the lazy dog";

  console.log("10. split()");
  console.log(csvData.split(","));
  console.log(sentence.split(" ").length + " words");
  console.log("a|b|c".split("|"));
  console.log("");
}

// ==============================================
// 10. Modern Unicode Methods
// ==============================================
{
  const emojiText = "😊👍👨‍💻";

  console.log("11. isWellFormed() & toWellFormed()");
  console.log("Hello".isWellFormed());
  console.log("\uD800".isWellFormed());
  console.log("\uD800".toWellFormed());
  console.log(emojiText.isWellFormed());
  console.log("");
}

// ==============================================
// 11. Quick Summary
// ==============================================
console.log("Quick Reference:");
console.log("• .length              → number of code units");
console.log("• .at(index)          → modern, supports negative indices");
console.log("• .slice()            → flexible, supports negative indices");
console.log("• .substring()        → clamps, no negatives");
console.log("• .replaceAll()       → replaces every occurrence");
console.log("• .trim()             → removes whitespace from both ends");
console.log("• .padStart/padEnd()  → useful for formatting");
console.log("• .repeat()           → repeats string n times");
