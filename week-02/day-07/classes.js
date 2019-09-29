function Garden1(width, length) {
    this.width = width;
    this.length = length;
}

Garden1.prototype.area = function () {
    return this.width * this.length;
}

Garden1.prototype.circumference = function () {
    return this.width * 2 + this.length * 2;
}

Garden1.prototype.efficiency = function () {
    return this.area() / this.circumference();
}


class Garden2 {
    constructor(width, length) {
        this.width = width;
        this.length = length;
    }
    area() {
        return this.width * this.length;
    }
    circumference() {
        return this.width * 2 + this.length * 2;
    }
    efficiency() {
        return this.area() / this.circumference();
    }
}


const g1 = new Garden1(10, 10);
console.log(g1.efficiency());
const g2 = new Garden2(5, 5);
console.log(g1.efficiency());