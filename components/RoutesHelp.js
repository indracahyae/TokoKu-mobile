import React from 'react';
import {
    View
} from 'react-native';
import {Switch,Route} from 'react-router-native';
import Help from './Help';
import HelpPembelian from './HelpPembelian';

export default () => (
    <View>
        <Switch>
            <Route exact path="/help" component={Help} />
            <Route path="/helpPembelian" component={HelpPembelian} />
        </Switch>
    </View>
);