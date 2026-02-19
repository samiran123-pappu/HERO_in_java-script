// ==============================================
// 1. Common string checks
// ==============================================
{
  const str = "Hello Samiran! Welcome to 2026.";

  if (str.includes("Samiran")) {
    console.log("Name found in string");
  }

  if (str.startsWith("Hello")) {
    console.log("String starts with Hello");
  }

  if (str.endsWith("2026.")) {
    console.log("String ends with 2026.");
  }
}


// ==============================================
// 2. Find position of a word
// ==============================================
{
  const str = "Hello Samiran! Welcome to 2026.";

  const position = str.indexOf("Samiran");
  console.log("Position of 'Samiran':", position); // 6
}


// ==============================================
// 3. Extract domain from email
// ==============================================
{
  const email = "hello@company.co.in";

  const domain = email.match(/@([\w.-]+)/)?.[1];
  console.log("Domain:", domain); // company.co.in
}


// ==============================================
// 4. Get all hashtags from a post
// ==============================================
{
  const post = "Loving #JS #ECMAScript #2026";

  const tags = [...post.matchAll(/#(\w+)/g)].map(m => m[1]);

  console.log("Hashtags:", tags);
  // ["JS", "ECMAScript", "2026"]
}
