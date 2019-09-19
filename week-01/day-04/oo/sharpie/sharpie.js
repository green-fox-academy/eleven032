class Sharpie{
    constructor(color='unknown',width=0.0,inkAmount=100){
        this.color=color;
        this.width = width;
        this.inkAmount =inkAmount;
    }

    use(){
        this.inkAmount-=1;
    }

}

module.exports = Sharpie;

const a = new Sharpie('black',24.4);
a.use();
console.log(a.inkAmount);