console.log('Star war working');
const b = document.querySelector('button');

let keyword = '';
b.addEventListener('click', () => {
    keyword = document.querySelector('#cName').value;
    const url = 'https://swapi.co/api/people/?name=' + keyword;
    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            const ul = document.querySelector('ul');
            const ul2 = document.querySelector('#ul2');
            const res = data.results;
            res.forEach(element => {
                let li = document.createElement('li');
                li.innerText = element.name;
                ul.appendChild(li);
                li.addEventListener('click', () => {
                    ul2.innerHTML = '';
                    let list = element.films;
                    list.forEach(element => {
                        fetch(element).then(resp => resp.json()).then(data => {
                            let title = data.title;

                            let li2 = document.createElement('li');

                            li2.innerText = title;

                            ul2.appendChild(li2);

                        });
                    })

                })
            });
        });
});



// fetch(url)
//     .then(resp => resp.json())
//     .then(data => {
//         const ul = document.querySelector('ul');
//         // console.log(data);
//         for (let i in data) {
//             if (i === 'name') {
//                 let li = document.createElement('li');
//                 li.innerText = `${i}: ${data[i]}`;
//                 ul.appendChild(li);
//                 li.addEventListener('click', () => {
//                     data.films.forEach(element => {
//                         console.log(element);

//                     });
//                 });
//             } else {
//                 let li = document.createElement('li');
//                 li.innerText = `${i}: ${data[i]}`;
//                 ul.appendChild(li);
//             }

//         }
//     });


