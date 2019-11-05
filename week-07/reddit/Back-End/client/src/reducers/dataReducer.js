import { FETCH_POSTS_PENDING, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR } from '../actions/dataActions';

const initialState = {
    pending: false,
    posts: [],
    error: null
}

export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                pending: false,
                products: action.posts
            }
        case FETCH_POSTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}

