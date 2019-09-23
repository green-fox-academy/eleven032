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
var Animal = /** @class */ (function () {
    function Animal(nickName, name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.nickName = nickName;
    }
    Animal.prototype.getName = function () {
        return this.name;
    };
    Animal.prototype.getNickName = function () {
        return this.nickName;
    };
    Animal.prototype.getAge = function () {
        return this.age;
    };
    Animal.prototype.getGender = function () {
        return this.gender;
    };
    Animal.prototype.print = function () {
        console.log(this.getNickName() + " is a " + this.getAge() + " years old " + this.getGender() + " " + this.getName() + ", and is breeding by " + this.breed());
    };
    return Animal;
}());
var Reptile = /** @class */ (function (_super) {
    __extends(Reptile, _super);
    function Reptile(nickName, name, age, gender) {
        return _super.call(this, nickName, name, age, gender) || this;
    }
    Reptile.prototype.breed = function () {
        return 'laying eggs.';
    };
    return Reptile;
}(Animal));
exports.Reptile = Reptile;
var Mammal = /** @class */ (function (_super) {
    __extends(Mammal, _super);
    function Mammal(nickName, name, age, gender) {
        return _super.call(this, nickName, name, age, gender) || this;
    }
    Mammal.prototype.breed = function () {
        return 'pushing miniature versions out.';
    };
    return Mammal;
}(Animal));
exports.Mammal = Mammal;
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(nickName, name, age, gender) {
        return _super.call(this, nickName, name, age, gender) || this;
    }
    Bird.prototype.breed = function () {
        return 'laying eggs.';
    };
    return Bird;
}(Animal));
exports.Bird = Bird;
