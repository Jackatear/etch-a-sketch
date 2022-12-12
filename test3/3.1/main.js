let slider = document.getElementById("myRange");
let output = document.createElement('div');
let container = document.querySelector('.container');
let x;
let newDiv;

output.classList.add("value");


container.appendChild(output);

x = slider.value;

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    reset = document.querySelectorAll('#grid');
        reset.forEach((grid) => {
            grid.remove();
        })
    x = this.value;
    for (let i = 0; i < x; i++){
        newDiv = document.createElement("div");
        newDiv.id = 'grid';
        newDiv.style.height = '10px';
        newDiv.style.width = '10px';
        newDiv.style.border = '1px solid black';
        newDiv.style.borderRadius = '3px';
        newDiv.style.flex = '1';
        let gridContainer = document.querySelector('.grid-container');
        gridContainer.appendChild(newDiv);
    }
}

