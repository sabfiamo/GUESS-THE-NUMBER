"use strict";
const inputElement = document.querySelector(".js_input");
const infoElement = document.querySelector(".js_info");
const countElement = document.querySelector(".js_count");
const buttonTable = document.querySelector(".js_buttonTable");

//número aleatorio entre 1 y 100
const numberRandom = getRandomNumber(100) + 1;
//contador de intentos
let timesCounter = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function writeMsj(message) {
  infoElement.innerHTML = message;
}
function checkValue() {
  const valoresAceptados = /^[0-9]+$/;
  if (
    !(inputElement.value === "") &&
    inputElement.value.match(valoresAceptados)
  ) {
    return true;
  } else return false;
}
function compareNumbers() {
  const inputNumber = parseInt(inputElement.value);

  if (inputNumber > 100 || inputNumber < 0) {
    writeMsj("Pista: El número debe estar entre 1 y 100");
  } else if (inputNumber === numberRandom) {
    writeMsj("Congratulations!! You got it!!");
    setInterval("location.reload()", 3000);
  } else if (inputNumber > numberRandom) {
    writeMsj(`Hint: The ${inputNumber} is too high.`);
  } else {
    writeMsj(`Hint: The ${inputNumber} is too low.`);
  }
}

function handleClickButtonTable(event) {
  event.preventDefault();
  //Contar los intentos
  inputElement.style.background = "none";
  if (event.target.textContent === "") {
    inputElement.value = inputElement.value.slice(0, -1);
  } else if (event.target.textContent === "Reset") {
    location.reload();
  } else if (event.target.textContent === "Guess") {
    if (checkValue()) {
      timesCounter++;
      countElement.innerHTML = "Number of attemps: " + timesCounter;
      compareNumbers();
    } else writeMsj("Hint: The number has to have a value between 1 and 100.");
    // inputNumberElement.value = "";
    inputElement.value = "";
  } else {
    inputElement.value = inputElement.value + event.target.textContent;
  }
}

buttonTable.addEventListener("click", handleClickButtonTable);
