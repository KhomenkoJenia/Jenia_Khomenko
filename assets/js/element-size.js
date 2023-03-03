'use strict';

const box = document.querySelector('.spinner');
const box1 = document.querySelector('.spinner1');
const btn = document.querySelector('.btn');

let spinerHeight,
    spinerWidth; 


btn.addEventListener('click', () =>{
  spinerHeight = prompt('Введите высоту(Кратно ста желательно)','');
  spinerWidth = prompt('Ввeдите ширину (Кратно ста желательно)','');
  
  function changeParams (elem, h, w){
    elem.style.height = `${h ?? 100}px`;
    elem.style.width = `${w ?? 100}px`;
  }
  
  changeParams(box, spinerHeight, spinerWidth);
  changeParams(box1, spinerHeight, spinerWidth);
})


console.log('spinerWidth');


