const str = "Hello Samiran! Welcome to 2026.";

// Very common checks
if (str.includes("Samiran")) { ... }
if (str.startsWith("Hello")) { ... }
if (str.endsWith("2026.")) { ... }

// Find position
const at = str.indexOf("Samiran");           // 6

// Extract domain from email
const email = "hello@company.co.in";
const domain = email.match(/@([\w.-]+)/)?.[1];   // "company.co.in"

// Get all hashtags
const post = "Loving #JS #ECMAScript #2026";
const tags = [...post.matchAll(/#(\w+)/g)].map(m => m[1]);
// → ["JS", "ECMAScript", "2026"]