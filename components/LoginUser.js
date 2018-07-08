import React, { Component } from 'react';
import {
  StyleSheet,View,Text,StatusBar,TouchableOpacity,ScrollView, AsyncStorage
} from 'react-native';
import { Button, WhiteSpace, WingBlank, Modal, Icon,List,InputItem,Toast,Tag } from 'antd-mobile';
import NavigationBar from 'react-native-navbar';
import {connect} from 'react-redux';
import {login} from '../actions';
import { lupaSandi, loginUser } from './RestApi';

const prompt = Modal.prompt;
const navBarConfig = {
    leftButton : {

    },
    rightButton : {

    },
    title : {
      title: 'Log In',
      tintColor: 'white'
    }
};

class LoginUser extends Component {

  constructor(props){
    super(props);
    this.state ={
        username: '',
        password: '',
    };
    this.inputs = {};
  }

  focusNextField=(key)=>{
    this.inputs[key].inputRef.inputRef.focus();
  }

  lupaKataSandi = () =>{
    prompt('Lupa sandi', 'sandi akan dikirimkan ke email anda',
      [
        {
          text: 'cancel',
          onPress: value => Toast.info(value, 1),
        },
        {
          text: 'send',
          onPress: async(value) =>{
            let res = await lupaSandi(value);
            console.log(res);
          },
        },
      ], 'default', null, ['input your email']);
  }

  login= async()=>{
    let {username, password} = this.state;
    // CEK LOGIN
    let data = {
      username: username,
      password: password
    }
    let res = await loginUser(data);

    if(res.length == 1){
      console.log(res[0].id);

      await AsyncStorage.setItem('@Login:key','true');
      await AsyncStorage.setItem('@UserId:key', res[0].id.toString());
      this.props.dispatch(login(''));
    }else{
      Toast.info('Data tidak ditemukan', 2)
    }
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
                <List>
                    <InputItem clear placeholder="username" name="username" type="text"
                        value={this.state.username}
                        onChange={(username) => this.setState({username})}
                        autoFocus = {true}
                        returnKeyType="next"
                        onSubmitEditing={ () => this.focusNextField('password')}
                    >
                        <Icon type={"\uE66A"} size="xs" color="black" />
                    </InputItem>   
                    <InputItem placeholder="password" name="password" type="password"
                        value={this.state.password}
                        onChange={(password) => this.setState({password})}
                        ref={el => this.inputs['password'] = el}
                    >
                        <Icon type={"\uE67B"} size="xs" color="black" />
                    </InputItem> 
                    <List.Item>
                        <TouchableOpacity 
                            style={{width:'100%',height:40,justifyContent:'center',alignItems:'center', backgroundColor: '#BBDEFB',borderRadius:5}} 
                            onPress={()=> this.login() }>
                            <Text>Log in</Text>
                        </TouchableOpacity>
                    </List.Item>   
                </List>
                <WhiteSpace/> 
                <WhiteSpace/>
                <View style={{flexDirection: 'row'}}>
                    <Tag onChange={()=>this.lupaKataSandi()} style={{marginRight:10}}>Lupa sandi ? </Tag>
                    <Tag onChange={()=>this.props.history.push('/register')} >Daftar ? </Tag>
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
LoginUser = connect(mapStateToProps,mapDispatchToProps)(LoginUser);
export default LoginUser;
