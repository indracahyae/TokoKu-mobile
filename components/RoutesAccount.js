import React, { Component } from 'react';
import {
    View
} from 'react-native';
import {Switch,Route} from 'react-router-native';
import Account from './Account';
import Register from './RegisterUser';

export default class RoutesOrder extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
       return(
        <View>
            <Switch>
                <Route exact path="/account" component={Account} />
                <Route path="/register" component={Register} />
            </Switch>
        </View>
       )
    }
}