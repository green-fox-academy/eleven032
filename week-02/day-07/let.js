function foo(arr){
    const len = arr.length;
    return arr.reduce((acc,ele)=>acc+ele,0)/len;
}

console.log(foo([2,5,7,2,4,7,2]));