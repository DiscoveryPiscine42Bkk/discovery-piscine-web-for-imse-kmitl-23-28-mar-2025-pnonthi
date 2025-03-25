const balloon = document.getElementById("balloon");

let size = 200;
const maxSize = 420;
const minSize = 200;
const colors = ["red", "green", "blue"];
let colorIndex = 0;

balloon.addEventListener("click", () => {
    size += 10;
    if (size > maxSize) {
        size = minSize;
    } else {
        colorIndex = (colorIndex + 1) % colors.length;
    }
    updateBalloon();
});

balloon.addEventListener("mouseleave", () => {
    size = Math.max(minSize, size - 5);
    colorIndex = (colorIndex - 1 + colors.length) % colors.length;
    updateBalloon();
});

function updateBalloon() {
    balloon.style.width = size + "px";
    balloon.style.height = size + "px";
    balloon.style.backgroundColor = colors[colorIndex];
}