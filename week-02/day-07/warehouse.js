class Warehouse {
    constructor() {
        this.itemList = [];
    }

    addItem(item) {
        this.itemList.push(item);
    }

    printItemsOfType(type) {
        let ans = []
        for(let item of this.itemList){
            if(item instanceof type){
                ans.push(item);
            }
        }
        return ans;
    }
}
class Item {
    constructor(name, price = 1) {
        this.name = name;
        this.price = price;
    }

    print() {
        console.log(`${this.name} - ${this.price}`)
    }
}
class Toy extends Item {
    constructor(name, price, color) {
        super(name, price);
        this.color = color;
    }
}
class Tool extends Item {
    constructor(name, price) {
        super(name, price);
        this.condition = 'good';
    }
}

 // this snippet is for testing your code
 const wh = new Warehouse();
 wh.addItem(new Item("vase", 30));
 wh.addItem(new Toy("pebble", undefined, "grey"));
 wh.addItem(new Toy("car", 10, "blue"));
 wh.addItem(new Tool("hammer", 25));
 console.log(wh.printItemsOfType(Item));
 console.log(wh.printItemsOfType(Toy));
 console.log(wh.printItemsOfType(Tool));