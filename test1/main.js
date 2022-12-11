let currentColor

let buttons = document.querySelectorAll('button');

buttons.forEach((btn) => {


    btn.addEventListener("click", () => {
        currentColor = window.getComputedStyle(btn).backgroundColor;
        // currentColor = btn.backgroundColor;
        // console.log(currentColor)
    });
})

let big = document.querySelector('.big-square');

big.addEventListener("click", ()=>{
    big.style.backgroundColor = currentColor;
} )