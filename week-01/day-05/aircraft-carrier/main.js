/**
 *
 *
 * @class Aircraft
 */
class Aircraft {

  /**
   *Creates an instance of Aircraft.
   * @param {number} [ammo=0]
   * @param {*} damage
   * @param {*} type
   * @memberof Aircraft
   */
  constructor(ammo = 0, damage, type) {
    this.ammo = ammo;
    this.damage = damage;
    this.type = type;
    this.architecture = a; 
  }

  fight() {
    let dealt = this.damage * this.ammo;
    this.ammo = 0;
    return dealt;
  }

  refill(num, max) {
    if (num <= (max - this.ammo)) {
      this.ammo += num;
      return 0;
    } else {
      let res = num - (max - this.ammo);
      this.ammo = max;
      return res;
    }
  }

  getType() {
    return this.type;
  }

  getStatus() {
    return `Type ${this.type}, Ammo: ${this.ammo}, Base Damage: ${this.damage}, All Damage: ${this.damage * this.ammo}`
  }

  isPriority() {
    return this.type === 'F35' ? true : false;
  }
}

class F16 extends Aircraft {
  constructor() {
    super(8, 30, 'F16');
    this.max = 8;
  }

  refill(num) {
    return super.refill(num, this.max);
  }
}

/**
 *
 *
 * @class F35
 * @extends {Aircraft}
 */
class F35 extends Aircraft {
  constructor() {
    super(12, 50, 'F35');
    this.max = 12;
  }

  refill(num) {
    return super.refill(num, this.max);
  }
}


class Carrier {
  constructor(totalammo, hp) {
    this.list = [];
    this.totalammo = totalammo;
    this.hp = hp;
  }

  add(a) {
    this.list.push(a);
  }

  fill() {
    if (this.totalammoneeded() > this.totalammo) {
      for (let a of this.list) {
        if (this.totalammo !== 0) {
          if (a.isPriority()) {
            this.totalammo = a.refill(this.totalammo);
          }
        } else {
          console.log('Run out of the ammo!!!');
        }
      }

      for (let a of this.list) {
        if (this.totalammo !== 0) {
          if (a.getType() === 'F16') {
            this.totalammo = a.refill(this.totalammo);
          }
        } else {
          console.log('Run out of the ammo!!!');
        }
      }

    } else {
      for (let a of this.list) {
        this.totalammo = a.refill(this.totalammo);
      }
    }
  }

  fight(c) {
    if (c.hp === 0) {
      console.log('It\'s a dead jim!');
    } else {
      if (c.hp - this.gettotalDMG() <= 0) {
        c.hp = 0;
        this.getTotalDMG();
      } else {
        c.hp -= this.getTotalDMG();
      }


    }
  }

  getTotalDMG() {
    let dmg = 0;
    for (let a of this.list) {
      dmg += a.fight();
    }
    return dmg;
  }

  totalammoneeded() {
    let res = 0;
    for (let a of this.list) {
      res += (a.max - a.ammo);
    }
    return res;
  }

  gettotalDMG() {
    let res = 0;
    for (let a of this.list) {
      res += (a.ammo * a.damage);
    }
    return res;
  }


  getStatus() {
    if (this.hp !== 0) {
      let all = '';
      for (let a of this.list) {
        all += a.getStatus();
        all += '\n';
      }
      return `HP: ${this.hp}, Aircraft count: ${this.list.length}, Ammo Storage: ${this.totalammo}, Total damage: ${this.gettotalDMG()} \n Aircrafts: \n ${all}`

    } else {
      return 'It\'s dead Jim :(';
    }

  }
}



let a = new F16();
let b = new F35();
let c = new F16();
let d = new F35();
let e = new F35();


let a1 = new F16();
let b1 = new F16();
let c1 = new F16();
let d1 = new F16();
let e1 = new F35();

let car1 = new Carrier(2300, 5000);
car1.add(a);
car1.add(b);
car1.add(c);
car1.add(d);
car1.add(e);
console.log(car1.getStatus());

console.log('------------------------------------------------------');

let car2 = new Carrier(2000, 3000);
car2.add(a1);
car2.add(b1);
car2.add(c1);
car2.add(d1);
car2.add(e1);
console.log(car2.getStatus());
console.log('------------------------------------------------------');
console.log('------------------------------------------------------');
car1.fight(car2);
console.log(car2.getStatus());
// console.log('------------------------------------------------------');
// console.log('------------------------------------------------------');
// car1.fight(car2);
// console.log(car2.getStatus());
// console.log('------------------------------------------------------');
// console.log('------------------------------------------------------');
// console.log('------------------------------------------------------');
// console.log(car1.getStatus());
// car1.fill();
// console.log(car1.getStatus());
// console.log('------------------------------------------------------');
// console.log('------------------------------------------------------');
// console.log('------------------------------------------------------');
// car1.fight(car2);
// car1.fight(car2);
car1.fill();
// console.log('after firsttttttttttttttttttttttttt fight');
// console.log(car2.getStatus());

car1.fight(car2);
// console.log('after secccccccccccccccccccccccccccccccccccc fight');
console.log(car2.getStatus());