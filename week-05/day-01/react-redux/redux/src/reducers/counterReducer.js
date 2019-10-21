const initState = {
    counter: 0,
    tags: []
}

function counterReducer(state = initState, action) {
    switch (action.type) {
        case 'SET':
            return {
                ...state,
                counter: action.amount
            }

        case 'INCREASE':
            return {
                ...state,
                counter: state.counter + action.amount
            }
        case 'RESET':
            return {
                ...state,
                counter: action.amount
            }
        case 'DECREASE':
            return {
                ...state,
                counter: state.counter - action.amount
            }
    }
    return state;
}

module.exports = counterReducer;