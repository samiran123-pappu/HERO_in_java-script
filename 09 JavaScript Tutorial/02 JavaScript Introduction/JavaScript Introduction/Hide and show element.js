const demo = document.getElementById("demo");
const btn = document.getElementById("btn");

if (demo && btn) {
  let visible = true;
  btn.textContent = "Toggle visibility";
  btn.onclick = function () {
    visible = !visible;
    demo.style.display = visible ? "block" : "none";
  };
}
