// targeting dom elements
const clockContainer = document.querySelector(".clock");
const clockFace = document.querySelector(".clock__face");
const greetContainer = document.querySelector(".clock__greet");

window.addEventListener("load", function() {
  runClock();
  setInterval(runClock, 1000);
});

// function for working of clock
const runClock = () => {
  // Date object to use date and time
  const time = new Date();

  let hours = (time.getHours() % 12).toString();
  let minutes = time.getMinutes().toString();
  let seconds = time.getSeconds().toString();

  if (hours.length < 2) {
    hours = `0${hours}`;
  }

  if (minutes.length < 2) {
    minutes = `0${minutes}`;
  }

  if (seconds.length < 2) {
    seconds = `0${seconds}`;
  }

  clockFace.innerHTML = `${hours} : ${minutes} : ${seconds}`;

  display(time);
};

const display = time => {
  const hours = time.getHours();

  if (hours <= 12) {
    greetContainer.innerHTML = `Good Morning`;
  } else if (hours <= 16) {
    greetContainer.innerHTML = `Good Afternoon`;
  } else if (hours <= 19) {
    greetContainer.innerHTML = `Good Evening`;
  } else {
    greetContainer.innerHTML = `Good Night`;
  }
};

greetContainer.innerHTML = ``;
