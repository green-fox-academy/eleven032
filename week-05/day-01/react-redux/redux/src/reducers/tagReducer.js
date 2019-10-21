// const initState = {
//     tags: []
// }

function tagReducer(state = [], action) {
    console.log(action, state);
    switch (action.type) {
        case 'ADD_TAG':
            return [...state.tags, action.tag]


        case 'REMOVE_TAG':
            return state.tags.filter((value) => {
                return value !== action.tag
            })

        case 'REMOVE_TAGS':
            return action.tag

        default:
            return state;

    }

}

export default tagReducer;