let headers = new Headers()
headers.set('Authorization', 'Basic ' + btoa('eleven032' + ":" + '70bf69d08f00d6048ba055b8d0b46e501f4883bd'));



const div = document.getElementById('container');
const b = document.getElementById('b');

b.addEventListener('click', function () {
    fetch('https://api.github.com/orgs/green-fox-academy/repos', { headers })
        .then(resp => resp.json())
        .then(data => console.log(data));

})

function* generator(list) {

}