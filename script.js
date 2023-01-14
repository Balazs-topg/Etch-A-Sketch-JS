
const container = document.querySelector(".container");
const body = document.querySelector("body")

const windowWidth = window.innerWidth
const windowHeght = window.innerHeight


container.setAttribute("style", `width: ${windowWidth}px; height: ${windowHeght}px`)
//body.setAttribute("style", `width: ${windowWidth}px; height: ${windowHeght}px`)


console.log(window.innerHeight)
console.log(window.innerWidth)

let dimensions = (windowWidth/8)*(windowHeght/8)



for (let i = 0; i < dimensions; i++){
    let newElement = document.createElement("div", );
    newElement.classList.add(`pixels`);
    newElement.classList.add(i);
    newElement.setAttribute("style","height: 8px; width: 8px; background-color: black")
    container.appendChild(newElement)
}


const pixels = document.querySelectorAll(".pixels");


const changeColor = function (pixelNumber) {
    //let pixelzzzz = document.querySelectorAll(`.pixels.${pixelNumber}`);
    console.log(pixelNumber)
}


for (let i = 0; i < dimensions; i++){
    pixels[i].addEventListener("mouseenter", () => {
        console.log(i);
        //pixels[i].setAttribute('style', 'background: blue;');   
        pixels[i].style.backgroundColor = "blue";   

    });
}

