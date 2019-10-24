// const initState = {
//     counter: 0,
//     tags: []
// }

function counterReducer(state = 0, action) {
    switch (action.type) {
        case 'SET':
            return action.amount


        case 'INCREASE':
            return state + action.amount

        case 'RESET':
            return action.amount

        case 'DECREASE':
            return state - action.amount

        case 'ASYNC_INCREASE':
            return state + action.amount

        default:
            return state;
    }

}

export default counterReducer;