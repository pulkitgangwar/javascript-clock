// targeting dom elements
const clockContainer = document.querySelector(".clock");
const clockFace = document.querySelector(".clock__face");
const greetContainer = document.querySelector(".clock__greet");

window.onload = () => {
  runClock();
  setInterval(runClock, 1000);
};

// function for working of clock
const runClock = () => {
  // Date object to use date and time
  const time = new Date();
  updateClockFace(time);
  display(time);
};

const updateClockFace = time => {
  clockFace.innerHTML = time.toLocaleString("en-IN", {
    hour: "2-digit",
    minute: "numeric",
    second: "numeric",
    hour12: true
  });
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
