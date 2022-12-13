const grid_item = document.querySelectorAll(".grid")




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
            square.style.backgroundColor = 'black';
        }

    })
})