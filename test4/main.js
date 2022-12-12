const btn = document.querySelector('button')
const container = document.querySelector('#container')
let click = 0;
btn.addEventListener('click', ()=>{
    if (click % 2 == 0){
        container.classList.add('new-style');
        click++;
    }
    else {
        container.classList.remove('new-style');
        click++;
    }
})