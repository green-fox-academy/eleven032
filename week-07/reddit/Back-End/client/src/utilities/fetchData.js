import { fetchPostsPending, fetchPostsSuccess, fetchPostsError } from '../actions/dataActions';

const fetchData = () => {
    return dispatch => {
        dispatch(fetchPostsPending());
        fetch('http://localhost:3000/posts')
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(fetchPostsSuccess(res.posts));
                return res.posts;
            })
            .catch(error => {
                dispatch(fetchPostsError(error));
            })
    }
}

export {fetchData}