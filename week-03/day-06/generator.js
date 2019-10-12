// const store = document.getElementById('myButton');
// const reveal = document.getElementById('reveal');
// const myInput = document.getElementById('myInput');
// const container = document.getElementById('container');

// const elements = [];

// store.addEventListener('click', () => {
//     elements.push(myInput.value);
//     myInput.value = '';
// })

// elements = getElement();

// reveal.addEventListener('click', () => {
//     container.innerText = elements.next().value;
// })

// function* getElement() {
//     console.log('1');
//     yield 1;
//     console.log('2');
//     yield 2;

// }
function* f() {
    console.log('执行了！')
}

var generator = f();

setTimeout(function () {
    generator.next()
}, 2000);