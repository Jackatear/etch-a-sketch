let slider = document.getElementById("myRange");
let output = document.createElement('div');
let container = document.querySelector('.container');
let x;
let newDiv, innerDiv;

output.classList.add("value");


container.appendChild(output);

x = slider.value;


for (let i = 0; i < x; i++){
    newDiv = document.createElement("div");
    newDiv.id = 'grid';
    newDiv.style.height = '10px';
    newDiv.style.boxSizing = 'border-box';
    newDiv.style.width = '10px';
    newDiv.style.border = '0.5px solid black';
    newDiv.style.flex = '1';
    newDiv.style.width = '100%';
    newDiv.style.display = 'flex';
    newDiv.style.margin = '0';
    newDiv.style.padding = '0';
    let gridContainer = document.querySelector('.grid-container');
    gridContainer.appendChild(newDiv);
    
    for (let j = 0; j < x; j++){
        innerDiv = document.createElement("div");
        innerDiv.style.boxSizing = 'border-box';
        innerDiv.id = 'grid';
        innerDiv.style.border = '0.5px solid black';  
        innerDiv.style.flex = '1';
        innerDiv.style.margin = '0';
        innerDiv.style.padding = '0';
        newDiv.appendChild(innerDiv)

    };
}










// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    reset = document.querySelectorAll('#grid-item');
        reset.forEach((grid) => {
            grid.remove();
        })
    x = this.value;
    for (let i = 0; i < x; i++){
        newDiv = document.createElement("div");
        newDiv.id = 'grid';
        newDiv.style.height = '10px';
        newDiv.style.boxSizing = 'border-box';
        newDiv.style.width = '10px';
        newDiv.style.border = '0.5px solid black';
        newDiv.style.flex = '1';
        newDiv.style.width = '100%';
        newDiv.style.display = 'flex';
        newDiv.style.margin = '0';
        newDiv.style.padding = '0';
        let gridContainer = document.querySelector('.grid-container');
        gridContainer.appendChild(newDiv);
        
        for (let j = 0; j < x; j++){
            innerDiv = document.createElement("div");
            innerDiv.style.boxSizing = 'border-box';
            innerDiv.id = 'grid';
            innerDiv.style.border = '0.5px solid black';            innerDiv.style.flex = '1';
            innerDiv.style.margin = '0';
            innerDiv.style.padding = '0';
            newDiv.appendChild(innerDiv)
        };
    }
}

