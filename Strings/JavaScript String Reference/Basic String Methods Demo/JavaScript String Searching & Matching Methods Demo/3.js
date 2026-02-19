// JavaScript String Searching & Matching Methods Demo

const phrase = "The quick brown fox jumps over the lazy fox again";
const email  = "contact@samiran.dev";
const text   = "I love JavaScript and JavaScript is awesome";
const messy  = "  hello   world  hello  ";

console.log("Original strings:");
console.log("phrase →", phrase);
console.log("email  →", email);
console.log("text   →", text);
console.log("messy  →", JSON.stringify(messy)); // shows spaces clearly
console.log("messy  →", `${messy}`); // shows spaces clearly

console.log("");

// ────────────────────────────────────────────────
// indexOf() / lastIndexOf()
// ────────────────────────────────────────────────
console.log("1. indexOf() & lastIndexOf()");

console.log(phrase.indexOf("fox"));          // 16  (first occurrence)
console.log(phrase.lastIndexOf("fox"));      // 40  (last occurrence)

console.log(phrase.indexOf("cat"));          // -1  (not found)
console.log(phrase.lastIndexOf("cat"));      // -1

console.log(phrase.indexOf("fox", 20));      // 40  (start searching from index 20)
console.log(phrase.lastIndexOf("fox", 30));  // 16  (search backwards from index 30)

console.log(email.indexOf("@"));             // 7
console.log("");

// ────────────────────────────────────────────────
// includes() / startsWith() / endsWith()
// ────────────────────────────────────────────────
console.log("2. includes(), startsWith(), endsWith()");

console.log(phrase.includes("quick"));       // true
console.log(phrase.includes("Quick"));       // false (case-sensitive)
console.log(phrase.includes("fox", 30));     // true (starts searching from index 30)

console.log(email.startsWith("contact"));    // true
console.log(email.startsWith("samiran"));    // false
console.log(email.startsWith("@", 7));       // true

console.log(email.endsWith(".dev"));         // true
console.log(email.endsWith(".com"));         // false
console.log(email.endsWith("@", 8));         // true (checks up to position 8)

console.log("");

// ────────────────────────────────────────────────
// search()  → returns index or -1 (supports regex)
// ────────────────────────────────────────────────
console.log("3. search()");

console.log(phrase.search("fox"));           // 16  (same as indexOf for string)
console.log(phrase.search(/fox/i));          // 16  (case-insensitive)
console.log(phrase.search(/\d/));            // -1  (no digits)
console.log(email.search(/@[\w-]+\./));      // 7   (looks for @ followed by domain + dot)
console.log("");

// ────────────────────────────────────────────────
// match()  → returns match object or null (with capturing groups)
// ────────────────────────────────────────────────
console.log("4. match()");

console.log(email.match(/@([\w-]+)\.(\w+)/));
// → ["@samiran.dev", "samiran", "dev"]   (full match + groups)

console.log(phrase.match(/fox/g));           // null  (without g → only first match object)
console.log(phrase.match(/fox/gi));          // ["fox", "fox"]  (with g → array of matches)

console.log(text.match(/\b\w{4}\b/g));       // words with exactly 4 letters
// → ["quick", "brown", "jumps", "over", "lazy", "again"]

console.log("");

// ────────────────────────────────────────────────
// matchAll()  → returns iterator of all matches with details (ES2020+)
// ────────────────────────────────────────────────
console.log("5. matchAll()  (best for detailed regex matches)");

const matches = text.matchAll(/script/gi);

for (const match of matches) {
  console.log({
    match: match[0],
    index: match.index,
    input: match.input.substring(match.index, match.index + 30) + "..."
  });
}
// Example output:
// { match: "Script", index: 7,  input: "JavaScript and..." }
// { match: "Script", index: 22, input: "JavaScript is..." }

console.log("\nmatchAll with capturing groups:");
const urlMatches = "Visit https://x.ai and https://grok.x.ai".matchAll(/https?:\/\/([\w.-]+)/g);

for (const m of urlMatches) {
  console.log(m[0], "→ domain:", m[1]);
}
// https://x.ai → domain: x.ai
// https://grok.x.ai → domain: grok.x.ai

console.log("");

// ────────────────────────────────────────────────
// Quick comparison table (printed)
console.log("Quick Comparison:");

console.table([
  { Method       : "indexOf"     , Returns      : "number (index) or -1", Regex : "No"  , AllOccurrences : "No"  },
  { Method       : "lastIndexOf" , Returns      : "number (index) or -1", Regex : "No"  , AllOccurrences : "No"  },
  { Method       : "search"      , Returns      : "number (index) or -1", Regex : "Yes", AllOccurrences : "No"  },
  { Method       : "includes"    , Returns      : "true/false"           , Regex : "No"  , AllOccurrences : "No"  },
  { Method       : "startsWith"  , Returns      : "true/false"           , Regex : "No"  , AllOccurrences : "No"  },
  { Method       : "endsWith"    , Returns      : "true/false"           , Regex : "No"  , AllOccurrences : "No"  },
  { Method       : "match"       , Returns      : "object / array / null", Regex : "Yes", AllOccurrences : "With g" },
  { Method       : "matchAll"    , Returns      : "iterator of match objs", Regex : "Yes", AllOccurrences : "Always" }
]);