import React, { Component } from 'react';
import {
  StyleSheet,View,Text,StatusBar,TouchableOpacity,ScrollView,Image, AsyncStorage
} from 'react-native';
import { Button, WhiteSpace, WingBlank,Modal,Icon,List,Card} from 'antd-mobile';
import NavigationBar from 'react-native-navbar';
import {connect} from 'react-redux';
import {logout} from '../actions';
import {getMyProfile,updatePassword} from './RestApi';

const prompt = Modal.prompt;
const Item = List.Item;
const Brief = Item.Brief;
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
    this.state={
      myProfile: []
    };
  }

  async componentDidMount(){
    await AsyncStorage.setItem('@Login:key', 'true');
    let userId = await AsyncStorage.getItem('@UserId:key');

    let myProfile = await getMyProfile(userId);
    console.log(myProfile);
    this.setState({myProfile});
  }

  lupaKataSandi = () =>{
    let {myProfile} = this.state;

    prompt('Lupa kata sandi',' ',
      [
        {
          text: 'cancel',
          onPress: value => {},
        },
        {
          text: 'save',
          onPress: async value => {
            let data = {
              password: value
            }
            let res= await updatePassword(myProfile.id,data);
            console.log(res);
          },
        },
      ], 'default', null, ['sandi baru']);
  }

  render() {
    let {myProfile} = this.state;

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
                      { text: 'Edit password', onPress: () => this.lupaKataSandi() },
                      { text: 'Log out', onPress: async() => {
                          await AsyncStorage.removeItem('@Login:key');
                          await AsyncStorage.removeItem('@UserId:key');
                          this.props.dispatch(logout(''));
                        }
                      },
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
                  thumb={<Image source={{uri: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'}}
                            style={{width: 50, height: 50,borderRadius:10,marginRight:10}} />}
                  extra={<Text>Poin Anda {myProfile.poin}</Text>}
                />
              </Card>
              <List className="my-list">
                <Item
                  arrow={null}
                  multipleLine
                  onClick={() => {}}
                >
                  Nama <Brief>{myProfile.nama}</Brief>
                </Item>
                <Item
                  arrow={null}
                  multipleLine
                  onClick={() => {}}
                >
                  Username <Brief>{myProfile.username}</Brief>
                </Item>
                <Item
                  arrow={null}
                  multipleLine
                  onClick={() => {}}
                >
                  Email <Brief>{myProfile.email}</Brief>
                </Item>
                <Item
                  arrow={null}
                  multipleLine
                  onClick={() => {}}
                >
                  Alamat <Brief>{myProfile.alamat}</Brief>
                </Item>
                <Item
                  arrow={null}
                  multipleLine
                  onClick={() => {}}
                >
                  Telepon <Brief>{myProfile.tlp}</Brief>
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

// this.props.dispatch(logout(''))