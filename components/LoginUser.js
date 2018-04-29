import React, { Component } from 'react';
import {
  StyleSheet,View,Text,StatusBar,TouchableOpacity,ScrollView
} from 'react-native';
import { Button, WhiteSpace, WingBlank, Modal, Icon,List,InputItem,Toast,Tag } from 'antd-mobile';
import NavigationBar from 'react-native-navbar';
const alert = Modal.alert;

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

export default class Order extends Component {

  constructor(props){
    super(props);
    this.state ={
        username: '',
        password: '',
    };
  }

  lupaKataSandi = () =>{
    Toast.info('modal untuk input email', 1)
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
                    >
                        <Icon type={"\uE66A"} size="xs" color="black" />
                    </InputItem>   
                    <InputItem placeholder="password" name="password" type="password"
                        value={this.state.password}
                        onChange={(password) => this.setState({password})}
                    >
                        <Icon type={"\uE67B"} size="xs" color="black" />
                    </InputItem> 
                    <List.Item>
                        <TouchableOpacity 
                            style={{width:'100%',height:40,justifyContent:'center',alignItems:'center', backgroundColor: '#BBDEFB',borderRadius:5}} 
                            onPress={()=>Toast.info(this.state.username+', '+this.state.password, 1)}>
                            <Text>Log in</Text>
                        </TouchableOpacity>
                    </List.Item>   
                </List>
                <WhiteSpace/> 
                <WhiteSpace/>
                <View style={{flexDirection: 'row'}}>
                    <Tag onChange={()=>this.lupaKataSandi()} style={{marginRight:10}}>Lupa kata sandi ? </Tag>
                    <Tag onChange={()=>this.props.history.push('/register')} >Daftar ? </Tag>
                </View>
            </WingBlank>
        </ScrollView>
      </View>
    );
  }
}
