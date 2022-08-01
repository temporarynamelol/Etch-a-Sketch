const switcher = document.querySelector('.switch'); //Creates on/off switch to toggle color or black
const switchText = document.querySelector('.switchText'); //The text displayed before the switch
switchText.textContent = "Current color: Black"
let on = false; //dictates whether color is toggled on or off, off by default
const container = document.querySelector('.container'); //main container used to create grid 
const pallet = ['#37A1CB', '#EBE91B', '#D83682', '#3B8313'] //color pallet that draw uses in color mode

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
switcher.addEventListener('change', () => {
    if(!on) {
        on = true;
        switchText.textContent = "Current Color: Rainbow" //Change current color
    } else {
        on = false
        switchText.textContent = "Current Color: Black" //Change current color
    }
}); 

//main function to draw on grid
function draw () {
    const squares = document.querySelectorAll('.squares'); //querys every grid square on the page
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
    let optionID = option.id.toLocaleLowerCase();  //receives the buttonID from the button when clicked
    option.addEventListener('click', () => {

        //passes the selected size option to gridMaker()
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
        draw(); //calls the draw function again
    })
    
    })

//initialize the game by loading a default grid of 16x16 and calling draw()
gridMaker(16);
draw();