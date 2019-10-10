// - Gather 10.000 candies!
// - Clicking the ‘Create candies’ button gives you 1 candy.
// - You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// - 10 lollipops generate 1 candy per second.
//   - Use the 🍭 emoji to display the lollipops you have
// - Display the candy producton rate in the `Candies / Second` row
// - If you press the "make candy rain" button, the candy generation should speed up 10x

const createCandy = document.querySelector('.create-candies');

const buyLollypops = document.querySelector('.buy-lollypops');

const candyMachine = document.querySelector('.candy-machine');

const lollypop = document.querySelector('.lollypops').innerHTML.slice(0, 2);

createCandy.addEventListener('click', (event) => {
    let count = parseInt(document.querySelector('.candies').innerHTML);
    count++;
    document.querySelector('.candies').innerHTML = count;
})

buyLollypops.addEventListener('click', (event) => {
    let count = parseInt(document.querySelector('.candies').innerHTML);
    if (count >= 100) {
        document.querySelector('.candies').innerHTML -= count;
        document.querySelector('.lollypops').innerHTML += lollypop;
    } else {
        console.log('No enough candies');
    }
})


setInterval(function () {
    let count = document.querySelector('.lollypops').innerHTML.length / 2;
    console.log(count);
    if (count >= 10) {
        let first = 0;
        for (let i = 0; i < count.toString().length; i++) {
            count = count / 10;
        }
        first = count;
        let n = parseInt(document.querySelector('.candies').innerHTML) + first;
    }
}, 1000);