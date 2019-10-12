
function createLists() {
    createLiWithContent('here1');
    createLiWithContent('here2');
    createLiWithContent('here3');
}

setTimeout(() => { createLiWithContent('when?') }, 100);

document.getElementById('myButton').addEventListener('click', () => {
    createLiWithContent(document.getElementById('textInput').value);

})
getData();
async function getData() {
    let resp = await fetch('https://www.google.com');
    let result = await resp.json();
    createLiWithContent(result);
}

function createLiWithContent(content) {
    const li = document.createElement('li');
    li.innerText = content;
    document.getElementById('myList').appendChild(li);
}