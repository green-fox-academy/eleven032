import { Cell } from "./cell";
function printGame(boardSize: number, board: {}):number[][] {
  let list:number[][]=[];
  for (let row = 0; row < boardSize; row++) {
      list.push([]);
    for (let column = 0; column < boardSize; column++) {
      let id = row + "" + column;
      let cell = board[id];
      if (cell.mined) {
        list[row][column] = -1;
      } else if (cell.neighborMineCount !== 0) {
        list[row][column] = cell.neighborMineCount;
      } else {
        list[row][column] = 0;
      }
    }
  }
  return list;
}
export{printGame};