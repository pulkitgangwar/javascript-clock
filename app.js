const clockContainer = document.querySelector(".clock");
const clockFace = document.querySelector(".clock__face");

const setClock = () => {
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
};

setClock();

setInterval(setClock, 1000);
