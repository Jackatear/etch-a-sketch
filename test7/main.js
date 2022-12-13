const slider = document.querySelector('#grid-size');
const gridContainer = document.querySelector(".grid-container");
const colors = document.querySelectorAll('.color');
const colorDisplay = document.querySelector('.current-color');

let x = slider.value;
let rowDiv, columnDiv;
let allSquares;
let is_clicked;
let currColor;



document.addEventListener("mousedown", () => {
    is_clicked = true;
    console.log(is_clicked);
})
document.addEventListener("mouseup", () => {
    is_clicked = false;
    console.log(is_clicked);
})


colors.forEach((color) => {
    color.style.backgroundColor = color.id;
    color.addEventListener("click", () => {
        currColor = color.id;
        colorDisplay.style.backgroundColor = currColor;
    })
})


let draw = function () {
    allSquares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            if (is_clicked == true){
                square.style.backgroundColor = currColor;
            }
        })
        square.addEventListener("click", () => {
            square.style.backgroundColor = currColor;
        })
    })
}

// Create Grid
for (let i = 0; i < x; i++){
    rowDiv = document.createElement("div");
    rowDiv.classList.add("rowDivs");
    rowDiv.setAttribute("id", "grid-item");
    gridContainer.appendChild(rowDiv);

    for (let j = 0; j < x; j++){
        columnDiv = document.createElement("div");
        columnDiv.classList.add("columnDivs");
        columnDiv.setAttribute("id", "grid-item");
        rowDiv.appendChild(columnDiv);
        allSquares = document.querySelectorAll(".columnDivs")
    }
}
// Change Grid Based On Slider
slider.oninput = function() {
    reset = document.querySelectorAll('#grid-item');
        reset.forEach((grid) => {
            grid.remove();
        });
    x = this.value;
    for (let i = 0; i < x; i++){
        rowDiv = document.createElement("div");
        rowDiv.classList.add("rowDivs");
        rowDiv.setAttribute("id", "grid-item");
        gridContainer.appendChild(rowDiv);
    
        for (let j = 0; j < x; j++){
            columnDiv = document.createElement("div");
            columnDiv.classList.add("columnDivs");
            columnDiv.setAttribute("id", "grid-item");
            rowDiv.appendChild(columnDiv);
        }
    }
    allSquares = document.querySelectorAll(".columnDivs"); 
    draw()
}

draw()



