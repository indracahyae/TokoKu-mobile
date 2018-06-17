import React from 'react';
import {
    View
} from 'react-native';
import {Switch,Route} from 'react-router-native';
import Help from './Help';
import HelpPembelian from './HelpPembelian';
import HelpAkun from './HelpAkun';
import HelpPengiriman from './HelpPengiriman'
import HelpPromo from './HelpPromo'

export default () => (
    <View>
        <Switch>
            <Route exact path="/help" component={Help} />
            <Route path="/helpPembelian" component={HelpPembelian} />
            <Route path="/helpAkun" component={HelpAkun} />
            <Route path="/helpPengiriman" component={HelpPengiriman} />
            <Route path="/helpPromo" component={HelpPromo} />
        </Switch>
    </View>
);