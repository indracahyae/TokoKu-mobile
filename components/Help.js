import React, { Component } from 'react';
import {
  StyleSheet,View,Text,StatusBar,TouchableOpacity,ScrollView
} from 'react-native';
import { Button, WhiteSpace, WingBlank, Modal, Icon, List } from 'antd-mobile';
import NavigationBar from 'react-native-navbar';

const Item = List.Item;
const Brief = Item.Brief;
const alert = Modal.alert;

const navBarConfig = {
    leftButton : {

    },
    rightButton : {

    },
    title : {
      title: 'Help',
      tintColor: 'white'
    }
};

export default class Home extends Component {

  constructor(props){
    super(props);
  }

  render() {
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
            
          />
        </View>
        <ScrollView style={{marginBottom:45,marginTop:10}}>
          <WingBlank size='md'>
            <View>
              <List className="my-list">
                <Item arrow="horizontal" onClick={() => this.props.history.push('/helpPembelian')}>Pembelian</Item>
                <Item arrow="horizontal" onClick={() => {}}>Akun</Item>
                <Item arrow="horizontal" onClick={() => {}}>Pengiriman</Item>
                <Item arrow="horizontal" onClick={() => {}}>Promo</Item>
              </List>
            </View>
          </WingBlank>
        </ScrollView>
      </View>
    );
  }
}
