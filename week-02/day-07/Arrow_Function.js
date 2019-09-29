function multiPurposeFunction(action) {
    if (action) {
        console.log(action(3));
    }
}

function exampleNonAnonymFunction(param) {
    return param * param;
}
 
function frameFunction() {
    // this function call shows an example,
    // but it is not using anonym functions

    multiPurposeFunction(exampleNonAnonymFunction);
    console.log("here1");
    
    // write your code here
    multiPurposeFunction(function (param) {
        return param * param;
    });
    console.log('here2');
    

    multiPurposeFunction((param) => {
        return param * param;
    })
    console.log('here3');
    
}

frameFunction();