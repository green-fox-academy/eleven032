export const likeUnlikeReducer = (state = {}, action) => {
    switch (action.type) {
        case 'POST_VOTE':
            let obj = {
                name: action.name,
                vote: action.vote
            };
            let postId = action.postId;
            let voteList = Object.assign([], state[postId]);
            let index = voteList.findIndex(vote => vote.name === action.name);
            if (index > -1) voteList[index] = obj;
            else voteList.push(obj);
            let newState = Object.assign({}, state);
            newState[postId] = voteList;
            return newState;

        default:
            return state;
    }
}