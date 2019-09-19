const BattleApp = require('./battle');
const Armada = require('./armada');

class WarApp {
    constructor(a1 = new Armada(), a2 = new Armada()){
        this.a1 = a1;
        this.a2 = a2;
    }

    fill(){
        this.a1.prepare();
        this.a2.prepare();
    }

    war(){
        let res = this.a1.war(this.a2);
        if(res === 1){
            console.log("a1 win");
        } else if(res === 2){
            console.log("a2 win");
        } else {
            console.log("all passed away");
        }
    }

}
module.exports = WarApp;