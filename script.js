"use strict";
const diceElement = document.querySelector(".dice");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const poi1 = document.querySelector(".poi1");
let points1 = document.querySelector(".points1");
const poi2 = document.querySelector(".poi2");
let points2 = document.querySelector(".points2");
const section1 = document.querySelector(".section1");
const section2 = document.querySelector(".section2");
let j = 0;
let scorePlayer1 = 0;
let scorePlayer2 = 0;
let sum1 = 0;
let sum2 = 0;
let flag = true;
const rollDice = () => {
  const dice = Math.trunc(Math.random() * 6) + 1;
  if (flag) {
    if (dice !== 1 && sum1 < 100 && sum2 < 100) {
      diceElement.classList.remove("hidden");
      diceElement.src = `dice-${dice}.png`;
      scorePlayer1 += dice;
      poi1.textContent = `${scorePlayer1}`;
      console.log(scorePlayer1);
    } else if (dice === 1 && sum1 < 100 && sum2 < 100) {
      section1.classList.add("opa");
      section2.classList.remove("opa");
      diceElement.classList.remove("hidden");

      diceElement.src = `dice-${dice}.png`;
      scorePlayer1 = 0;
      poi1.textContent = `${scorePlayer1}`;
      flag = false;
      section1.style.transition = "0.3s";
    }
  } else if (flag === false) {
    if (dice !== 1 && sum2 < 100 && sum1 < 100) {
      diceElement.classList.remove("hidden");
      diceElement.src = `dice-${dice}.png`;
      scorePlayer2 += dice;
      poi2.textContent = `${scorePlayer2}`;
      console.log(scorePlayer2);
    } else if (dice === 1 && sum2 < 100 && sum1 < 100) {
      section1.classList.remove("opa");
      section2.classList.add("opa");
      diceElement.src = `dice-${dice}.png`;
      scorePlayer2 = 0;
      poi2.textContent = `${scorePlayer2}`;
      flag = true;
      section2.style.transition = "0.3s";
    }
  }
};

btn2.addEventListener("click", rollDice);

const hold = () => {
  if (scorePlayer1 > 0) {
    sum1 += scorePlayer1;
    points1.textContent = `${sum1}`;
    poi1.textContent = 0;
    scorePlayer1 = 0;
    flag = false;
    section1.classList.add("opa");
    section2.classList.remove("opa");
  } else if (scorePlayer2 > 0) {
    sum2 += scorePlayer2;
    points2.textContent = `${sum2}`;
    poi2.textContent = 0;
    scorePlayer2 = 0;
    flag = true;
    section1.classList.remove("opa");
    section2.classList.add("opa");
  }
};
btn3.addEventListener("click", hold);

const yellow = () => {
  if (sum1 >= 100) {
    section1.style.backgroundColor = "yellow";
  } else if (sum2 >= 100) {
    section2.style.backgroundColor = "yellow";
  }
};
btn3.addEventListener("click", yellow);

const restart = () => {
  sum1 = 0;
  sum2 = 0;
  section1.classList.remove("opa");
  section2.classList.add("opa");
  flag = true;
  scorePlayer1 = 0;
  scorePlayer2 = 0;
  points1.textContent = `${sum1}`;
  points2.textContent = `${sum2}`;
  console.log("działa");
  section1.style.backgroundColor = "rgb(221, 202, 208)";
  section2.style.backgroundColor = "rgb(221, 202, 208)";
};

btn1.addEventListener("click", restart);
