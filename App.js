import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import reducers from './Redux/Reducer';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(reducers);

export default class App extends React.Component {

  render() {
      return (

        <Provider store={store}>
          <AppNavigator />
        </Provider>
      );
  }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
