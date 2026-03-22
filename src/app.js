const day = document.querySelector('[data-value="days"]');
const hours = document.querySelector('[data-value="hours"]');
const minute = document.querySelector('[data-value="mins"]');
const second = document.querySelector('[data-value="secs"]');

const happyDays = new Date(2027, 0, 1, 0, 0, 0);

setInterval(() => {
  const currentDate = new Date(); 
  const time = (happyDays - currentDate);

  const day1 = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours1 = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);

  day.textContent = day1;
  hours.textContent = hours1;
  minute.textContent = mins;
  second.textContent = secs;
}, 1000);