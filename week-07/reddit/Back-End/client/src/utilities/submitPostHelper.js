import { submitPostAction } from '../actions/dataActions';
import { upVoteAction } from '../actions/voteActions';

export default function submitPostHelper(data) {
    const newPost = {};
    newPost['title'] = data.title;
    newPost['url'] = data.url;

    return async (dispatch) => {
        await fetch(`http://localhost:3000/posts`, {
            'method': 'post',
            'headers': {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify(newPost)
        });
        
        
        let res = await fetch(`http://localhost:3000/posts`);
        let data = await res.json();
        console.log(data.posts);
        
        dispatch(upVoteAction(data.posts));
    }
}


