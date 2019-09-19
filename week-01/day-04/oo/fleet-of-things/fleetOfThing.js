const Thing = require('./thing');
const Fleet = require('./fleet');

class fleetOfThing {

    constructor() {
        this.fleet = new Fleet();
    }


    add(event) {
        let tmp = new Thing(event);
        this.fleet.add(tmp);
    }

    setStatus(event) {
        for (let i = 0; i < this.fleet.getThings().length; i++) {
            if (this.fleet.getThings()[i].getName() === event) {
                this.fleet.getThings()[i].complete();
                break;
            }
        }
    }
    print() {
        for (let i = 0; i < this.fleet.getThings().length; i++) {
            if (this.fleet.getThings()[i].getCompleted()) {
                console.log(`[x] ${this.fleet.getThings()[i].getName()}`);
            } else {
                console.log(`[ ] ${this.fleet.getThings()[i].getName()}`);
            }
        }
    }
}


module.exports = fleetOfThing;