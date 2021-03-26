let display = document.querySelector(".display");
let numbers = document.querySelectorAll("#num");
let numArr = Array.from(numbers);
let clear = document.querySelector(".clear");
let opp = document.getElementById("opp");
let del = document.getElementById("del");

function getDisplayVal() {
  if (parseInt(display.textContent) === 0) return "";
  else {
    return display.textContent;
  }
}

numArr.forEach((el) => {
  el.addEventListener("click", function (e) {
    let disVal = getDisplayVal();
    display.innerHTML = disVal + el.textContent;
  });
});

clear.addEventListener("click", (e) => {
  display.innerHTML = 0;
});

opp.addEventListener("click", (e) => {
  let value = parseInt(getDisplayVal());
  console.log(value);
  display.textContent = value < 0 ? value * -1 : value * -1;
});

del.addEventListener("click", (e) => {
  let val = getDisplayVal();
  console.log(val);
  display.textContent =
    display.textContent === "" || display.textContent.length === 1
      ? 0
      : val.slice(0, -1);
});
