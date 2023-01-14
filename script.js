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

    //change the color of DOM elements on mouse hover

    let pixels = document.querySelectorAll(".pixels");
    for (let i = 0; i < totalNumberOfPixels; i++){
        pixels[i].addEventListener("mouseenter", () => {
            console.log(i);
            pixels[i].style.backgroundColor = "blue";   
        });
    }
}

//clear the color of the canvas
function resetCanvas() {
    let pixels = document.querySelectorAll(".pixels");
    for (let i = 0; i < totalNumberOfPixels; i++){
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
    container.style.transformOrigin = "center bottom"
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
let totalNumberOfPixels = canvasWidth*canvasHeight
createPixels(totalNumberOfPixels)
container.setAttribute("style", `width: ${canvasWidth}px; height: ${canvasHeight}px; transform: scale(${scale});`)
container.style.transformOrigin = "center bottom"


//assign texbox values to their corresponding functions
const widthTextBox = document.querySelector(".width");
const scaleTextBox = document.querySelector(".scale");
const heightTextBox = document.querySelector(".height");
widthTextBox.onchange = setWidth;
scaleTextBox.onchange = setScale;
heightTextBox.onchange = setHeight;
