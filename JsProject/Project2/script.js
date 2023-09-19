const form1 = document.querySelector("form");
// this use case will give you empty
// const height = parseInt(document.querySelector('#height').value)

form1.addEventListener("submit", (e) => {
  e.preventDefault();

  let height = parseInt(document.querySelector("#height").value);
  let weight = parseInt(document.querySelector("#weight").value);
  let results = document.querySelector("#results");
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    let cal = (weight / ((height / 100) * (height / 100))).toFixed(2);
    if (cal < 18.6) {
      results.innerHTML = `Under Weight ${cal}`;
    } else if (18.6 < cal && cal < 24.9) {
      results.innerHTML = `Normal Weight ${cal}`;
    } else {
      results.innerHTML = `Over Weight ${cal}`;
    }
  }
});
