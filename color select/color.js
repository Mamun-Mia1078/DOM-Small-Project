const colors = ['red','violet','yellow','green','blue','indigo','purple','orange'];
const container = document.querySelector('section');
const h1 = document.querySelector('h1');
const selectedColor = document.querySelector('#selectedColor');
for(let color of colors){
    const box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box)
    box.style.backgroundColor = color;
    box.addEventListener('click',function(){
        h1.innerText = 'Your Selected Color is :- '
        selectedColor.innerText = box.style.backgroundColor;
        selectedColor.style.backgroundColor = box.style.backgroundColor;
    });
}