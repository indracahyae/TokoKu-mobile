import React, { Component } from 'react';
import {
  StyleSheet,View,Text,StatusBar,TouchableOpacity,ScrollView
} from 'react-native';
import {connect} from 'react-redux';
import LoginUser from './LoginUser';
import MyAccount from './MyAccount';

class Account extends Component {

  constructor(props){
    super(props);
    this.state = {
        login: false,
    };
    // console.log(this.props);
  }

  componentDidMount(){
    //   cek was login DISINI

  }

  render() {
    return (
        <LoginUser history={this.props.history}/>
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

// if(this.props.allState.login == false){
//   return (
//       <LoginUser history={this.props.history}/>
//   );
// };

// if(this.props.allState.login == true){
//   return (
//       <MyAccount history={this.props.history}/>
//   );
// };