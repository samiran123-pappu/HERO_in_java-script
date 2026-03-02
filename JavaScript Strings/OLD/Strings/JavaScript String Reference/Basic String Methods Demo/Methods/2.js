const str = "  Hello World!  ";

console.log(
  str.trim().toUpperCase(),
  str.trim().slice(0,5),
  str.includes("H"),
  str.replace("World", "Universe"),            
  str.split(" ").join("-"),                    
  "Page".padStart(10, "0"),                    
  "★".repeat(3)                                
);