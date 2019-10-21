// import tagReducer from './reducers/tagReducer';

const tagReducer = require('./reducers/tagReducer');
// import { add, removeTag, removeTags } from './actions/tagActions'

const redux = require('redux');

const initState = {
    counter: 0,
    tags: []
}

function reducer(state = initState, action) {
    // console.log(action, state);
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

// function tagReducer(state = initState, action) {
//     console.log(action, state);
//     switch (action.type) {
//         case 'ADD_TAG':
//             return {
//                 ...state,
//                 tags: [...state.tags, action.tag]
//             }

//         case 'REMOVE_TAG':
//             return {
//                 ...state,
//                 tags: state.tags.filter((value) => {
//                     return value !== action.tag
//                 })
//             }
//         case 'REMOVE_TAGS':
//             return {
//                 ...state,
//                 tag: action.tag
//             }

//     }
//     return state;
// }

const rootReducer = redux.combineReducers({
    reducer,
    tagReducer
});
const store = redux.createStore(rootReducer)

// const set = (amount) => {
//     return {
//         type: 'SET',
//         amount
//     }
// }

// const reset = () => {
//     return {
//         type: 'RESET',
//         amount: 0
//     }
// }

// const increase = (amount) => {
//     if (amount === undefined) {
//         return {
//             type: 'INCREASE',
//             amount: 1
//         }
//     } else {
//         return {
//             type: 'INCREASE',
//             amount
//         }
//     }
// }

// const decrease = (amount) => {
//     if (amount === undefined) {
//         return {
//             type: 'DECREASE',
//             amount: 1
//         }
//     } else {
//         return {
//             type: 'DECREASE',
//             amount
//         }
//     }
// }

store.dispatch({ type: 'ADD_TAG', tag: 'blue' });
store.dispatch({ type: 'ADD_TAG', tag: 'bold' });
store.dispatch({ type: 'ADD_TAG', tag: 'hipster' });
store.dispatch({ type: 'REMOVE_TAG', tag: 'blue' });
store.dispatch({ type: 'ADD_TAG', tag: 'bold' });
store.dispatch({ type: 'REMOVE_TAGS' });