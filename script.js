function createPixels(totalNumberOfPixels){

    //remove any prevoius pixels
    container.innerHTML = '';

    //create DOM elements
    for (let i = 0; i < totalNumberOfPixels; i++){
        let newElement = document.createElement("div", );
        newElement.classList.add(`pixels`);
        newElement.classList.add(i);
        newElement.setAttribute("style","height: 1px; width: 1px; background-color: black")
        container.appendChild(newElement)
    }

    //change the color of DOM elements on mouse hover and click
    let pixels = document.querySelectorAll(".pixels");
    for (let i = 0; i < totalNumberOfPixels; i++){
        pixels[i].addEventListener("mouseenter", () => {
            if (mouseDown) {
                pixels[i].style.backgroundColor = currentColor;   
            }
        });
    }

    //change the color of DOM elements on click
    pixels = document.querySelectorAll(".pixels");
    for (let c = 0; c < totalNumberOfPixels; c++){
        pixels[c].addEventListener("click", () => {
            pixels[c].style.backgroundColor = currentColor;   
        });
    }
}

//clear the color of the canvas
function resetCanvas() {
    let pixels = document.querySelectorAll(".pixels");
    for (let i = 0; i < (widthTextBox.value*heightTextBox.value); i++){
        pixels[i].style.backgroundColor = "black"
    }
}

//call on resetCanvas() with esc
document.addEventListener('keydown', evt => {
    if (evt.key === 'Escape') {
        //alert('Escape pressed');
        resetCanvas()
    }
});

function setScale() {
    let scale = document.querySelector(".scale").value;

    container.style.transform = `scale(${scale})`
}

function setWidth() {
    let desiredWidth = widthTextBox.value;
    let height = heightTextBox.value;

    container.style.width = `${desiredWidth}px`
    createPixels(desiredWidth*height)
}

function setHeight() {
    let desiredHeight = heightTextBox.value;
    let width = widthTextBox.value

    container.style.height = `${desiredHeight}px`
    createPixels(desiredHeight*width)
}

//retrive values and initiate canvas
const container = document.querySelector(".container");
let canvasWidth = document.querySelector(".width").value
let canvasHeight = document.querySelector(".height").value
let scale = document.querySelector(".scale").value
createPixels(canvasWidth*canvasHeight)
container.style.width = `${canvasWidth}px`
container.style.height = `${canvasHeight}px`
container.style.transform = `scale(${scale})`

//find out if mouse is clicked and store it in as a boolean
let mouseDown = false;
function click() {mouseDown = true}
function unclick() {mouseDown = false}
document.onmousedown = click;
document.onmouseup = unclick;

//find colors and store the users choice in a variable
let currentColor = "blue"
const colorRed = document.querySelector(".red")
const colorBlue = document.querySelector(".blue")
const colorBlack = document.querySelector(".black")
const colorCustom = document.querySelector(".custom")
colorRed.addEventListener("click", () => {currentColor = "red"})
colorBlue.addEventListener("click", () => {currentColor = "blue"})
colorBlack.addEventListener("click", () => {currentColor = "black"})
function update(picker){currentColor = picker.toRGBString()} //custom color-picker



//assign texbox values to their corresponding functions
const widthTextBox = document.querySelector(".width");
const scaleTextBox = document.querySelector(".scale");
const heightTextBox = document.querySelector(".height");
widthTextBox.onchange = setWidth;
scaleTextBox.onchange = setScale;
heightTextBox.onchange = setHeight;
