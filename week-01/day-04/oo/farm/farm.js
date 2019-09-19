const Animal = require('../animal/animal')
class Farm {
    constructor(list = [], slot = 0) {
        this.list = list;
        this.slot = slot-list.length;
    }

    breed() {
        if (this.slot > 0) {
            let a = new Animal();
            this.list.push(a);
            this.slot-=1
        } else {
            console.log('No animal');
        }
    }

    slaughter() {
        let least = 0;
        let i = 1
        for (i; i < this.list.length; i++) {
            if (least.hunger > this.list[i].hunger) {
                least = i;
            }
        }
        this.list.splice(least,1);
        this.slot+=1;

    }
}
module.exports = Farm;