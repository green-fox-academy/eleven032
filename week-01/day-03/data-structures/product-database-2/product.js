map = new Map([['Eggs',200],
    ['Milk',200],
    ['Fish',400],
    ['Apples',150],
    ['Bread',50],
    ['Chicken',550]]);

    let pl = [];
    let pj = [];
    for(let [key,value] of map){
        if(value<201){
            pl.push(key);
        }
        if(value>150){
            pj.push([key,value]);
        }
    }

console.log(pl);
console.log(pj);
