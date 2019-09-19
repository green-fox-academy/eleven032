class Station {
    constructor(gasAmount = 0) {
        this.gasAmount = gasAmount;
    }
    refill(car) {
        this.gasAmount -= car.capacity;
        car.gasAmount += car.capacity;
    }
}

module.exports = Station;