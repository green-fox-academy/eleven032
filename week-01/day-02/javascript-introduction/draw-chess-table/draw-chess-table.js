// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % % 
//  % % % %
//
let line1 = '% % % % ';
let line2 = ' % % % %';
for(let i=0;i<8;i++){
    if(i%2!==0){
        console.log(line1);
    } else {
        console.log(line2);
    }
}