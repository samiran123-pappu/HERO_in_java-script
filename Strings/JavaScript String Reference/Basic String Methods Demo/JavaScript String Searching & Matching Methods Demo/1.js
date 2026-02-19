// ==============================================
// 1. indexOf() & lastIndexOf()
// ==============================================
{
  console.log("1. indexOf() & lastIndexOf():");
  console.log("")
  const phrase = "The quick brown fox jumps over the lazy fox again";
  const email  = "contact@samiran.dev";

  console.log("indexOf('fox'):", phrase.indexOf("fox"));
  console.log("lastIndexOf('fox'):", phrase.lastIndexOf("fox"));
  console.log("length:", phrase.length);

  console.log("indexOf('cat'):", phrase.indexOf("cat"));
  console.log("lastIndexOf('cat'):", phrase.lastIndexOf("cat"));

  console.log("indexOf('fox', 20):", phrase.indexOf("fox", 20));
  console.log("lastIndexOf('fox', 30):", phrase.lastIndexOf("fox", 30));

  console.log("email indexOf('@'):", email.indexOf("@"));
}


// ==============================================
// 2. includes(), startsWith(), endsWith()
// ==============================================
{
    console.log("\n2. includes(), startsWith(), endsWith():");
  const phrase = "The quick brown fox jumps over the lazy fox again";
  const email  = "contact@samiran.dev";

  console.log("includes('quick'):", phrase.includes("quick"));
  console.log("includes('Quick'):", phrase.includes("Quick"));
  console.log("includes('fox', 30):", phrase.includes("fox", 30));

  console.log("startsWith('samiran'):", email.startsWith("samiran"));
  console.log("startsWith('@', 7):", email.startsWith("@", 7));

  console.log("endsWith('.dev'):", email.endsWith(".dev"));
  console.log("endsWith('.com'):", email.endsWith(".com"));
  console.log("endsWith('@', 8):", email.endsWith("@", 8));
}


// ==============================================
// 3. search()  → regex supported
// ==============================================
{
    console.log("\n3. search() with regex:");
  const phrase = "The quick brown fox jumps over the lazy fox again";
  const email  = "contact@samiran.dev";

  console.log("search('fox'):", phrase.search("fox"));
  console.log("search(/fox/i):", phrase.search(/fox/i));
  console.log("search(/\\d/):", phrase.search(/\d/));
  console.log("email.search domain:", email.search(/@[\w-]+\./));
}


// ==============================================
// 4. match()
// ==============================================
{
    console.log("\n4. match() with regex:");
  const phrase = "The quick brown fox jumps over the lazy fox again";
  const email  = "contact@samiran.dev";
  const text   = "I love JavaScript and JavaScript is awesome";

  console.log("email match:", email.match(/@([\w-]+)\.(\w+)/));

  console.log("phrase.match(/fox/):", phrase.match(/fox/));
  console.log("phrase.match(/fox/gi):", phrase.match(/fox/gi));

  console.log("4-letter words:", text.match(/\b\w{4}\b/g));
}


// ==============================================
// 5. matchAll()  → detailed iterator
// ==============================================
{
    console.log("\n5. matchAll()  → detailed iterator:");
  const text = "I love JavaScript and JavaScript is awesome";

  console.log("matchAll(/script/gi):");

  const matches = text.matchAll(/script/gi);
  for (const match of matches) {
    console.log({
      match: match[0],
      index: match.index,
      preview: match.input.substring(match.index, match.index + 30) + "..."
    });
  }

  console.log("\nmatchAll with URLs:");

  const urlMatches =
    "Visit https://x.ai and https://grok.x.ai"
      .matchAll(/https?:\/\/([\w.-]+)/g);

  for (const m of urlMatches) {
    console.log(m[0], "→ domain:", m[1]);
  }
}


// ==============================================
// 6. Quick comparison table
// ==============================================
{
  console.log("\n6. Quick comparison table:");  
  console.table([
    { Method: "indexOf",     Returns: "number or -1",        Regex: "No",  All: "No" },
    { Method: "lastIndexOf", Returns: "number or -1",        Regex: "No",  All: "No" },
    { Method: "search",      Returns: "number or -1",        Regex: "Yes", All: "No" },
    { Method: "includes",    Returns: "true / false",        Regex: "No",  All: "No" },
    { Method: "startsWith",  Returns: "true / false",        Regex: "No",  All: "No" },
    { Method: "endsWith",    Returns: "true / false",        Regex: "No",  All: "No" },
    { Method: "match",       Returns: "object/array/null",   Regex: "Yes", All: "With g" },
    { Method: "matchAll",    Returns: "iterator of objects", Regex: "Yes", All: "Always" }
  ]);
}
