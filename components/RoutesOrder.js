import React, { Component } from 'react';
import {
    View
} from 'react-native';
import {Switch,Route} from 'react-router-native';
import Order from './Order';
import DetailOrder from './DetailOrder';
import KonfirmasiPembayaran from './KonfirmasiPembayaran';

export default class RoutesOrder extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
       return(
        <View>
            <Switch>
                <Route exact path="/order" component={Order} />
                <Route path="/detailOrder" component={DetailOrder} />
                <Route path="/konfirmPembayaran" component={KonfirmasiPembayaran} />
            </Switch>
        </View>
       )
    }
}