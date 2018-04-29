import React, { Component } from 'react';
import {Router,Route} from 'react-router-native';
import TabBar from './components/TabBar';
import createHistory from 'history/createMemoryHistory';
export const history = createHistory();

export default class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <Router history={history}>
        <Route exact path="/">
          <TabBar history={history}/>
        </Route>
      </Router>
    );
  }
}
