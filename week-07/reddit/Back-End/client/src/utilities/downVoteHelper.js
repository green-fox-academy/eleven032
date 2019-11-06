
import { downVoteAction } from '../actions/voteActions';
export default function downVoteHelper(id) {
    return async (dispatch) => {
        await fetch(`http://localhost:3000/posts/${id}/downvote`, {
            method: 'put',
            header: {
                'Content-Type': 'application/json'
            }
        })
        let res = await fetch(`http://localhost:3000/posts`);
        let data = await res.json();
        dispatch(downVoteAction(data.posts));
    }
}