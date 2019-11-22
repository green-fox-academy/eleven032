import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import ShowAccountList from './components/ShowAccountList';
import fetchAccountsReducer from './reducers/fetchAccountsReducer';

const rootReducer = combineReducers({
  fetchAccountsReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <View>
        <ShowAccountList />
      </View>
    </Provider>
  );
}
