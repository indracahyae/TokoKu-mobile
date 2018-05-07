import React, { Component } from 'react';
import {
  StyleSheet,View,Text,StatusBar,TouchableOpacity,ScrollView
} from 'react-native';
import { Button, WhiteSpace, WingBlank, Modal, Icon, List } from 'antd-mobile';
import NavigationBar from 'react-native-navbar';
import {connect} from 'react-redux';
import {logout} from '../actions';

const Item = List.Item;
const Brief = Item.Brief;
const alert = Modal.alert;
const Operation = Modal.operation;

const navBarConfig = {
    leftButton : {

    },
    rightButton : {

    },
    title : {
      title: 'My Account',
      tintColor: 'white'
    }
};

class MyAccount extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <View>
        <StatusBar backgroundColor="#0984e3" barStyle="light-content" />
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
                  <TouchableOpacity onPress={
                    () => Operation([
                      { text: 'Edit account', onPress: () => console.log('opsi2') },
                      { text: 'Log out', onPress: () => this.props.dispatch(logout('')) },
                    ])
                  }>
                    <Icon type="ellipsis" size="sm" color="white" />
                  </TouchableOpacity>
                </View>
              }
          />
        </View>
        <ScrollView style={{marginBottom:45,marginTop:10}}>
          <WingBlank size='md'>
            <View>
              <List className="my-list">
                <Item arrow={null} onClick={() => {}}>my account</Item>
                
              </List>
            </View>
          </WingBlank>
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps(state){
  return{
    allState: state
  };
}
const mapDispatchToProps = (dispatch) => ({
  dispatch
})
MyAccount = connect(mapStateToProps,mapDispatchToProps)(MyAccount);
export default MyAccount;