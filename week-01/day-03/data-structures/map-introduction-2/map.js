let map = new Map([['978-1-60309-452-8', 'A Letter to Jo'],
['978-1-60309-459-7', 'Lupus'],
['978-1-60309-444-3', 'Red Panda and Moon Bear'],
['978-1-60309-461-0', 'The Lab']]);


// console.log(map.get(978-1-60309-452-8));
 
let bar = ' (ISBN: ';
// console.log(bar);
for(let [key, value] of map){
    console.log(value+bar+key+")");
}

map.delete('978-1-60309-444-3');

for(let [key, value] of map){
    if(value==='The Lab'){
        map.delete(key);
    }
}

map.set('978-1-60309-450-4','They Called Us Enemy');
map.set('978-1-60309-453-5','Why Did We Trust Him?');

for(let [key, value] of map){
    if(key==='478-0-61159-424-8'){
        console.log(value);
    } else {
        console.log("No such thing");
    }
}

let flag = false
for(let [key, value] of map){
    if(key==='978-1-60309-453-5'){
        flag = true;
        console.log(value);
    }
}

if(flag){
    console.log("here it is");
} else {
    console.log("Not exist");
}