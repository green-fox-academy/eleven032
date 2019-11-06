import { upVoteAction } from '../actions/voteActions';
export default function upVoteHelper(id) {
    return async (dispatch) => {
        await fetch(`http://localhost:3000/posts/${id}/upvote`, {
            method: 'put',
            header: {
                'Content-Type': 'application/json'
            }
        })
        let res = await fetch(`http://localhost:3000/posts`);
        let data = await res.json();
        dispatch(upVoteAction(data.posts));
    }
}