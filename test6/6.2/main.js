const grid_item = document.querySelectorAll(".grid")
let currColor;
const colorDiv = document.querySelector(".current-color");


const colorPickers = document.querySelectorAll('.colors')
colorPickers.forEach((color) => {
    color.style.backgroundColor = color.id;
    color.addEventListener("click", () => {
        currColor = color.id;
        colorDiv.style.backgroundColor = currColor;
    })
})






let is_clicked;

document.addEventListener("mousedown", () => {
    is_clicked = true;
})
document.addEventListener("mouseup", () => {
    is_clicked = false;
})



grid_item.forEach((square) => {
    square.addEventListener("mouseover", () => {
        if (is_clicked == true){
            square.style.backgroundColor = currColor;
        }
    })
    square.addEventListener("click", () => {
        square.style.backgroundColor = currColor;
    })
})