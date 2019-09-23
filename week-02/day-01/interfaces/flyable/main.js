"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var zoo_1 = require("../zoo/zoo");
var Vehicle = /** @class */ (function () {
    function Vehicle(maker, year, power) {
        this.maker = maker;
        this.year = year;
        this.power = power;
    }
    return Vehicle;
}());
var Helicopter = /** @class */ (function (_super) {
    __extends(Helicopter, _super);
    function Helicopter(maker, year, power) {
        return _super.call(this, maker, year, power) || this;
    }
    Helicopter.prototype.land = function () {
        console.log('Helicopter can land in a wide place');
    };
    Helicopter.prototype.fly = function () {
        console.log('Can fly');
    };
    Helicopter.prototype.takeOff = function () {
        console.log('Can take off from everywhere');
    };
    return Helicopter;
}(Vehicle));
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bird.prototype.breed = function () {
        return 'lay eggs';
    };
    Bird.prototype.land = function () {
        console.log('Bird can land everywhere!');
    };
    Bird.prototype.fly = function () {
        console.log('Can fly');
    };
    Bird.prototype.takeOff = function () {
        console.log('Can take off from everywhere');
    };
    return Bird;
}(zoo_1.Animal));
var bird = new Bird('Hier', 'Parrot', 5, 'male');
var h = new Helicopter('Honda', 2010, '500');
console.log(bird.breed());
h.fly();
