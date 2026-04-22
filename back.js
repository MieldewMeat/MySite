const lupa = document.querySelector(".lupa");

let dragging = false;

let x, y;

lupa.addEventListener("mousedown", (e) => {
  dragging = true;
  lupa.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
  if (!dragging) return;


});

document.addEventListener("mouseup", () => {
  dragging = false;
  lupa.style.cursor = "grab";
});