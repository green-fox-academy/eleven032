import {
  Domino
} from './domino';

function initializeDominoes(): Domino[] {
  const dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}
// let ans = initializeDominoes();
// console.log(ans);
const dominoes = initializeDominoes();

// function organizeDominoes():Domino[] {
//     let temp = [];
//     let copy = Array.from(dominoes);

//     temp.push(copy[0]);
//     copy.splice(0,1);

//     let i = 0;
//     while(copy.length!==0){
//       let j=0;
//       while(temp[i].values[1]!==copy[j].values[0]){
//         j++;
//       }
//       temp.push(copy[j]);
//       copy.splice(j,1);
//       i++;
//     }
//     return temp
//   }

//   let ans = organizeDominoes();

for (let domino of dominoes) {
  domino.printAllFields();
}