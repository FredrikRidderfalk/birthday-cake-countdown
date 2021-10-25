const countdownDisplay = document.querySelector("#countdown");
const wish = document.querySelector("#wish");
const cake = document.querySelector(".cake");
const audio = document.querySelector("#audio");
let count = 0;

const cakeDate = new Date("2021-11-15T18:00:00");
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const ticker = setInterval(() => {
  const today = new Date();
  const timeRemaining = cakeDate - today;
  const days = Math.floor(timeRemaining / day);
  const hours = Math.floor((timeRemaining % day) / hour);
  const minutes = Math.floor((timeRemaining % hour) / minute);
  const seconds = Math.floor((timeRemaining % minute) / second);

  if (timeRemaining < -day) {
    countdownDisplay.innerHTML =
      "The cake was great! It was delicious and moist🤤";
    wish.innerHTML = "The cake was not a lie😍";
    return;
  }

  if (timeRemaining <= 0) {
    countdownDisplay.innerHTML = "It's time for cake!!!";
    wish.innerHTML = "The cake is not a lie😍";
    clearInterval(ticker);
    return;
  } else {
    countdownDisplay.innerHTML = `${days} : ${hours} : ${minutes} : ${seconds}`;
  }
}, second);

function playPauseSong() {
  if (count == 0) {
    count = 1;
    audio.play();
  } else {
    count = 0;
    audio.pause();
  }
}
