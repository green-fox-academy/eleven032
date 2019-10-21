// const initState = {
//     tags: []
// }

function tagReducer(state = ['blue', 'bold', 'hipster'], action) {
    // console.log(action, state);
    switch (action.type) {
        case 'ADD_TAG':
            return [...state, action.tag]

        case 'REMOVE_TAG':
            return state.filter((value) => {
                return value !== action.tag
            })

        case 'REMOVE_TAGS':
            return action.tag

        case 'DISPLAY':
            return state

        default:
            return state;
    }

}

export default tagReducer;