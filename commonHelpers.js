import"./assets/modulepreload-polyfill-ec808ebb.js";import{f as m,i as f}from"./assets/vendor-651d7991.js";const u=document.querySelector("#datetime-picker"),r=document.querySelector("button"),h=document.querySelector(".value[data-days]"),y=document.querySelector(".value[data-hours]"),v=document.querySelector(".value[data-minutes]"),g=document.querySelector(".value[data-seconds]");r.addEventListener("click",C);let n;r.disabled=!0;m(u,{enableTime:!0,dateFormat:"Y-m-d H:i",time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=Date.now();return console.log(e),n=t[0].getTime(),console.log(n),n<e?f.show({message:"Please choose a date in the future?",messageColor:"black",backgroundColor:"tomato",position:"topRight"}):n>e&&(r.disabled=!1),n}});function C(t){u.disabled=!0,t.target.disabled=!0;const e=setInterval(c,1e3);function c(){const a=n-Date.now();a<=1e3&&clearInterval(e);const o=S(a);h.textContent=`${s(o.days)}`,y.textContent=`${s(o.hours)}`,v.textContent=`${s(o.minutes)}`,g.textContent=`${s(o.seconds)}`}function s(a){return a.toString().padStart(2,0)}}function S(t){const o=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),i=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:o,hours:d,minutes:i,seconds:l}}
//# sourceMappingURL=commonHelpers.js.map