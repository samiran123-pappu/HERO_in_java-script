// ==============================================
// 1. Properties
// ==============================================
{
  const str = "Hello World! こんにちは 世界 🌍";

  console.log("length:", str.length);
  console.log("constructor:", str.constructor === String);
}


// ==============================================
// 2. Character access
// ==============================================
{
  const str = "Hello World! こんにちは 世界 🌍";

  console.log("at(0):", str.at(0));
  console.log("at(-1):", str.at(-1));
  console.log("charAt(6):", str.charAt(6));
  console.log("charAt(999):", str.charAt(999));

  console.log("charCodeAt(0):", str.charCodeAt(0));
  console.log("charCodeAt(13):", str.charCodeAt(13));
  console.log("codePointAt(13):", str.codePointAt(13));
  console.log("codePointAt(28):", str.codePointAt(28));
}


// ==============================================
// 3. Searching & checking
// ==============================================
{
  const str = "Hello World! こんにちは 世界 🌍";

  console.log("includes('World'):", str.includes("World"));
  console.log("includes('world'):", str.includes("world"));
  console.log("includes('🌍'):", str.includes("🌍"));

  console.log("startsWith('Hello'):", str.startsWith("Hello"));
  console.log("startsWith('hello'):", str.startsWith("hello"));
  console.log("endsWith('世界 🌍'):", str.endsWith("世界 🌍"));
  console.log("endsWith('🌍'):", str.endsWith("🌍"));

  console.log("indexOf('o'):", str.indexOf("o"));
  console.log("indexOf('o', 5):", str.indexOf("o", 5));
  console.log("lastIndexOf('o'):", str.lastIndexOf("o"));

  console.log("search(/world/i):", str.search(/world/i));
  console.log("search('xyz'):", str.search("xyz"));
}


// ==============================================
// 4. Extracting parts
// ==============================================
{
  const str = "Hello World! こんにちは 世界 🌍";

  console.log("slice(6,11):", str.slice(6, 11));
  console.log("slice(-4):", str.slice(-4));
  console.log("substring(6,11):", str.substring(6, 11));
  console.log("substr(6,5):", str.substr(6, 5)); // deprecated

  console.log("split(' '):", str.split(" "));
  console.log(
    "split('').slice(0,7).join(''):",
    str.split("").slice(0, 7).join("")
  );
}


// ==============================================
// 5. Case conversion
// ==============================================
{
  const str = "hello world";

  console.log("toLowerCase():", str.toLowerCase());
  console.log("toUpperCase():", str.toUpperCase());
  console.log("toLocaleLowerCase('tr'):", "I".toLocaleLowerCase("tr"));
}


// ==============================================
// 6. Padding & trimming
// ==============================================
{
  const spaced = "   spaces   ";

  console.log("padStart(20,'★'):", "JS".padStart(20, "★"));
  console.log("padEnd(15,'.'):", "2025".padEnd(15, "."));

  console.log("trim():", `"${spaced.trim()}"`);
  console.log("trimStart():", `"${spaced.trimStart()}"`);
  console.log("trimEnd():", `"${spaced.trimEnd()}"`);
}


// ==============================================
// 7. Repeating & concat
// ==============================================
{
  const emoji = "😊🐱‍🚀";

  console.log("repeat(3):", "🔥".repeat(3));
  console.log("concat():", "Hi ".concat("there", " ", emoji));
}


// ==============================================
// 8. Replace family
// ==============================================
{
  const str = "Hello World! こんにちは 世界 🌍";
  const template = "User: {name}, Age: {age}";

  console.log("replace('o','0'):", str.replace("o", "0"));
  console.log("replace(/o/gi,'0'):", str.replace(/o/gi, "0"));
  console.log("replaceAll('l','L'):", str.replaceAll("l", "L"));

  console.log(
    template.replaceAll(/{(\w+)}/g, (_, key) =>
      key === "name" ? "Sam" : "28"
    )
  );
}


// ==============================================
// 9. Match family
// ==============================================
{
  const str = "Hello World! こんにちは 世界 🌍😊🐱‍🚀";

  console.log("match(/\\p{Emoji}/gu):", str.match(/\p{Emoji}/gu));

  const matches = str.matchAll(/[\u{1F300}-\u{1F5FF}]/gu);
  for (const m of matches) {
    console.log("Emoji found:", m[0], "at", m.index);
  }
}


// ==============================================
// 10. Unicode safety
// ==============================================
{
  const bad = "A\uD800";

  console.log("isWellFormed():", bad.isWellFormed());
  console.log("toWellFormed():", bad.toWellFormed());
}


// ==============================================
// 11. localeCompare (sorting)
// ==============================================
{
  console.log("'ä' vs 'z' (default):", "ä".localeCompare("z"));
  console.log("'ä' vs 'z' (sv):", "ä".localeCompare("z", "sv"));
}


// ==============================================
// 12. Static & legacy helpers
// ==============================================
{
  const str = "Hello";

  console.log("fromCharCode:", String.fromCharCode(72, 101, 108, 108, 111));
  console.log(
    "fromCodePoint:",
    String.fromCodePoint(0x1F60A, 0x1F431, 0x200D, 0x1F680)
  );

  console.log("toString():", str.toString() === str);
  console.log("valueOf():", str.valueOf() === str);
}
