import React, {Component} from 'react';
import {
    StyleSheet,View,Text,StatusBar,TouchableOpacity,ScrollView
} from 'react-native';
import { Button,WhiteSpace,WingBlank,Modal,Icon,List,InputItem,Picker,DatePicker } from 'antd-mobile';
import {history} from '../App';
import NavigationBar from 'react-native-navbar';
import LeftButton from './leftButton';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';

const navBarConfig = {
    leftButton : {
        title: 'back',
        handler: () => history.goBack(),
        tintColor: 'white'
    },
    rightButton : {

    },
    title : {
        title: 'Register User',
        tintColor: 'white'
    }
};

const dataPicker = [
    {
      label: 'Jawa Timur',
      value: 'jatim',
    },
    {
      label: 'Jawa Barat',
      value: 'jabar',
    },
    {
        label: 'Jawa Tengah',
        value: 'jateng',
    },
  ];
const dataKelamin = [
    {
        label: 'Laki-laki',
        value: '1',
    },
    {
        label: 'Perempuan',
        value: '0',
    }
];

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);


export default class RegisterUser extends Component {

    constructor(props){
        super(props);
        this.state ={
            username: '',
            password: '',
            nama: '',
            alamat: '',
            email: '',
            telepon: '',
            provinsi:'',
            kota:'',
            date: now,
            kelamin:1
        };
        this.inputs = {};
    }

    focusNextField=(key)=>{
        this.inputs[key].inputRef.inputRef.focus()
    }

    submitForm=()=>{

    }

    render(){
        return(
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
                    <View style={{marginTop:11,marginRight:10}}>
                        <TouchableOpacity onPress={()=>{}}>
                            <Icon type="check" size="sm" color="white" />
                        </TouchableOpacity>
                    </View>
                    }
                />
                </View>
                <ScrollView style={{marginBottom:90,marginTop:10}}>
                    <WingBlank size='md'>
                        <List>
                            <InputItem clear placeholder="username" name="username" type="text"
                                value={this.state.username}
                                onChange={(username) => this.setState({username})}
                                returnKeyType="next"
                                autoFocus = {true}
                                onSubmitEditing={ () => this.focusNextField('password')}
                            >
                                <Icon type={"\uE66A"} size="xs" color="black" />
                            </InputItem>   
                            <InputItem placeholder="password" name="password" type="password"
                                value={this.state.password}
                                onChange={(password) => this.setState({password})}
                                ref={el => this.inputs['password'] = el}
                                onSubmitEditing={ () => this.focusNextField('nama')}
                                returnKeyType="next"
                            >
                                <Icon type={"\uE67B"} size="xs" color="black" />
                            </InputItem>
                            <InputItem placeholder="nama" name="nama" type="text"
                                value={this.state.nama}
                                onChange={(nama) => this.setState({nama})}
                                ref={el => this.inputs['nama'] = el}
                                onSubmitEditing={ () => this.focusNextField('alamat')}
                                returnKeyType="next"
                            >
                                <Icon type={"\uE6A8"} size="xs" color="black" />
                            </InputItem>  
                            <Picker data={dataKelamin} cols={1} okText='ok' dismissText='back' extra={' '}>
                                <List.Item arrow="down">Kelamin</List.Item>
                            </Picker>
                            <DatePicker
                                mode="date"
                                extra={" "}
                                okText='ok' dismissText='back'
                                locale={enUs}
                                value={this.state.date}
                                onChange={date => this.setState({ date })}
                                >
                                <List.Item arrow="horizontal">Tanggal Lahir</List.Item>
                            </DatePicker>
                            <InputItem placeholder="alamat" name="alamat" type="text"
                                value={this.state.alamat}
                                onChange={(alamat) => this.setState({alamat})}
                                ref={el => this.inputs['alamat'] = el}
                            >
                                <Icon type={"\uE686"} size="xs" color="black" />
                            </InputItem> 
                            <Picker data={dataPicker} cols={1} okText='ok' dismissText='back' extra={' '}>
                                <List.Item arrow="down">Provinsi</List.Item>
                            </Picker>
                            <Picker data={dataPicker} cols={1} okText='ok' dismissText='back' extra={' '}>
                                <List.Item arrow="down">Kota</List.Item>
                            </Picker>
                            <InputItem placeholder="email" name="email" type="text" 
                                value={this.state.email}
                                onChange={(email) => this.setState({email})}
                                onSubmitEditing={ () => this.focusNextField('telepon')}
                                returnKeyType="next"
                            >
                                <Icon type={"\uE659"} size="xs" color="black" />
                            </InputItem>
                            <InputItem placeholder="telepon" name="telepon" type="number"
                                value={this.state.telepon}
                                onChange={(telepon) => this.setState({telepon})}
                                ref={el => this.inputs['telepon'] = el}
                            >
                                <Icon type={"\uE675"} size="xs" color="black" />
                            </InputItem>
                        </List>
                    </WingBlank>
                </ScrollView>
            </View>
        )
    }
}