const initState = {
    counter: 0,
    tags: []
}

function tagReducer(state = initState, action) {
    console.log(action, state);
    switch (action.type) {
        case 'ADD_TAG':
            return {
                ...state,
                tags: [...state.tags, action.tag]
            }

        case 'REMOVE_TAG':
            return {
                ...state,
                tags: state.tags.filter((value) => {
                    return value !== action.tag
                })
            }
        case 'REMOVE_TAGS':
            return {
                ...state,
                tag: action.tag
            }

    }
    return state;
}

module.exports = tagReducer;