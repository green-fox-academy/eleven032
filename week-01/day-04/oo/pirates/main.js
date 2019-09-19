const Ship = require('./ship');
const BattleApp = require('./battle');
const Armada = require('./armada');
const WarApp = require('./warapp');

const ship1 = new Ship();
const ship2 = new Ship();
const ship3 = new Ship();

ship1.fillShip();
ship2.fillShip();
ship3.fillShip();

// console.log(ship1.status());
// console.log(ship2.status());
// console.log(ship3.status());

let b = new BattleApp(ship1,ship2);
b.battle();

let war = new WarApp();
war.fill();
war.war();
