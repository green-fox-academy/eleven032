function multiPurposeFunction(action) {
    if (action) {
        console.log(action('John', 'Smith'));
        console.log(action('', 'Bond'));
    }
}

function frameFunction() {
    // Write your code here
    multiPurposeFunction(function(firstName, lastName){
        return firstName===''?lastName:firstName+' '+lastName;
    });
    multiPurposeFunction((firstName, lastName)=>{
        return firstName===''?lastName:firstName+' '+lastName;
    });
}

frameFunction();