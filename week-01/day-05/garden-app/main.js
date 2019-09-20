class Plant {
    constructor(color = 'unknown', waterAmount = 0) {
        this.waterAmount = waterAmount;
        this.color = color;
    }

    watering(amount, ratio) {
        this.waterAmount += (amount * ratio);
    }

    getwaterAmount() {
        return this.waterAmount;
    }
}

class Flower extends Plant {
    constructor(color) {
        super(color, 0);
        this.ratio = 0.75;
        this.type = 1;
    }

    watering(amount) {
        super.watering(amount, this.ratio);
    }

}

class Tree extends Plant {
    constructor(color) {
        super(color, 0);
        this.ratio = 0.40;
        this.type = 2;
    }

    watering(amount) {
        super.watering(amount, this.ratio);
    }
}

class Garden {
    constructor() {
        this.flist = [];
        this.tlist = [];
    }

    add(a) {
        if (a.type === 1) {
            this.flist.push(a);
        } else {
            this.tlist.push(a);
        }
    }


    getStatus() {
        for (let a of this.flist) {
            if (a.getwaterAmount() < 5) {
                console.log(`The ${a.color} Flower needs water`);
            } else {
                console.log(`The ${a.color} Flower doesnt need water`);
            }
        }
        for (let a of this.tlist) {
            if (a.getwaterAmount() < 10) {
                console.log(`The ${a.color} Tree needs water`);
            } else {
                console.log(`The ${a.color} Tree doesnt need water`);
            }
        }
    }

    getcount() {
        let count = 0;
        for (let a of this.flist) {
            if (a.getwaterAmount() < 5) {
                count++;
            }
        }

        for (let a of this.tlist) {
            if (a.getwaterAmount() < 10) {
                count++;
            }
        }

        return count;
    }
    watering(amount) {
        console.log(`Watering with ${amount}`)
        let pack = amount/this.getcount();
        for (let a of this.flist) {
            if (a.getwaterAmount() < 5) {
                a.watering(pack);
            }
        }

        for (let a of this.tlist) {
            if (a.getwaterAmount() < 10) {
                a.watering(pack);
            }
        }
    }
}



let a = new Flower('yellow');
let b = new Flower('blue');
let c = new Tree('purple');
let d = new Tree('orange');

let garden = new Garden();
garden.add(a);
garden.add(b);
garden.add(c);
garden.add(d);

garden.getStatus();
garden.watering(40);
garden.getStatus();
garden.watering(70);
garden.getStatus();