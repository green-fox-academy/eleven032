import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import optionReducer from './reducers/optionReducer';
import Options from './components/Options';
import Hint from './components/Hint';
import Picture from './components/Pictures';

const myModule = require('./components/db/data');

const store = createStore(optionReducer);

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Select your choice!</Text>
        <Options data={myModule.data} />
        <Hint />
        <Picture />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
