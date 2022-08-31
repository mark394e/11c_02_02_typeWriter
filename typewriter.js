"use strict";

document.addEventListener("DOMContentLoaded", init);
let i = 0;
let hiddenText;
let shownText;

function init() {
  hiddenText = document.querySelector("#hiddenText").textContent;
  shownText = document.querySelector("#typewriter").textContent;

  console.log("hiddenText length: " + hiddenText.length);
  document.querySelector("#startButton").addEventListener("click", startTyping);
}

function startTyping() {
  if (i < hiddenText.length) {
    shownText = shownText + hiddenText[i];
    console.log(shownText);

    i++;
    console.log(i);
    document.querySelector("#typewriter").textContent = shownText;

    setTimeout(() => {
      startTyping();
    }, 150);
  } else {
    end();
  }
}

function end() {
  console.log("end");
  document.querySelector("#startButton").addEventListener("click", startTyping);
  i = 0;
  shownText = "";
}
