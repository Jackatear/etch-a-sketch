const btn = document.querySelector('button')
const container = document.querySelector('#container')
const newDiv = document.createElement('div');

newDiv.textContent = "Wow i'm new!";
newDiv.style.color = 'white';
newDiv.style.alignSelf = 'center';

let click = 0;
btn.addEventListener('click', ()=>{
    if (click % 2 == 0){
        container.classList.add('new-style');
        container.appendChild(newDiv);
        container.style.gap = '10px';
        

        click++;
    }
    else {
        container.classList.remove('new-style');
        container.removeChild(newDiv);
        click++;
    }




})

