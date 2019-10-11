console.log('nyt working now');

const url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=moon+landing+by+Apollo+11&api-key=f79iDA609bpWNx8wfIGtjhBfMkUHnOln';

fetch(url)
    .then(resp => resp.json()).then(data => {

        const article = data.response.docs
        console.log(article);
        const div = document.querySelector('.container');


        article.forEach(element => {
            let a = document.createElement('a');
            a.setAttribute('href', element.web_url);
            a.innerText = 'Link';
            let headline = document.createElement('li');
            headline.innerText = `Headline: ${element.headline.main}`;
            let snippet = document.createElement('li');
            snippet.innerText = `Snippet: ${element.snippet}`;
            let date = document.createElement('li');
            date.innerHTML = `Date: ${element.pub_date}`;
            // console.log(date);
            let ul = document.createElement('ul');



            ul.appendChild(headline);

            ul.appendChild(snippet);

            ul.appendChild(date);

            div.appendChild(ul);
            div.appendChild(a);

        });
    });