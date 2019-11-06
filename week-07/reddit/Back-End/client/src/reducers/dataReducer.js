import { FETCH_POSTS_PENDING, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR } from '../actions/dataActions';

export default function dataReducer(state = { pending: false, posts: [], error: null }, action) {
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
                posts: [...state.posts, ...action.posts]
            }
        case FETCH_POSTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }

        case 'UPVOTE':
            return {
                ...state,
                posts: [...action.posts]
            };
        case 'DOWNVOTE':
            return {
                ...state,
                posts: [...action.posts]
            };
        default:
            return state;
    }
}

