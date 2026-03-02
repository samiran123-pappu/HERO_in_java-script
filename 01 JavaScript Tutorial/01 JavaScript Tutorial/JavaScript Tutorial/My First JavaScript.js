const btn = document.getElementById("btn");
const demo = document.getElementById("demo");

if (btn && demo) {
  btn.textContent = "Click me to show Date and Time";
  btn.addEventListener("click", () => {
    demo.textContent = new Date().toString();
  });
}
