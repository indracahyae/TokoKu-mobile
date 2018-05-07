import React, { Component } from 'react';
import {
  View
} from 'react-native';
import {Router,Route} from 'react-router-native';
import createHistory from 'history/createMemoryHistory';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TabBar from './components/TabBar';
import Developer from './components/Developer';

import reducer from './reducers';
export const history = createHistory();
export const store = createStore(reducer);

export default class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <View>
              <Route path="/dev" component={Developer}/>
              <Route path="/" component={TabBar}/>
          </View>
        </Router>
      </Provider>
    );
  }
}

