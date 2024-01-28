// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const delayArea = document.querySelector('input[name = "delay"]');
const fulfilledEl = document.querySelector('input[value = fulfilled]');
const rejectedEl = document.querySelector('input[value = rejected]');


form.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    const delay = Number(delayArea.value);

    const promise = new Promise((res, rej) => {
        
        setTimeout(() => {
            if (fulfilledEl.checked) {
                res(delay);
            } else if (rejectedEl.checked) {
                rej(delay);
            }
        }, delay)
        
           
    });
    console.log(promise);
    promise.then((delay) => {
        iziToast.show({
            message: `✅ Fulfilled promise in ${delay}ms`,
            color: 'green',
            position: 'topRight',
        });
    }).catch((delay) => {
        iziToast.show({
            message: `❌ Rejected promise in ${delay}ms`,
            color: 'red',
            position: 'topRight',
        });
    }).finally(() => form.reset());
   

};

