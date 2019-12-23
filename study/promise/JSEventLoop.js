console.log(1);
    
setTimeout(function() {
  console.log(2);
});

function fn() {
    console.log(3);
    setTimeout(function() {
      console.log(4);
    }, 2000);
}

new Promise(function(resolve, reject){
    console.log(5);
    resolve();
    console.log(6);
}).then(function() {
   console.log(7);
})

fn();
console.log(8);
