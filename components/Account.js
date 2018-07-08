import React, { Component } from 'react';
import {
  StyleSheet,View,Text,StatusBar,TouchableOpacity,ScrollView,AsyncStorage
} from 'react-native';
import {connect} from 'react-redux';
import LoginUser from './LoginUser';
import MyAccount from './MyAccount';
import {login} from '../actions';

class Account extends Component {

  constructor(props){
    super(props);
    this.state = {
        login: null,
    };
  }

  async componentDidMount(){
    //   cek was login DISINI
    let res = await AsyncStorage.getItem('@Login:key');
    if(res !== null){
      this.props.dispatch(login(''));
    }
  }

  render() {
    let {login} = this.props.allState;

    return (
      <View>
        {login == false ? (
          <LoginUser history={this.props.history}/>
        ) : (
          <MyAccount history={this.props.history}/>
        )}
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
Account = connect(mapStateToProps,mapDispatchToProps)(Account);
export default Account;