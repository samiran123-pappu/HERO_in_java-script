// Basic String Methods Demo

const greeting = "Hello World! 🌍";
const name = "Samiran";
const messyText = "   JavaScript is   awesome!   ";
const sentence = "The quick brown fox jumps over the lazy dog";
const csvData = "apple,banana,cherry,date";
const emojiText = "😊👍👨‍💻";

console.log("1. Original strings:");
console.log("greeting  →", greeting);
console.log("name      →", name);
console.log("messyText →", messyText);
console.log("");

// ────────────────────────────────────────────────
// Length & Character Access
// ────────────────────────────────────────────────
console.log("2. length");
console.log(greeting.length);                    // 13

console.log("\n3. charAt(), at(), [ ], codePointAt()");
console.log(greeting.charAt(1));                 // e
console.log(greeting.at(1));                     // e
console.log(greeting[1]);                        // e
console.log(greeting.codePointAt(7));            // 87 (code point of 'W')
console.log(greeting.at(-1));                    // 🌍 (modern & supports negative index)
console.log("");

// ────────────────────────────────────────────────
// Case conversion
// ────────────────────────────────────────────────
console.log("4. toUpperCase() & toLowerCase()");
console.log(name.toUpperCase());                 // SAMIRAN
console.log(name.toLowerCase());                 // samiran
console.log("");

// ────────────────────────────────────────────────
// Trimming
// ────────────────────────────────────────────────
console.log("5. trim(), trimStart(), trimEnd()");
console.log("[" + messyText.trim() + "]");           // [JavaScript is   awesome!]
console.log("[" + messyText.trimStart() + "]");      // [JavaScript is   awesome!   ]
console.log("[" + messyText.trimEnd() + "]");        // [   JavaScript is   awesome!]
console.log("");

// ────────────────────────────────────────────────
// Padding
// ────────────────────────────────────────────────
console.log("6. padStart() & padEnd()");
console.log("Year: " + "2025".padStart(6, "0"));     // Year: 002025
console.log("Score: " + "95".padEnd(5, "*"));        // Score: 95***
console.log("");

// ────────────────────────────────────────────────
// Repeating & Concatenation
// ────────────────────────────────────────────────
console.log("7. repeat() & concat()");
console.log("★".repeat(5));                          // ★★★★★
console.log(name.concat("!", " ", "Welcome!"));      // Samiran! Welcome!
console.log("");

// ────────────────────────────────────────────────
// Extracting parts
// ────────────────────────────────────────────────
console.log("8. slice(), substring(), substr() (substr is deprecated)");
console.log(sentence.slice(4, 9));                   // quick
console.log(sentence.substring(4, 9));               // quick
console.log(sentence.substr(4, 5));                  // quick (start, length)
console.log(sentence.slice(-8));                     // lazy dog (negative = from end)
console.log("");

// ────────────────────────────────────────────────
// Replacing
// ────────────────────────────────────────────────
console.log("9. replace() & replaceAll()");
console.log(sentence.replace("fox", "cat"));         // The quick brown cat jumps...
console.log("cool cool cool".replaceAll("cool", "great"));
// great great great
console.log("");

// ────────────────────────────────────────────────
// Splitting
// ────────────────────────────────────────────────
console.log("10. split()");
console.log(csvData.split(","));                     // ["apple", "banana", "cherry", "date"]
console.log(sentence.split(" ").length + " words");  // 9 words
console.log("a|b|c".split("|"));                     // ["a", "b", "c"]
console.log("");

// ────────────────────────────────────────────────
// Modern Unicode-related methods (ES2022+)
// ────────────────────────────────────────────────
console.log("11. isWellFormed() & toWellFormed()");
console.log("Hello".isWellFormed());                 // true
console.log("\uD800".isWellFormed());                // false (lonely surrogate)
console.log("\uD800".toWellFormed());                // � (replacement character)
console.log(emojiText.isWellFormed());               // true
console.log("");

// ────────────────────────────────────────────────
// Quick summary table (just printed)
console.log("Quick Reference:");
console.log("• .length              → number of code units");
console.log("• .at(index)          → modern, supports negative indices");
console.log("• .slice()            → flexible, supports negative indices");
console.log("• .substring()        → always clamps, no negatives");
console.log("• .replaceAll()       → replaces every occurrence");
console.log("• .trim()             → removes whitespace from both ends");
console.log("• .padStart/padEnd()  → great for formatting");
console.log("• .repeat()           → repeats string n times");