import { createBoard } from './components/board';
import { printGameGodModel,printGame } from './components/printGame';
import { click } from './components/click';
let title = '##     ##  ##  ##    ## ########  ######  ##      ## ######## ######## ########  ######## ########\n' +
    '###   ###  ##  ###   ## ##       ##    ## ##  ##  ## ##       ##       ##     ## ##       ##     ##\n' +
    '#### ####  ##  ####  ## ##       ##       ##  ##  ## ##       ##       ##     ## ##       ##     ##\n' +
    '## ### ##  ##  ## ## ## ######    ######  ##  ##  ## ######   ######   ########  ######   ########\n' +
    '##     ##  ##  ##  #### ##             ## ##  ##  ## ##       ##       ##        ##       ##   ##\n' +
    '##     ##  ##  ##   ### ##       ##    ## ##  ##  ## ##       ##       ##        ##       ##    ##\n' +
    '##     ##  ##  ##    ## ########  ######   ###  ###  ######## ######## ##        ######## ##     ##\n';
console.log(title);

let board = createBoard(10,5);
let view = printGameGodModel(10,board);
console.log(view);

console.log('--------------------------------------------------------');

click('55', board);

click('33',board);
printGame(10, board);
click('13',board);