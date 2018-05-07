import React, { Component } from 'react';
import {
  StyleSheet,View,Text,StatusBar,TouchableOpacity,ScrollView
} from 'react-native';
import { Button, WhiteSpace, WingBlank, Modal, Icon } from 'antd-mobile';
import NavigationBar from 'react-native-navbar';
import LeftButton from './leftButton';
import {history} from '../App';
import {connect} from 'react-redux';

const Operation = Modal.operation;

const navBarConfig = {
  leftButton : {

  },
  rightButton : {

  },
  title : {
    title: 'Pembuat',
    tintColor: 'white'
  }
};

class Dev extends Component {

  constructor(props){
    super(props);
    console.log(this.props);
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
            leftButton={<LeftButton onPress={()=>history.goBack()}/>}
            rightButton={
              <View style={{marginTop:13,marginRight:10}}>
                <TouchableOpacity onPress={
                  () => Operation([
                    { text: 'opsi', onPress: () => console.log('opsi1') },
                    { text: 'opsi', onPress: () => console.log('opsi1') },
                  ])
                }>
                  <Icon type="ellipsis" size="sm" color="white" />
                </TouchableOpacity>
              </View>
            }
          />
        </View>
        <ScrollView style={{ height: '100%', width: '100%',marginTop:10 }}>
          <WingBlank size='md'>
            <Text> Dev</Text>
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
Dev = connect(mapStateToProps,mapDispatchToProps)(Dev);
export default Dev;
