let aj = [1,2,3,4,5,6,7]

let temp = [];
for(let i= aj.length-1;i>=0;i--){
    temp.push(aj[i]);
}

console.log(temp);
aj.reverse();
console.log(aj);