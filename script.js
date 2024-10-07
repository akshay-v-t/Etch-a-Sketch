const mainContainer = document.querySelector('container');
let divNums;

function makeDivs(numDivs) {
    mainContainer.innerHTML = '';  

    for (let i = 0; i < numDivs; i++) {
        let cells = document.createElement('div');
        cells.setAttribute('style', 'width:2%;') 
        cells.setAttribute('class', 'element');
        mainContainer.appendChild(cells);
    }

    const squares = document.querySelectorAll('.element');


squares.forEach(square => {
    square.style.opacity = 0.1; 

   
    square.addEventListener('mouseover', (e) => {
        let currentOpacity = parseFloat(e.target.style.opacity); 
        
        if (currentOpacity < 1) {  
            currentOpacity += 0.1;
        }

        e.target.style.opacity = currentOpacity; 
        e.target.style.backgroundColor = randomColor;  
    });
});

}

function generateRandomColor(){



let letters = "0123456789ABCDEF"; 
  

let color = '#'; 
  

for (let i = 0; i < 6; i++) 
    color += letters[(Math.floor(Math.random() * 16))]; 
  
console.log(color);

return color;
}

let randomColor = generateRandomColor();

function captureInput() {
    let divNumsInput = document.querySelector('#div-no').value;
    divNumsInput = parseInt(divNumsInput, 10);

    if (divNumsInput > 100) {
        alert("Enter a value less than 100");
    } else {
        divNums = divNumsInput * divNumsInput;
        makeDivs(divNums);  
    }
}


