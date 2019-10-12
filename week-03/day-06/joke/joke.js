const url = 'http://api.icndb.com/jokes/random';
const body = document.querySelector('body');
const b = document.getElementById('b');


b.addEventListener('click', function () {
    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            let head = document.createElement('header');
            head.innerHTML = data.value.joke;
            body.appendChild(head);
        })
})
