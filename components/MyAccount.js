import React, { Component } from 'react';
import {
  StyleSheet,View,Text,StatusBar,TouchableOpacity,ScrollView,Image
} from 'react-native';
import { Button, WhiteSpace, WingBlank,Modal,Icon,List,Card} from 'antd-mobile';
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
      title: 'Akun',
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
                      { text: 'Edit account', onPress: () => this.props.history.push("/editAkun") },
                      { text: 'Edit password', onPress: () => console.log('opsi2') },
                      { text: 'Log out', onPress: () => this.props.dispatch(logout('')) },
                    ])
                  }>
                    <Icon type="ellipsis" size="sm" color="white" />
                  </TouchableOpacity>
                </View>
              }
          />
        </View>
        <ScrollView style={{marginBottom:90,paddingTop:10,}}>
          <WingBlank size='md'>
            <View style={{paddingBottom:30}}>
              <Card>
                <Card.Header
                  title=""
                  thumb={<Image source={{uri: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png'}}
                            style={{width: 50, height: 50,borderRadius:10,marginRight:10}} />}
                  extra={<Text>Poin Anda 100</Text>}
                />
              </Card>
              <List className="my-list">
                <Item
                  arrow={null}
                  multipleLine
                  onClick={() => {}}
                >
                  Nama <Brief>Indra Cahya E</Brief>
                </Item>
                <Item
                  arrow={null}
                  multipleLine
                  onClick={() => {}}
                >
                  Username <Brief>........</Brief>
                </Item>
                <Item
                  arrow={null}
                  multipleLine
                  onClick={() => {}}
                >
                  Kelamin <Brief>........</Brief>
                </Item>
                <Item
                  arrow={null}
                  multipleLine
                  onClick={() => {}}
                >
                  Tanggal Lahir <Brief>........</Brief>
                </Item>
                <Item
                  arrow={null}
                  multipleLine
                  onClick={() => {}}
                >
                  Alamat <Brief>........</Brief>
                </Item>
                <Item
                  arrow={null}
                  multipleLine
                  onClick={() => {}}
                >
                  Email <Brief>........</Brief>
                </Item>
                <Item
                  arrow={null}
                  multipleLine
                  onClick={() => {}}
                >
                  Telepon <Brief>081335630404</Brief>
                </Item>
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