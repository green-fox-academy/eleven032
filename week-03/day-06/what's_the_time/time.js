const h1 = document.getElementById('start');
const button = document.getElementById('b');
const h2 = document.getElementById('end');
const dateStart = new Date();

window.onload = function () {
    h1.innerText = `Script loaded at ${dateStart.toString()}`;
}


//first solution
// button.addEventListener('click', function () {
//     let dateEnd = new Date();
//     let dateDiff = dateEnd.getTime() - dateStart.getTime();
//     let leave1 = dateDiff % (24 * 3600 * 1000)

//     let leave2 = leave1 % (3600 * 1000)

//     let leave3 = leave2 % (60 * 1000)
//     let seconds = Math.round(leave3 / 1000);
//     h2.innerText = `Button clicked after ${seconds} seconds`;
// })




//second solution
// let test = function (button) {
//     return new Promise((resolve, reject) => {
//         let dateEnd;
//         button.addEventListener('click', function () {
//             dateEnd = new Date();
//             resolve(dateEnd);
//         })
//     });
// }

// test(button).then(dateEnd => {
//     let dateDiff = dateEnd.getTime() - dateStart.getTime();
//     let leave1 = dateDiff % (24 * 3600 * 1000)
//     let leave2 = leave1 % (3600 * 1000)
//     let leave3 = leave2 % (60 * 1000)
//     let seconds = Math.round(leave3 / 1000);
//     h2.innerText = `Button clicked after ${seconds} seconds`;
// })

let test = async function (button) {
    let p = await new Promise((resolve, reject) => {
        let dateEnd;
        button.addEventListener('click', function () {
            dateEnd = new Date();
            resolve(dateEnd);
        })
    });

    let dateDiff = p.getTime() - dateStart.getTime();
    let leave1 = dateDiff % (24 * 3600 * 1000)
    let leave2 = leave1 % (3600 * 1000)
    let leave3 = leave2 % (60 * 1000)
    let seconds = Math.round(leave3 / 1000);
    h2.innerText = `Button clicked after ${seconds} seconds`;
}

test(button);