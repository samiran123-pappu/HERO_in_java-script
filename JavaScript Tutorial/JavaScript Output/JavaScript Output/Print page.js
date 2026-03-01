const btn = document.getElementById("btn");
if (btn) {
  btn.textContent = "Print this page";
  btn.onclick = function () {
    window.print();
  };
}
