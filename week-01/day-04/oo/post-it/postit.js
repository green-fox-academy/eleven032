class PostIt  {

    constructor(backgroundColor = 'unknown', text  = 'unknown', textColor = 'unknown') {
        this.backgroundColor = backgroundColor;
        this.text = text;
        this.textColor = textColor;
    }

}


const first = new PostIt('orange', 'Idea 1', 'blue');
const second = new PostIt('pink', 'Awesome', 'black');
const third = new PostIt('yellow', 'Superb', 'green');

