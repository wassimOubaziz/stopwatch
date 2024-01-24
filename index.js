const times = document.querySelectorAll(".box .time");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const restartBtn = document.querySelector(".restart");
//
let hours = 99;
let min = 59;
let sec = 45;
let seconds;

startBtn.addEventListener("click", timeChanger);
stopBtn.addEventListener("click", function () {
  clearInterval(seconds);
});
restartBtn.addEventListener("click", function () {
  hours = 0;
  min = 0;
  sec = 0;
  clearInterval(seconds);
  timeChanger();
});
//

function timeChanger() {
  seconds = setInterval(() => {
    content();
    if (sec + 1 < 60) {
      sec++;
    } else {
      sec = 0;
      min++;

      if (min === 60) {
        min = 0;
        hours++;
        if (hours == 100) {
          hours = 0;
          min = 0;
          sec = 0;
          content();
          clearInterval(seconds);
        }
      }
    }
  }, 1000);
}

function content() {
  times[2].textContent = sec < 10 ? "0" + sec : sec;
  times[1].textContent = min < 10 ? "0" + min : min;
  times[0].textContent = hours < 10 ? "0" + hours : hours;
}
