export const FETCH_POSTS_PENDING = 'FETCH_POSTS_PENDING';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';


const fetchPostsPending = () => {
    return {
        type: FETCH_POSTS_PENDING
    }
}

const fetchPostsSuccess = (posts) => {
    return {
        type: FETCH_POSTS_SUCCESS,
        posts: posts
    }
}

const fetchPostsError = (error) => {
    return {
        type: FETCH_POSTS_ERROR,
        error: error
    }
}

const submitPostAction = (posts) => {
    return {
        type: 'SUBMIT',
        posts: posts
    }
}
export { fetchPostsPending, fetchPostsSuccess, fetchPostsError, submitPostAction }