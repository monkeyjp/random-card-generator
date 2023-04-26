/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let randomCardValue = Math.floor(Math.random() * 13);
  const cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let randomCardSuits = Math.floor(Math.random() * 4);
  const cardSuits = ["♦", "♥", "♠", "♣"];
  let cardValue = document.querySelector(".cardValue");
  cardValue.innerHTML = cardValues[randomCardValue];
  let cardSuit = document.querySelectorAll("#suits");
  for (let i = 0; i < cardSuit.length; i++) {
    cardSuit[i].classList.add(cardSuits[randomCardSuits]);
    cardSuit[i].innerHTML = cardSuits[randomCardSuits];
  }
};
