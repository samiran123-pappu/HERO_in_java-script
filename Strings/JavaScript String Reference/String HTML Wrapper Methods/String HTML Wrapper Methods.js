let text = "Important Message";

// ──────────────────────────────────────────────
// HTML wrapper methods (all deprecated)
// ──────────────────────────────────────────────

console.log("anchor('section1'):", text.anchor("section1"));
// <a name="section1">Important Message</a>

console.log("big():", text.big());
// <big>Important Message</big>

console.log("blink():", text.blink());
// <blink>Important Message</blink>    ← this actually blinked in very old browsers (Netscape era)

console.log("bold():", text.bold());
// <b>Important Message</b>            ← use <strong> or font-weight:bold in CSS today

console.log("fixed():", text.fixed());
// <tt>Important Message</tt>           ← monospace font (use CSS font-family: monospace)

console.log("fontcolor('red'):", text.fontcolor("red"));
// <font color="red">Important Message</font>    ← obsolete, use CSS color

console.log("fontcolor('#00ff00'):", text.fontcolor("#00ff00"));
// <font color="#00ff00">Important Message</font>

console.log("fontsize(7):", text.fontsize(7));
// <font size="7">Important Message</font>       ← 1–7 scale (very old)

console.log("fontsize('6'):", text.fontsize("6"));
// <font size="6">Important Message</font>

console.log("fontsize('+2'):", "Normal".fontsize("+2"));  
// <font size="+2">Normal</font>                  ← relative size (almost never used)

console.log("italics():", text.italics());
// <i>Important Message</i>               ← use <em> or font-style:italic

console.log("link('https://example.com'):", text.link("https://example.com"));
// <a href="https://example.com">Important Message</a>

console.log("small():", text.small());
// <small>Important Message</small>

console.log("strike():", text.strike());
// <strike>Important Message</strike>     ← use <s> or <del> or text-decoration:line-through

console.log("sub():", "H2O".sub());
// H<sub>2</sub>O

console.log("sup():", "x²".sup());
// x<sup>2</sup>

console.log("Combining a few:", 
  "Note:".bold().fontcolor("blue") + " " + 
  "2H₂ + O₂ → 2H₂O".sub().fontsize(4)
);
// <b><font color="blue">Note:</font></b> 2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O<font size="4"></font>