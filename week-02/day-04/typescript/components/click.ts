import {getNeighbors} from './board';
import {printGame} from './printGame';
let click = function(id: string, board: {}) {
  let cell = board[id];
  if (cell.opened === true) {
    console.log("already opened");
  } else if (cell.mined) {
    console.log("game over");
  } else {
    cell.opened = true;
    if (cell.neighborMineCount === 0) {
      let  neighbors = getNeighbors(id);
      for(let i = 0;i<neighbors.length;i++){
        let neighbor = neighbors[i];
        if(typeof board[neighbor]!=='undefined'&&!board[neighbor].opened){
          click(neighbor, board);
          
        }
      } 
    }
    
  }
};
export{click};