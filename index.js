let display = document.querySelector(".display");
let numbers = document.querySelectorAll("#num");
let numArr = Array.from(numbers);
let clear = document.querySelector(".clear");
let opp = document.getElementById("opp");
let del = document.getElementById("del");
let minus = document.getElementById("min");
let operations = document.querySelectorAll(".operation");
let operationsArr = Array.from(operations);
let equal = document.querySelector(".equal");
let period = document.getElementById("period");

let data = {
  operation: "",
  opSelected: false,
  num1: "",
  num2: "",
  lastTot: 0,
};

operationsArr.forEach((el) => {
  el.addEventListener("click", (e) => {
    data.num1 =
      data.lastTot === 0 || data.lastTot === "0"
        ? getDisplayVal()
        : data.lastTot;
    data.operation = el.textContent;
    display.textContent = "";
  });
});

function operate(operation, num1, num2) {
  switch (operation) {
    case "+":
      data.lastTot = addNums(num1, num2);
      break;
    case "-":
      data.lastTot = subNums(num1, num2);
      break;
    case "*":
      data.lastTot = multNums(num1, num2);
      break;
    case "/":
      data.lastTot = divNums(num1, num2);
      break;
  }
}

function addNums(num1, num2) {
  return num1 + num2;
}

function subNums(num1, num2) {
  return num1 - num2;
}

function multNums(num1, num2) {
  return num1 * num2;
}

function divNums(num1, num2) {
  return num1 / num2;
}

function equalFn() {
  if (getDisplayVal() === "") return;
  data.num2 = getDisplayVal();
  if (data.num2 === "") {
    console.log("cant divide by 0");
    return;
  }
  if (data.num1 === "") {
    data.num1 = 0;
  }
  operate(data.operation, parseFloat(data.num1), parseFloat(data.num2));
  populateDisplay(parseFloat(data.lastTot));
}

function getDisplayVal() {
  if (display.textContent === "0") return "";

  return display.textContent;
}
function populateDisplay(val) {
  display.textContent = val;
}

numArr.forEach((el) => {
  el.addEventListener("click", function (e) {
    let disVal = getDisplayVal();

    populateDisplay(
      disVal === 0 || disVal === "" ? el.textContent : disVal + el.textContent
    );
  });
});

clear.addEventListener("click", (e) => {
  display.innerHTML = 0;
  data.operation = "";
  data.num1 = 0;
  data.num2 = 0;
  data.lastTot = 0;
});

opp.addEventListener("click", (e) => {
  let value = parseFloat(getDisplayVal());
  data.lastTot = value < 0 ? value * -1 : value * -1;
  populateDisplay(data.lastTot);
});

del.addEventListener("click", (e) => {
  let val = getDisplayVal();

  data.lastTot =
    display.textContent === "" || display.textContent.length === 1
      ? "0"
      : val.slice(0, -1);
  populateDisplay(data.lastTot);
  console.table(data);
});
equal.addEventListener("click", (e) => {
  equalFn();
});

period.addEventListener("click", (e) => {
  if (getDisplayVal().includes(".")) return;
  if (getDisplayVal() === "") {
    populateDisplay(`0.`);
  } else {
    populateDisplay(getDisplayVal() + ".");
  }
});
