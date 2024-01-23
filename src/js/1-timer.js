import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const datetimePicker = document.querySelector('#datetime-picker');
console.log(datetimePicker);


const fp = flatpickr(datetimePicker, {
     enableTime: true,
    dateFormat: "Y-m-d H:i",
    time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
    });