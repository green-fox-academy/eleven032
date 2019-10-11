console.log('fetch loaded');

let f = fetch('index.html').then(response => {
    response.text();
}).then(data => {
    console.log(data);
})



