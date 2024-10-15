const mainContainer = document.querySelector('container');
let divNums;

function makeDivs(numDivsPerRow) {
    mainContainer.innerHTML = '';  

    const totalDivs = numDivsPerRow * numDivsPerRow;
    const divSize = 500 / numDivsPerRow; 

    for (let i = 0; i < totalDivs; i++) {
        let cells = document.createElement('div');
        cells.style.width = `${divSize}px`;
        cells.style.height = `${divSize}px`;
        cells.classList.add('element');
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
            e.target.style.backgroundColor = generateRandomColor(); 
        });
    });
}

function generateRandomColor() {
    let letters = "0123456789ABCDEF"; 
    let color = '#'; 

    for (let i = 0; i < 6; i++) {
        color += letters[(Math.floor(Math.random() * 16))];
    }
  
    return color;
}

function captureInput() {
    let divNumsInput = prompt("Enter a value less than 100");
    divNumsInput = parseInt(divNumsInput, 10);

    if (divNumsInput > 100) {
        alert("Enter a value less than 100");
    } else {
        makeDivs(divNumsInput); 
    }
}

captureInput();
