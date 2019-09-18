let map = new Map([['William A.Lathan','405-709-1865'],
    ['John K.Miller','402-247-8568'],
    ['Hortensia E.Foster','606-481-6467'],
    ['Amanda D.Newland','319-243-5613'],
    ['Brooke P.Askew','307-687-2982']]);


console.log(map.get('John K.Miller'));
for(let [key, value] of map){
    if(value === '307-687-2982'){
        console.log(key);
    }
 
}
for(let [key, value] of map){
    if(key==='Chris E.Myers'){
        console.log(value)
    }
}