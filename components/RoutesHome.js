import React from 'react';
import {
    View
} from 'react-native';
import {Switch,Route} from 'react-router-native';
import Home from './Home';
import DetailBarang from './DetailBarang';

export default () => (
    <View>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/detailBarang" component={DetailBarang} />
        </Switch>
    </View>
);