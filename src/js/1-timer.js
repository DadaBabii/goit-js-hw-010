import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


const datetimePicker = document.querySelector('#datetime-picker');
const btn = document.querySelector('button');
const daysEl = document.querySelector('.value[data-days]');
const hoursEl = document.querySelector('.value[data-hours]');
const minutesEl = document.querySelector('.value[data-minutes]');
const secondsEl = document.querySelector('.value[data-seconds]');
const fieldDiv = document.querySelectorAll('.field');
console.log(fieldDiv);

for (const field of fieldDiv) {
  field.style.display = 'flex';
  field.style.flexDirection = 'column';
  field.style.alignItems = 'center';
};

btn.addEventListener('click', onBtnClick);

let userSelectedDate = 0;
btn.disabled = true;
const fp = flatpickr(datetimePicker, {
  enableTime: true,
  dateFormat: "Y-m-d H:i",
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const now = Date.now(); 
    console.log(now);
    userSelectedDate = selectedDates[0].getTime();
    console.log(userSelectedDate);
    
    if (userSelectedDate < now) {
      
      iziToast.show({
      
        message: 'Please choose a date in the future?',
        messageColor: 'black',
        backgroundColor: 'tomato',
        position: 'topRight',
        
      });
      
    } else if (userSelectedDate > now)
    btn.disabled = false; // включить кнопку
    return userSelectedDate;
  },
},);

function onBtnClick() {
 
  const intervalId = setInterval(timerMsec, 1000);

  function timerMsec() {
    const diff = userSelectedDate - Date.now();
     if (diff <= 1000)
     {
       clearInterval(intervalId); 
         
    };
    const dates = convertMs(diff, convertValue);
    daysEl.textContent = `${convertValue(dates.days)}`;
    hoursEl.textContent = `${convertValue(dates.hours)}`;
    minutesEl.textContent = `${convertValue(dates.minutes)}`;
    secondsEl.textContent = `${convertValue(dates.seconds)}`;

   

  };
  
  function convertValue(value) {
    return value.toString().padStart(2, 0)
  };
  
  
 function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
 
  return { days, hours, minutes, seconds };
  };
  
 
};
  


