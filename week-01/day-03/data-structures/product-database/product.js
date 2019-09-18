let map = new Map([['Eggs',200],
    ['Milk',200],
    ['Fish',400],
    ['Apples',150],
    ['Bread',50],
    ['Chicken',550]]);

    console.log("fish price is: "+map.get('Fish'));
    let sum = 0;
    let exp = '';
    let cheap = '';
    let count = 0;
    let price = [];
    let max= 0;
    let min= 1000;
    for(let [key,value] of map){
        if(value>max){
            max = value;
            exp = key;
        }

        if(value<min){
            min = value;
            cheap = key;
        }

        if(value<=300){
            count++;
        }

        if(value == 125){
            price.push(key);
        }

        sum+=value;
    }

console.log("the most expensive product is: "+exp);
console.log("the avg price is: "+sum/map.size);
console.log("There has "+ count+" products below 300");
console.log("125 product is: "+price);
console.log("The cheapest product :"+cheap);