const img = document.createElement("img");
img.id = "bulb";
img.alt = "bulb";
img.width = 100;
img.src = "https://www.w3schools.com/js/pic_bulboff.gif";
document.body.appendChild(img);

const btn = document.getElementById("btn");
if (btn) {
  btn.textContent = "Turn on light";
  btn.onclick = function () {
    img.src = "https://www.w3schools.com/js/pic_bulbon.gif";
  };
}
