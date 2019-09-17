'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

var todoText = " - Buy milk\n";
todoText = "My todo:\n" + todoText;
todoText = todoText + " - Download games";
todoText = todoText + "\n     - Diablo";
console.log(todoText);