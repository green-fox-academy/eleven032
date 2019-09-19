'use strict';

const Domino = require('./domino');

function initializeDominoes() {
  const dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}

const dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

function organizeDominoes() {
  let temp = [];
  let copy = Array.from(dominoes);

  temp.push(copy[0]);
  copy.splice(0,1);
  
  let i = 0;
  while(copy.length!==0){
    let j=0;
    while(temp[i].values[1]!==copy[j].values[0]){
      j++;
    }
    temp.push(copy[j]);
    copy.splice(j,1);
    i++;
  }
  return temp
}

let ans = organizeDominoes();
console.log(ans);