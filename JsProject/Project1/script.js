const body = document.querySelector("body");
const btns = document.querySelectorAll(".button");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "grey":
        body.style.backgroundColor = e.target.id;
        break;
      case "white":
        body.style.backgroundColor = e.target.id;
        break;
      case "blue":
        body.style.backgroundColor = e.target.id;
        break;
      case "yellow":
        body.style.backgroundColor = e.target.id;
    }
  });
});
