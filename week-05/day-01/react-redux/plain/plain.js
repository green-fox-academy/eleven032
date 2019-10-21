const redux = require('redux');

const initState = {
    counter: 0,
    tags: []
}

function reducer(state = initState, action) {
    console.log(action, state);

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
}

const store = redux.createStore(reducer);

const set = (amount) => {
    return {
        type: 'SET',
        amount
    }
}

const reset = () => {
    return {
        type: 'RESET',
        amount: 0
    }
}

const increase = (amount) => {
    if (amount === undefined) {
        return {
            type: 'INCREASE',
            amount: 1
        }
    } else {
        return {
            type: 'INCREASE',
            amount
        }
    }
}

const decrease = (amount) => {
    if (amount === undefined) {
        return {
            type: 'DECREASE',
            amount: 1
        }
    } else {
        return {
            type: 'DECREASE',
            amount
        }
    }
}

store.dispatch(set(6));
store.dispatch(increase());
store.dispatch(increase(2));
store.dispatch(reset());
store.dispatch(increase());
store.dispatch(decrease(4));