const btn = document.getElementById("btn");
if (btn) {
  btn.textContent = "Show alert";
  btn.onclick = function () {
    alert(5 + 6);
  };
}
