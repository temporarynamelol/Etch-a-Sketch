
//takes argument of which size grid (aka if size = 16 this will create a 16x16 grid)
function gridMaker (size) {
    //main container holding all other divs
    const container = document.querySelector('.container');
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

gridMaker(16);

const squares = document.querySelectorAll('.squares');

squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.classList.remove('sqaures');
        square.classList.add('blackSquare');
    });
})

