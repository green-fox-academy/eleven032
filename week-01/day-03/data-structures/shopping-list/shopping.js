let p = new Map([['Milk',	1.07],
    ['Rice',	1.59],
    ['Eggs',	3.14],
    ['Cheese',	12.60],
    ['Chicken Breasts',	9.40],
    ['Apples',	2.31],
    ['Tomato',	2.58],
    ['Potato',	1.75],
    ['Onion',	1.10]]);

let bob = new Map([['Milk',	3],
    ['Rice',	2],
    ['Eggs',	2],
    ['Cheese',	1],
    ['Chicken Breasts',	4],
    ['Apples',	1],
    ['Tomato',	2],
    ['Potato',	1]]);

let alice = new Map([['Rice',	1],
    ['Eggs',	5],
    ['Chicken Breasts',	2],
    ['Apples',	1],
    ['Tomato',	10]]);

let bobpay=0;
let alicepay=0;
let bobnum = 0;
let alicenum=0;
for(let [key,value] of bob){
    bobpay += value*p.get(key);
    bobnum+=value;
}
for(let [key,value] of alice){
    alicepay += value*p.get(key);
    alicenum+=value;
}
console.log(bobpay);
console.log(alicepay);

if(bob.get('Rice')>alice.get('Rice')>0){
    console.log('bob is rice guy');
} else {
    console.log('alice is rice guy');
}


if(bob.get('Potato')>alice.get('Potato')>0){
    console.log('bob is Potato guy');
} else {
    console.log('alice is Potato guy');
}

if(bob.size>alice.size){
    console.log('bob is shopping guy');
} else {
    console.log('alice is shopping guy');
}

if(bobnum>alicenum){
    console.log('bob is num guy');
} else {
    console.log('alice is num guy');
}