import "./styles.css";

let isDrag = false;
let color = "";
const canvas = document.querySelector("#draw-area");
const context = canvas.getContext("2d");

canvas.addEventListener("mousemove", event => {
  draw(event.layerX, event.layerY);
});

canvas.addEventListener("touchmove", event => {
  draw(event.layerX, event.layerY);
});

canvas.addEventListener("mousedown", () => {
  context.beginPath();
  isDrag = true;
});

window.addEventListener("mouseup", () => {
  context.closePath();
  isDrag = false;
});

canvas.addEventListener("touchstart", () => {
  context.beginPath();
  isDrag = true;
});

canvas.addEventListener("touchend", () => {
  context.closePath();
  isDrag = false;
});

function draw(x, y) {
  if (!isDrag) {
    return;
  }
  context.strokeStyle = color;
  context.lineWidth = 10;
  context.lineTo(x, y);
  context.stroke();
}

const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
});

const eraser = document.querySelector("#clear-eraser");
eraser.addEventListener("click", () => {
  color = "white";
});

const pen = document.querySelector("#draw-pen");
pen.addEventListener("click", () => {
  setRGB();
});

// ペンの色変更

const r_range = document.querySelector("#r");
const g_range = document.querySelector("#g");
const b_range = document.querySelector("#b");

r_range.addEventListener("change", () => {
  setRGB();
});
g_range.addEventListener("change", () => {
  setRGB();
});
b_range.addEventListener("change", () => {
  setRGB();
});

function setRGB() {
  let r = document.getElementById("r").value;
  let g = document.getElementById("g").value;
  let b = document.getElementById("b").value;
  color = "#" + hex(r) + hex(g) + hex(b);
  const result = document.querySelector("#color-check-area");
  result.style.backgroundColor = color;
}

function hex(v) {
  v = parseInt(v, 10);
  let hex = v.toString(16);
  if (v < 16) {
    hex = "0" + hex;
  }
  return hex;
}

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
