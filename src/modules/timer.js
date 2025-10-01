import { padZero } from "../utils/padZero";

export function timer(deadline) {
  const timerDays = document.querySelectorAll('.count.count_1 span');
  const timerHours = document.querySelectorAll('.count.count_2 span');
  const timerMinutes = document.querySelectorAll('.count.count_3 span');
  const timerSeconds = document.querySelectorAll('.count.count_4 span');
  let intervalTimerID = null;

  const getTimeRemaining = () => {
    const dateStop = new Date(deadline).getTime();
    const dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;

    const days = padZero(Math.floor(timeRemaining / (3600 * 24)));
    const hours = padZero(Math.floor((timeRemaining / 3600) % 24));
    const minutes = padZero(Math.floor((timeRemaining / 60) % 60));
    const seconds = padZero(Math.floor(timeRemaining % 60));

    return { timeRemaining, days, hours, minutes, seconds };
  };

  const updateClock = () => {
    const { timeRemaining, days, hours, minutes, seconds } = getTimeRemaining();

    if (timeRemaining <= 0) {
      if (intervalTimerID !== null) {
        clearInterval(intervalTimerID);
      }
      timerDays.forEach(el => el.textContent = '00');
      timerHours.forEach(el => el.textContent = '00');
      timerMinutes.forEach(el => el.textContent = '00');
      timerSeconds.forEach(el => el.textContent = '00');
      return;
    }

    timerDays.forEach(el => el.textContent = days);
    timerHours.forEach(el => el.textContent = hours);
    timerMinutes.forEach(el => el.textContent = minutes);
    timerSeconds.forEach(el => el.textContent = seconds);
  };

  intervalTimerID = setInterval(updateClock, 1000);
  updateClock();
}
