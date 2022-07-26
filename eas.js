
//takes argument of which size grid (aka if size = 16 this will create a 16x16 grid)
function gridMaker (size) {
    //main container holding all other divs
    const container = document.querySelector('.container');
    //create vertical divs in range of size variable
    for (let i = 0; i < size; i++) {
        const vertical = document.createElement('div');
        vertical.classList.add(`block`);
        container.appendChild(vertical);
        //create horizontal divs in range of size var
        for (let j = 0; j < size; j++) {
            const horizontal = document.createElement('div');
            horizontal.classList.add('inline');
            vertical.appendChild(horizontal);
        }

    }
}

gridMaker(32);