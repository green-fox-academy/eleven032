
const Pirate = require('./pirate');
class Ship {
    constructor() {
        this.list = [];
    }


    fillShip() {
        let num = this.GetRandomNum(1, 100);

        let captain = new Pirate(true);
        this.list.push(captain);

        for (let i = 1; i < num; i++) {
            let p = new Pirate();
            this.list.push(p);
        }
    }

    GetRandomNum(Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        return (Min + Math.round(Rand * Range));
    }


    getAlive() {
        let count = 0;
        for (let a of this.list) {
            if (!a.die) {
                count += 1;
            }
        }
        return count;
    }

    status() {
        for (let a of this.list) {
            if (a.cap) {
                if (a.die) {
                    console.log(`Captains consumed ${a.count} rum, he is dead`);
                } else if (a.passout) {
                    console.log(`Captains consumed ${a.count} rum, he is passed out`)
                } else {
                    console.log(`Captains consumed ${a.count} rum, he is good!`);
                    
                }
                break;
            }
        }

        console.log(`number of alive pirates ${this.getAlive()}`);
    }
}
module.exports = Ship;