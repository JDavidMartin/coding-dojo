function Game() {
}

Game.prototype.meaningOfLife = () => {
    console.log("Hello, world!");
    return 42;
}

function simulate(before) {
    const board = before.split("\n").map(row => row.split(''));
    const boardSize = board.length;
    function getCell(board, row, column) {
        const r = board[row];
        if (!r) {
            return '';
        } else {
            return r[column] || '';
        }
    }
    
    const newBoard = board.map((fullRow, row) => {
        return fullRow.map((cell, column) => {
            let aliveNeighbours = 0;
            if (getCell(board, row, column+1) === 'X') aliveNeighbours++;
            if (getCell(board, row, column-1) === 'X') aliveNeighbours++;
            if (getCell(board, row-1, column) === 'X') aliveNeighbours++;
            if (getCell(board, row+1, column) === 'X') aliveNeighbours++;
            
            if (aliveNeighbours < 2) {
                return ' ';
            }
            
            return cell;
        }).join('');
    }).join('\n');
    
    return newBoard;
    //const row = Array.from(new Array(boardSize), () => ' ').join('');

    // const board = Array.from(new Array(boardSize), (_, index) => {
    //     const old = rows[index];
    //     const numAlive = old.split('').filter(cell => cell === 'X').length;
    // 
    //     if (numAlive === 3) {
    //         return ' X ';
    //     } else {
    //         return ' '.repeat(boardSize);
    //     }
    // }).join("\n");
    // return board;
}
