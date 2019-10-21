const redux = require('redux');

const initState = {
    name: ''
}

function reducer(state = initState, action) {
    console.log(action, state);//first time will have plain state

    if (action.type === 'change_name') {
        return {
            ...state,
            name: action.name
        }
    }
    return state;
}

const store = redux.createStore(reducer);


//action creator
const changeNameAction = (name) => {
    return { type: 'change_name', name }
}


store.dispatch(changeNameAction('Arthur'));
store.dispatch(changeNameAction('Hellen'));