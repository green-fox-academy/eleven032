const Ship = require('./ship');
const BattleApp = require('./battle');
class Armada {
    constructor() {
        this.list = [];
    }

    prepare() {
        let num = this.GetRandomNum(0, 100);
        for (let i = 1; i < num; i++) {
            let tmp = new Ship();
            tmp.fillShip();
            this.list.push(tmp);
        }
    }
    GetRandomNum(Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        return (Min + Math.round(Rand * Range));
    }

    war(otherArmada){
        let i = 0;
        let j = 0;
        while(i!==this.list.length&&j!==otherArmada.list.length){
            let battle = new BattleApp(this.list[i], otherArmada.list[j]);
            let res = battle.battle();
            if(res===1){
                j++;
            } else if(res ===2){
                i++;
            } else {
                i++;
                j++;
            }
        }

        if(i===this.list.length&&j===otherArmada.list.length){
            return 3;
        } else if(j===otherArmada.list.length){
            return 1;
        } else {
            return 2;
        }
    }
}

module.exports = Armada;