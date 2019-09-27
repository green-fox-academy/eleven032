import { Cell } from "./cell";

function createBoard(boardSize: number, mineCount: number): {} {
  let board: Object = {};
  for (let row = 0; row < boardSize; row++) {
    for (let column = 0; column < boardSize; column++) {
      let cell:Cell = new Cell(row, column, false, false, 0);
    //   cell.id = row + "" + column;
      board[row + "" + column] = cell;
    }
  }
  board = randomlyAssignMines(board, mineCount, boardSize);
  board = calculateNeighborMineCounts(board, boardSize);
  return board;
}

let randomlyAssignMines = function(
  board: {},
  mineCount: number,
  boardSize: number
) {
  let mineCooridinates: string[] = [];
  for (let i = 0; i < mineCount; i++) {
    let randomRowCoordinate = getRandomInteger(0, boardSize);
    let randomColumnCoordinate = getRandomInteger(0, boardSize);
    let cell = randomRowCoordinate + "" + randomColumnCoordinate;
    while (mineCooridinates.indexOf(cell) > -1) {
      randomRowCoordinate = getRandomInteger(0, boardSize);
      randomColumnCoordinate = getRandomInteger(0, boardSize);
      cell = randomRowCoordinate + "" + randomColumnCoordinate;
    }
    mineCooridinates.push(cell);
    board[cell].mined = true;
  }
  return board;
};

let getRandomInteger = function(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
};

let calculateNeighborMineCounts = function(board: {}, boardSize: number) {
  let cell: Cell;
  let neighborMineCount = 0;
  for (let row = 0; row < boardSize; row++) {
    for (let column = 0; column < boardSize; column++) {
      let id = row + "" + column;
      cell = board[id];
      if (!cell.mined) {
        let neighbors = getNeighbors(id);
        neighborMineCount = 0;
        for (let i = 0; i < neighbors.length; i++) {
          neighborMineCount += isMined(board, neighbors[i]);
        }
        cell.neighborMineCount = neighborMineCount;
      }
    }
  }
  return board;
};

let isMined = function(board: {}, id: string) {
  let cell = board[id];
  let mined = 0;
  if (typeof cell !== "undefined") {
    mined = cell.mined ? 1 : 0;
  }
  return mined;
};

let getNeighbors = function(id: string): string[] {
  let row = parseInt(id[0]);
  let column = parseInt(id[1]);
  let neighbors = [];
  neighbors.push(row - 1 + "" + (column - 1));
  neighbors.push(row - 1 + "" + column);
  neighbors.push(row - 1 + "" + (column + 1));
  neighbors.push(row + "" + (column - 1));
  neighbors.push(row + "" + (column + 1));
  neighbors.push(row + 1 + "" + (column - 1));
  neighbors.push(row + 1 + "" + column);
  neighbors.push(row + 1 + "" + (column + 1));

  for (let i = 0; i < neighbors.length; i++) {
    if (neighbors[i].length > 2) {
      neighbors.splice(i, 1);
      i--;
    }
  }
  return neighbors;
};

export { createBoard };
