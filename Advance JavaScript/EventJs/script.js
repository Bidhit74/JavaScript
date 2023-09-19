// document.getElementById("owl").onclick = function () {
//   alert("owl clicked");
// };
// Or -- Best Way
// document.getElementById("owl").addEventListener("click", function () {
//   alert("owl clicked again");
// });

// attachEvent()
// jQuery - on

// Most use Events
// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode

// document.getElementById("images").addEventListener(
//   "click",
//   function (e) {
//     console.log("clicked inside the ul");
//   },
//   false
// );

// document.getElementById("owl").addEventListener(
//   "click",
//   function (e) {
//     console.log("owl clicked");
//     e.stopPropagation();
//   },
//   false // default bubbling  // true capturing event
// );

// document.getElementById("google").addEventListener(
//   "click",
//   function (e) {
//     e.preventDefault();
//     e.stopPropagation();
//     console.log("google clicked");
//   },
//   false
// );

document.querySelector("#images").addEventListener("click", function (e) {
  console.log(e.target.tagName);
  console.log(e.target.parentNode);
  if (e.target.tagName === "IMG") {
    let removeIt = e.target.parentNode;
    removeIt.remove();
  }
});

// })

//removeIt.parentNode.removeChild(removeIt)
