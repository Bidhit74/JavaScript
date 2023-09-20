const start = document.getElementById("start");
const stop = document.getElementById("stop");
const body = document.querySelector("body");
let intervalId;
const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

const colorChanger = () => {
  body.style.backgroundColor = randomColor();
};
start.addEventListener("click", (e) => {
  if (!intervalId) {
    intervalId = setInterval(colorChanger, 1000);
  }
});

stop.addEventListener("click", (e) => {
  clearInterval(intervalId);
  intervalId = null;
});
