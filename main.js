let loginBtn = document.getElementById("login-button");
let display = document.getElementById("display");
const getNumber = 0;
const specifiedValue = 140;

loginBtn.addEventListener("click", function() {
  let lDigit = Math.floor(Math.random() * Math.floor(20));
  let rDigit = Math.floor(Math.random() * Math.floor(21));
  if (lDigit > specifiedValue) {
    console.log(lDigit);
  }
  display.innerHTML = `LEFT:${lDigit} & RIGHT:${rDigit}`;
});

function tooHigh(n) {
  return n / 2;
}
function tooLow(n) {
  return n * 2;
}
