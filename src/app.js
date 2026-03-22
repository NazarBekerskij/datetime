const day = document.querySelector('[data-value="days"]');
const hours = document.querySelector('[data-value="hours"]');
const minute = document.querySelector('[data-value="mins"]');
const second = document.querySelector('[data-value="secs"]');

const happeDay = new Date(2026, 9,30,7,30,0)


const id = setInterval(() => {


const currenDay = new Date()
const time = happeDay - currenDay 
  

if(time < 0){
  clearInterval(id)
  alert("З ДНЕМ НАРОДЖЕННЯ!!!")
  document.body.style.backgroundColor = "gold";
  return;
}


const daysLeft = Math.floor(time / (1000 * 60 * 60 * 24));
const hours1 = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
const secs = Math.floor((time % (1000 * 60)) / 1000);

day.textContent = daysLeft;
hours.textContent = hours1;
minute.textContent = mins;
second.textContent = secs;
},1000)