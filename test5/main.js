// FUNCTIONS
function clicked(){
    let allSquares = document.querySelectorAll(".columnDivs");
    allSquares.forEach((square) => {
        square.addEventListener("click", () => {
            square.style.backgroundColor = 'black';
        })
    })
}



let slider = document.getElementById("myRange");
let container = document.querySelector(".container");
let gridContainer = document.querySelector(".grid-container");
let x = slider.value;
let rowDiv, columnDiv;
let output = document.createElement("div");

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

clicked();


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
            clicked();
        }
    } 
}

