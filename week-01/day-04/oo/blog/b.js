class Blog {
    constructor(){
        this.list = [];
    }

    add(b){
        this.list.push(b);
    }

    delete(i){
        this.list.splice(i,1);
    }

    update(i,b){
        this.list[i]=b;
    }
}

module.exports = Blog;