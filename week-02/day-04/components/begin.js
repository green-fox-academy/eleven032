module.exports = function () {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let answer = userInput();

    function userInput() {
        rl.question('How big the gameplay should be? Please type a number:', (answer) => {
            if (!isNaN(answer) && answer > 0) {
                console.log(`The number is ${answer}`);
                rl.close();
                return answer;
                
            } else {
                console.log(`Invalid Input! Should be a number`);
                userInput();
            }

        });
    }

    return answer;

}







