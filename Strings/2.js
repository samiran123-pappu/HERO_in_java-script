const str = "  Hello World!  ";

console.log(
  str.trim().toUpperCase(),                    // HELLO WORLD!
  str.trim().slice(0, 5),                      // Hello
  str.includes("World"),                       // true
  str.replace("World", "Universe"),            //   Hello Universe!  
  str.split(" ").join("-"),                    // --Hello-World!--
  "Page".padStart(10, "0"),                    // 00000Page
  "★".repeat(3)                                // ★★★
);