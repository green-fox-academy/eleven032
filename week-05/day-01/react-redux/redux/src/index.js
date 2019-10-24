import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import counter from './reducers/counterReducer';
import tags from './reducers/tagReducer';
import thunk from 'redux-thunk'
const redux = require('redux');

// const counterReducer = require('./reducers/counterReducer');
// const tagReducer = require('./reducers/tagReducer');
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const rootReducer = redux.combineReducers({
    counter,
    tags
});

const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
