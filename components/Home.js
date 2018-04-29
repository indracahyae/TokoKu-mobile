import React, { Component } from 'react';
import {
  StyleSheet,View,Text,StatusBar,TouchableOpacity,ScrollView
} from 'react-native';
import { Button, WhiteSpace, WingBlank, Modal, Icon } from 'antd-mobile';
import NavigationBar from 'react-native-navbar';
const Operation = Modal.operation;

const navBarConfig = {
  leftButton : {

  },
  rightButton : {

  },
  title : {
    title: 'TokoKu',
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
            rightButton={
              <View style={{marginTop:13,marginRight:10}}>
                <TouchableOpacity onPress={
                  () => Operation([
                    { text: 'opsi', onPress: () => console.log('opsi1') },
                    { text: 'opsi', onPress: () => console.log('opsi2') },
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
            <Text onPress={()=>{
              this.props.history.push("/detailBarang")
            }}
            > Home</Text>
          </WingBlank>
        </ScrollView>
      </View>
    );
  }
}
