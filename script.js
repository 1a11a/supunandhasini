// Countdown Timer
const weddingDate = new Date("January 15, 2025 08:00:00").getTime();

const countdown = () => {
  const now = new Date().getTime();
  const timeLeft = weddingDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  if (timeLeft < 0) {
    clearInterval(timer);
    document.querySelector(".countdown").innerHTML = "<p>The wedding has started!</p>";
  }
};

const timer = setInterval(countdown, 1000);