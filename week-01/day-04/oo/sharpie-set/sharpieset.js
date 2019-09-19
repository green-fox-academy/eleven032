class SharpieSet {
    constructor(sharpielist=[]){
        this.sharpielist = sharpielist;
    }

    add(s){
        this.sharpielist.push(s);
    }
    countUsable(){
        let count = 0;
        for(let a of this.sharpielist){
            if(a.inkAmount!==0){
                count++;
            }
        }
        return count;
    }

    removeTrash(){
        for(let i= 0;i<this.sharpielist.length;i++){
            if(this.sharpielist[i].inkAmount===0){
                // console.log('heeeeeeee');
                this.sharpielist.splice(i,1);
            }
        }
    }
}
module.exports = SharpieSet;