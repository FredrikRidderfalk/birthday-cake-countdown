const countdownDisplay = document.querySelector("#countdown");
const wish = document.querySelector("#wish");

const cakeDate = new Date("2021-10-15T18:00:00");
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const ticker = setInterval(() => {
  const today = new Date();
  const timeRemaining = cakeDate - today;

  if (timeRemaining <= 0) {
    countdownDisplay.innerHTML = "It's time for cake!!!";
    wish.innerHTML = "The cake is not a lie😍";
    clearInterval(ticker);
    return;
  }
}, second);
