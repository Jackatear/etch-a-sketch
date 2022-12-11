// The goal here is to change the 'lightness' or 'darkness' of the square by 10% or so, every
// time we click on the lighter or darker buttons

// 1) get the rgb values of the big_squares background color 
// 2) add eventlistener to the lighter and darker buttons 
// 3) if lighter, we want to apply a function to the rgb values, increasing their number by 10%
// 4) if darker, we want to reduce the rgb values
// 5) after each click, we want to apply the new-color value to the square :) 

// --> constraint. When we get the rgb values of the square, it is a string in the form of "rgb(x,y,z)"
// --> to change the values, therefore, we need to convert the string into a list, index into the list, iterate
//     over the values, then tranform back into a string and pass that back as the new value.

// FUNCTIONS //
function toArray(str){
    console.log(str);
    str = str.replaceAll(' ','')
    arr = str.substring(4, str.length - 1).split(',');
    for (let i = 0; i < arr.length; i++){
        arr[i] = Number(arr[i])
    }
    return arr;
}


// Element objects
let bigSquare = document.querySelector('.big-square');
let lightButton = document.querySelector('#lighter');
let darkButton = document.querySelector('#darker');
let r,g,b;
let newColorString;

let currentBackgroundColor = window.getComputedStyle(bigSquare).backgroundColor;
let currentColorArray = [];
console.log(currentBackgroundColor);




lightButton.addEventListener('click', () => {
    rgbArr = toArray(currentBackgroundColor);
    r = rgbArr[0] + 10;
    g = rgbArr[1] + 10;
    b = rgbArr[2] + 10;

    if (r > 255){
        r = 255;
    }
    if (g > 255){
        g = 255;
    }
    if (b > 255){
        b = 255;
    }

    newColorString = `rgb(${r},${g},${b})`;
    currentBackgroundColor = newColorString;

    bigSquare.style.backgroundColor = currentBackgroundColor;
})

darkButton.addEventListener('click', () => {
    rgbArr = toArray(currentBackgroundColor);
    r = rgbArr[0] - 10;
    g = rgbArr[1] - 10;
    b = rgbArr[2] - 10;

    if (r < 0){
        r = 0;
    }
    if (g < 0){
        g = 0;
    }
    if (b < 0){
        b = 0;
    }

    newColorString = `rgb(${r},${g},${b})`;
    currentBackgroundColor = newColorString;

    bigSquare.style.backgroundColor = currentBackgroundColor;
})
