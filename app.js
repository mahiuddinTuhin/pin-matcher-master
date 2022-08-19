document
  .getElementById("btn-generate-pin")
  .addEventListener("click", function () {
    const randomNumber = () => {
      let number = Math.round(Math.random() * 10000);
      let numberString = number + "";
      if (numberString.length < 4) {
        return randomNumber();
      } else {
        return number;
      }
    };
    const random = randomNumber();
    document.getElementById("display-random-number").value = random;
  });

document
  .getElementById("calculator")
  .addEventListener("click", function (event) {
    const digit = event.target.innerHTML;
    let display = document.getElementById("calculator-display");
    let displayedNumber = display.value;
    const digitInt = parseInt(digit);
    if (isNaN(digitInt) === false) {
      displayedNumber += digit;
    } else if (digit === "C") {
      displayedNumber = "";
    } else if (digit === "&lt;") {
      displayedNumber = displayedNumber.slice(0, -1);
    }
    display.value = displayedNumber;
  });

let displayNotMatch = document.getElementById("value-not-match");
displayNotMatch.style.display = "none";
let displayMatch = document.getElementById("value-match");
displayMatch.style.display = "none";

document.getElementById("submit-btn").addEventListener("click", function () {
  let display = document.getElementById("calculator-display").value;
  let random = document.getElementById("display-random-number").value;
  if (display === random) {
    displayNotMatch.style.display = "none";
    displayMatch.style.display = "inline-block";
  } else if (display !== random) {
    displayNotMatch.style.display = "block";
    displayMatch.style.display = "none";
  }
});
