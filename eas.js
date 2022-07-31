//Creates on/off switch to toggle color or black
const switcher = document.querySelector('#switch');
//dictates whether color is toggled on or off, off by default
let on = false;
//main container holding all other divs
const container = document.querySelector('.container');
//color pallet that draw uses in color mode
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

//listens for the color witch to be toggled, turns on or off
switcher.addEventListener('click', () => {
    if(!on) {
        on = true;
    } else {
        on = false
    }
}); 

//main function to draw on grid
function draw () {
    //querys every grid square on the page
    const squares = document.querySelectorAll('.squares');
    //for each square
    //on mouseover
    //set the background color to either black or color
    //depending on whether or not the color switch has been toggled on or off
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

//clears the grid by setting the background of all squares in the grid to white
function clearGrid() {
    const colorSquares = document.querySelectorAll('.squares')
    colorSquares.forEach((colorSquare) => {
        colorSquare.setAttribute('style', 'background-color: white;')
    });
}


//this querys all buttons with the class '.buttons'
let options = document.querySelectorAll('.buttons');
options.forEach((option) => {
    //receives the buttonID from the button when clicked
    let optionID = option.id.toLocaleLowerCase();
    option.addEventListener('click', () => {

        //passes the selected size option to griMaker()
        if(optionID == '16') {
            container.innerHTML = '';
            gridMaker(16);
        } else if (optionID == '32') {
            container.innerHTML = '';
            gridMaker(32);
        } else if (optionID == '64') {
            container.innerHTML = '';
            gridMaker(64);
        //unless the clear option was selected, in which case it calls clearGrid()
        } else if (optionID == 'clear') {
            clearGrid();
        }
        //calls the draw function again
        draw();
    })
    
    })

//initialize the game by loading a default grid of 16x16 and calling draw()
gridMaker(16);
draw();