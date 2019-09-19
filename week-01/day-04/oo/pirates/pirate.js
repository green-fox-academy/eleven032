class Pirate {
    constructor(cap = false) {
        this.count = 0;
        this.die = false;
        this.cap = cap;
        this.passout = false;
    }
    
    drinkSomeRum() {
        this.count += 1;
    }

    howsItGoingMate() {
        if (this.count > 4) {
            console.log("Arghh, I'ma Pirate. How d'ya d'ink its goin?");
            this.passout = true;
        } else {
            console.log("Pour me anudder!");
        }
    }

    brawl(x) {
        if (!die||!this.passout) {
            let num = GetRandomNum(1, 3);
            if (num === 1) {
                this.die();
            } else if (num === 2) {
                x.die();
            } else {
                this.die();
                x.die();
            }
        } else {
            console.log("He can not do anything now");
        }

    }

    GetRandomNum(Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        return (Min + Math.round(Rand * Range));
    }

    die() {
        this.die = true;
    }

}
module.exports = Pirate;