const Ship = require('./ship');

class BattleApp {
    constructor(ship1 = new Ship(), ship2 = new Ship()) {
        this.ship1 = ship1;
        this.ship2 = ship2;
    }

    battle() {
        if (this.ship1.getAlive() > this.ship2.getAlive()) {
            console.log("ship1 win");
            return 1;
        } else if (this.ship1.getAlive() < this.ship2.getAlive()) {
            console.log("ship2 win");
            return 2;
        } else {
            console.log('all dead');
            return 3;
        }
    }

}
module.exports = BattleApp;