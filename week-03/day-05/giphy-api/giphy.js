const URL = 'http://api.giphy.com/v1/gifs/search?q=cute&api_key=fAdblsdwaSmYb1s8RBMJbaBSwg4Zrc7b&limit=16';

fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data.data);
        const ul = document.createElement('ul');
        const div = document.querySelector('.container');
        div.appendChild(ul);
        data.data.forEach(element => {
            let li = document.createElement('li');
            let img = document.createElement('img');
            img.setAttribute('src', element.url);
            li.appendChild(img);
            ul.appendChild(li);
        });
    });

