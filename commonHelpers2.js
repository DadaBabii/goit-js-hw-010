import"./assets/modulepreload-polyfill-ec808ebb.js";import{i}from"./assets/vendor-651d7991.js";const n=document.querySelector(".form"),l=document.querySelector('input[name = "delay"]'),r=document.querySelector("input[value = fulfilled]"),u=document.querySelector("input[value = rejected]");n.addEventListener("submit",m);function m(s){s.preventDefault();const o=Number(l.value),t=new Promise((e,c)=>{setTimeout(()=>{r.checked?e(o):u.checked&&c(o)},o)});console.log(t),t.then(e=>{i.show({message:`✅ Fulfilled promise in ${e}ms`,color:"green",position:"topRight"})}).catch(e=>{i.show({message:`❌ Rejected promise in ${e}ms`,color:"red",position:"topRight"})}).finally(()=>n.reset())}
//# sourceMappingURL=commonHelpers2.js.map