const mainContainer = document.querySelector('container');


function makeDivs(numDivs) {
    for (let i = 0; i < numDivs; i++){
        let cells = document.createElement('div');
        mainContainer.appendChild(cells)    
        }
    }
    
    makeDivs(256);
