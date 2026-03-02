const btn = document.getElementById("btn");
if (btn) {
  btn.textContent = "Run body script";
  btn.addEventListener("click", () => {
    const demo = document.getElementById("demo");
    if (demo) demo.textContent = "Paragraph changed from body script.";
  });
}
