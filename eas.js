
//main container holding all other divs
const container = document.querySelector('.container');

//takes argument of which size grid (aka if size = 16 this will create a 16x16 grid)
function gridMaker (size) {
    //create columns divs in range of size variable
    for (let i = 0; i < size; i++) {
        const columns = document.createElement('div');
        columns.classList.add('columns');
        container.appendChild(columns);
        //create squares divs in range of size var
        for (let j = 0; j < size; j++) {
            const squares = document.createElement('div');
            squares.classList.add('squares');
            columns.appendChild(squares);
        }

    }
}

function toBlack () {
    const squares = document.querySelectorAll('.squares');

    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.classList.remove('squares');
            square.classList.add('blackSquare');
        });
    })

}

function clearGrid() {
    const bSquares = document.querySelectorAll('.blackSquare')
    bSquares.forEach((bSquare) => {
        bSquare.classList.remove('blackSquare');
        bSquare.classList.add('squares');
    });
}


let sizes = document.querySelectorAll('.buttons');
sizes.forEach((selection) => {

    let size = selection.id.toLocaleLowerCase();
    selection.addEventListener('click', () => {

        
        if(size == '16') {
            container.innerHTML = '';
            gridMaker(16);
        } else if (size == '32') {
            container.innerHTML = '';
            gridMaker(32);
        } else if (size == '64') {
            container.innerHTML = '';
            gridMaker(64);
        } else if (size == 'clear') {
            clearGrid();
        }

        toBlack();
    })
    
    })

gridMaker(16);
toBlack();
