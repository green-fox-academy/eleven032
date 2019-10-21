const initState = {
    name: ''
}

function nameReducer(state = initState, action) {
    if (action.type === 'change_name') {
        return {
            ...state,
            name: action.name
        }
    }
    return state;
}

export default nameReducer;