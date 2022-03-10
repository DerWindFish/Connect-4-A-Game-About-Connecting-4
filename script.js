const spaceBoard = document.querySelector('.space');
const spaceRow = document.getElementsByTagName('tr');
const spaceCell = document.getElementsByTagName('td');
const resetBtn = document.querySelector('.reset');
const playerOne = 'Blue'
const playerTwo = 'Green'
const playerOneColor = 'blue';
const playerTwoColor = 'green';
let currentPlayer = playerOne;


Array.prototype.forEach.call(spaceCell, (cell) => {
    cell.addEventListener('click', changeColor);
    cell.style.backgroundColor = 'white';
});

function changeColor(coord) {
    let column = coord.target.cellIndex;
    let row = [];

    for (let i = 5; i > -1; i--) {
        if (spaceRow[i].children[column].style.backgroundColor == 'white'){            
            row.push(spaceRow[i].children[column]);
            if (currentPlayer === playerOne) {
                row[0].style.backgroundColor = 'blue';
                if (horiz() || vert() || diagonal() || diagonal2()){
                    return alert('You Won!');
                } else if (draw()) {
                    return alert('You Draw');
                } else {
                    return currentPlayer = playerTwo;
                }
                
            } else {
                row[0].style.backgroundColor = 'green';
                if (horiz() || vert() || diagonal() || diagonal2()) {
                    return alert('You Won!');
                } else if (draw()) {
                    return alert('You Draw');
                } else {
                    return currentPlayer = playerOne;
                }
            }
        }
    }
}

function inRow(one, two, three, four){
    return (one === two && one === three && one === four && one !== 'white');
}

function vert(){
    for (let i = 0; i < 7; i++){
        for (let row = 0; row < 3; row++){
            if (inRow(spaceRow[row].children[i].style.backgroundColor, spaceRow[row+1].children[i].style.backgroundColor,
                                spaceRow[row+2].children[i].style.backgroundColor,spaceRow[row+3].children[i].style.backgroundColor)){
                return true;
            };
        }   
    }
}
function horiz(){
    for (let row = 0; row < spaceRow.length; row++){
        for (let i =0; i < 4; i++){
           if (inRow(spaceRow[row].children[i].style.backgroundColor,spaceRow[row].children[i+1].style.backgroundColor, 
                                spaceRow[row].children[i+2].style.backgroundColor, spaceRow[row].children[i+3].style.backgroundColor)){
               return true;
           }
        }
    }
}
function diagonal(){
    for(let i = 0; i < 4; i++){
        for (let row = 0; row < 3; row++){
            if (inRow(spaceRow[row].children[i].style.backgroundColor, spaceRow[row+1].children[i+1].style.backgroundColor,
                spaceRow[row+2].children[i+2].style.backgroundColor,spaceRow[row+3].children[i+3].style.backgroundColor)){
                    return true;
                }
            }
        }

}
function diagonal2(){
    for(let i = 0; i < 4; i++){
        for (let row = 5; row > 2; row--){
            if (inRow(spaceRow[row].children[i].style.backgroundColor, spaceRow[row-1].children[i+1].style.backgroundColor,
                spaceRow[row-2].children[i+2].style.backgroundColor,spaceRow[row-3].children[i+3].style.backgroundColor)){
                    return true;
            }
        }
    }
}
function draw() {
    let fullSpaces = []
    for (i = 0; i < spaceCell.length; i++) {
        if (spaceCell[i].style.backgroundColor !== 'white') {
            fullSpaces.push(spaceCell[i]);
        }
        if (fullSpaces.length === spaceCell.length) {
            return true;
        }
    }
}

resetBtn.addEventListener('click', () => {
    spaceBoard.forEach(space => {
        space.style.backgroundColor = 'white';
    });
    playerTurn.style.color = 'black';
    return (currentPlayer === 1);
});