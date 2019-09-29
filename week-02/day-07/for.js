function loop(arr) {
    let max = arr[0];
    for(let ele of arr){
        if(ele > max){
            max = ele;
        }
    }
    return max;
}
console.log(loop([8,1,3,9]));