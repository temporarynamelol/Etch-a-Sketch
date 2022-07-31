const switcher = document.querySelector('#switch');
let on = false;
//main container holding all other divs
const container = document.querySelector('.container');
const pallet = ['#37A1CB', '#EBE91B', '#D83682', '#3B8313']

//takes argument of which optionID grid (aka if optionID = 16 this will create a 16x16 grid)
function gridMaker (optionID) {
    //create columns divs in range of optionID variable
    for (let i = 0; i < optionID; i++) {
        const columns = document.createElement('div');
        columns.classList.add('columns');
        container.appendChild(columns);
        //create squares divs in range of optionID var
        for (let j = 0; j < optionID; j++) {
            const squares = document.createElement('div');
            squares.classList.add('squares');
            columns.appendChild(squares);
        }

    }
}

switcher.addEventListener('click', () => {
    if(!on) {
        on = true;
    } else {
        on = false
    }
}); 

function draw () {
    const squares = document.querySelectorAll('.squares');

    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            if(on) { 
                square.setAttribute('style', `background-color: ${pallet[Math.floor(Math.random()*pallet.length)]};`)
            } else {
                square.setAttribute('style', `background-color: black;`)
            }
            
        });
    })

}


function clearGrid() {
    const colorSquares = document.querySelectorAll('.squares')
    colorSquares.forEach((colorSquare) => {
        colorSquare.setAttribute('style', 'background-color: white;')
    });
}

let options = document.querySelectorAll('.buttons');
options.forEach((option) => {

    let optionID = option.id.toLocaleLowerCase();
    option.addEventListener('click', () => {

        
        if(optionID == '16') {
            container.innerHTML = '';
            gridMaker(16);
        } else if (optionID == '32') {
            container.innerHTML = '';
            gridMaker(32);
        } else if (optionID == '64') {
            container.innerHTML = '';
            gridMaker(64);
        } else if (optionID == 'clear') {
            clearGrid();
        }

        draw();
    })
    
    })

gridMaker(16);
draw();