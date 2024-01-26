// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const delayArea = document.querySelector('input[name = "delay"]');
const fulfilledEl = document.querySelector('input[value = fulfilled]');
const rejectedEl = document.querySelector('input[value = rejected]');

form.style.display = 'flex';
form.style.flexDirection = 'column';
form.style.flexWrap = 'wrap';
form.style.alignItems = 'stretch';
form.style.alignContent = 'flex-start';
form.style.justifyContent = 'space-around';
form.style.gap = '15px';



form.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    const delay = Number(delayArea.value);

    const promise = new Promise((res, rej) => {
        
        setTimeout(() => {
            if (fulfilledEl.checked) {
                res(iziToast.show({
                    message: `✅ Fulfilled promise in ${delay}ms`,
                    color: 'green',
                    position: 'topRight',
                })
                    
                )
            } else if (rejectedEl.checked) {
                rej(iziToast.show({
                    message: `❌ Rejected promise in ${delay}ms`,
                    color: 'red',
                    position: 'topRight',
                }))
                  
            }
        }, delay)
        
           
    })
    console.log(promise);
    promise.then((func) => { func }).catch((err) => { err }).finally(()=>form.reset());

};

