import React, { Component } from 'react';
import {
  StyleSheet,View,Text,StatusBar,TouchableOpacity,ScrollView
} from 'react-native';
import { Button, WhiteSpace, WingBlank, Modal, Icon,List } from 'antd-mobile';
import NavigationBar from 'react-native-navbar';

const alert = Modal.alert;
const Item = List.Item;
const Brief = Item.Brief;
const navBarConfig = {
    leftButton : {

    },
    rightButton : {

    },
    title : {
      title: 'Pembelian',
      tintColor: 'white'
    }
};

export default class Order extends Component {

  constructor(props){
    super(props);
  }

  render() {
    var listOrder = [];
    for(var i = 0; i <= 5; i++){
      listOrder.push(
        <Item multipleLine key={i}
          onClick={() => this.props.history.push('/detailOrder')}>
          no. transaksi
          <Brief>
            <Text>tgl</Text>{'\n'}
            <Text>status transaksi</Text>{'\n'}
            <Text>status pengiriman</Text>{'\n'}
            <Text style={{fontWeight:'bold'}}>total</Text>
          </Brief>
        </Item>
      )
    }

    return (
      <View>
        <StatusBar
          backgroundColor="#0984e3"
          barStyle="light-content"
        />
        <View style={{borderColor:'#000',borderBottomWidth:0,marginBottom:0,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 3,}}>
          <NavigationBar
            style={{backgroundColor:'#74b9ff'}}
            title={navBarConfig.title}
            rightButton={
              <View style={{marginTop:13,marginRight:10}}>
                <TouchableOpacity onPress={() => this.props.history.push('/konfirmPembayaran')}>
                  <Icon type={'\uE698'} size="sm" color="white" />
                </TouchableOpacity>
              </View>
            }
          />
        </View>
        <ScrollView style={{marginBottom:90,paddingTop:10}}>
          <WingBlank size='md'>
            <List className="my-list" style={{paddingBottom:25}}>
              {listOrder}
            </List>
          </WingBlank>
        </ScrollView>
      </View>
    );
  }
}
