// Sample string we'll reuse
let str = "Hello World! こんにちは 世界 🌍";
let str2 = "hello world";
let str3 = "   spaces   ";
let emoji = "😊🐱‍🚀";

// ──────────────────────────────────────────────
// Properties
// ──────────────────────────────────────────────

console.log("length:", str.length);
// length: 30

console.log("constructor:", str.constructor === String);
// constructor: true

// ──────────────────────────────────────────────
// Character access
// ──────────────────────────────────────────────

console.log("at(0):", str.at(0));          // at(0): H
console.log("at(-1):", str.at(-1));        // at(-1): 🌍
console.log("charAt(6):", str.charAt(6));  // charAt(6): W
console.log("charAt(999):", str.charAt(999)); // charAt(999): "" (empty string)

console.log("charCodeAt(0):", str.charCodeAt(0));   // charCodeAt(0): 72     (H)
console.log("charCodeAt(13):", str.charCodeAt(13)); // charCodeAt(13): 12354  (こ)
console.log("codePointAt(13):", str.codePointAt(13)); // codePointAt(13): 12354
console.log("codePointAt(28):", str.codePointAt(28)); // codePointAt(28): 128509  (🌍)

// ──────────────────────────────────────────────
// Searching & checking
// ──────────────────────────────────────────────

console.log("includes('World'):", str.includes("World"));     // true
console.log("includes('world'):", str.includes("world"));     // false
console.log("includes('🌍'):",    str.includes("🌍"));        // true

console.log("startsWith('Hello'):",   str.startsWith("Hello"));   // true
console.log("startsWith('hello'):",   str.startsWith("hello"));   // false
console.log("endsWith('世界 🌍'):",    str.endsWith("世界 🌍"));    // true
console.log("endsWith('🌍'):",        str.endsWith("🌍"));        // true

console.log("indexOf('o'):",     str.indexOf("o"));      // 4
console.log("indexOf('o', 5):",  str.indexOf("o", 5));   // 7
console.log("lastIndexOf('o'):", str.lastIndexOf("o"));  // 7

console.log("search(/world/i):", str.search(/world/i));   // 6     (case-insensitive)
console.log("search('xyz'):",    str.search("xyz"));      // -1

// ──────────────────────────────────────────────
// Extracting parts
// ──────────────────────────────────────────────

console.log("slice(6,11):",     str.slice(6,11));      // World
console.log("slice(-4):",       str.slice(-4));        // 世界 🌍
console.log("substring(6,11):", str.substring(6,11));  // World
console.log("substr(6,5):",     str.substr(6,5));      // World   (old, avoid)

console.log("split(' '):",       str.split(" "));      
// → ["Hello", "World!", "こんにちは", "世界", "🌍"]

console.log("split('').slice(0,7).join(''):", str.split('').slice(0,7).join(''));
// → Hello W

// ──────────────────────────────────────────────
// Case conversion
// ──────────────────────────────────────────────

console.log("toLowerCase():",     str2.toLowerCase());     // hello world
console.log("toUpperCase():",     str2.toUpperCase());     // HELLO WORLD
console.log("toLocaleLowerCase('tr'):", "I".toLocaleLowerCase("tr")); // ı  (Turkish dotless i)

// ──────────────────────────────────────────────
// Padding & trimming
// ──────────────────────────────────────────────

console.log("padStart(20,'★'):", "JS".padStart(20, "★"));
// ★★★★★★★★JS

console.log("padEnd(15,'.'):", "2025".padEnd(15, "."));
// 2025...........

console.log("trim():",      `"${str3.trim()}"`);       // "spaces"
console.log("trimStart():", `"${str3.trimStart()}"`);  // "spaces   "
console.log("trimEnd():",   `"${str3.trimEnd()}"`);    // "   spaces"

// ──────────────────────────────────────────────
// Repeating & joining
// ──────────────────────────────────────────────

console.log("repeat(3):", "🔥".repeat(3));          // 🔥🔥🔥
console.log("concat():",  "Hi ".concat("there", " ", emoji));
// Hi there 😊🐱‍🚀

// ──────────────────────────────────────────────
// Replace family
// ──────────────────────────────────────────────

console.log("replace('o','0'):",       str.replace("o","0"));
// Hell0 World! こんにちは 世界 🌍

console.log("replace(/o/gi,'0'):",     str.replace(/o/gi,"0"));
// Hell0 W0rld! こんにちは 世界 🌍

console.log("replaceAll('l','L'):",    str.replaceAll("l","L"));
// HeLLo WorLd! こんにちは 世界 🌍

let template = "User: {name}, Age: {age}";
console.log(template.replaceAll(/{(\w+)}/g, (_, key) => key === "name" ? "Sam" : "28"));
// User: Sam, Age: 28

// ──────────────────────────────────────────────
// Match family
// ──────────────────────────────────────────────

console.log("match(/\\p{Emoji}/gu):", str.match(/\p{Emoji}/gu));
// ["🌍", "😊", "🐱‍🚀"]   (depending on your string)

let matches = str.matchAll(/[\u{1F300}-\u{1F5FF}]/gu);
for (const m of matches) {
  console.log("Emoji found:", m[0], "at", m.index);
}
// (shows each emoji with position)

// ──────────────────────────────────────────────
// Unicode safety (2023+)
// ──────────────────────────────────────────────

let bad = "A\uD800"; // lone surrogate
console.log("isWellFormed():",    bad.isWellFormed());     // false
console.log("toWellFormed():",    bad.toWellFormed());     // "A�"

// ──────────────────────────────────────────────
// localeCompare (sorting)
// ──────────────────────────────────────────────

console.log("'ä' vs 'z' (default):",  "ä".localeCompare("z"));          // 1   (ä > z in many locales)
console.log("'ä' vs 'z' (sv):",       "ä".localeCompare("z", "sv"));    // -1  (ä before z in Swedish)

// ──────────────────────────────────────────────
// Old / less used / for completeness
// ──────────────────────────────────────────────

console.log("fromCharCode:", String.fromCharCode(72, 101, 108, 108, 111)); // Hello
console.log("fromCodePoint:", String.fromCodePoint(0x1F60A, 0x1F431, 0x200D, 0x1F680)); // 😊🐱‍🚀

console.log("toString():",    str.toString() === str);      // true
console.log("valueOf():",     str.valueOf() === str);       // true




// at(), includes(), startsWith(), endsWith()
// slice(), substring()
// trim(), trimStart(), trimEnd()
// padStart(), padEnd()
// replaceAll()
// matchAll()
// toWellFormed() + isWellFormed()
// codePointAt() / fromCodePoint() for emojis & astral planes