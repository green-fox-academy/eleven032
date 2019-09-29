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

module.exports = Garden2;