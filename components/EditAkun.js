import React, {Component} from 'react';
import {
    StyleSheet,View,Text,StatusBar,TouchableOpacity,ScrollView, AsyncStorage
} from 'react-native';
import { Button,WhiteSpace,WingBlank,Modal,Icon,List,InputItem,Picker,DatePicker } from 'antd-mobile';
import {history} from '../App';
import NavigationBar from 'react-native-navbar';
import LeftButton from './leftButton';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US'
import { getProvinsi, getKota, getMyProfile, updateProfile} from './RestApi'

const navBarConfig = {
    leftButton : {
        title: 'back',
        handler: () => history.goBack(),
        tintColor: 'white'
    },
    rightButton : {

    },
    title : {
        title: 'Edit Akun',
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
            tlp: '',
            provinsi:[],
            kota:[],
            date: now,
            kelamin:1,

            uid: '',
            dataProvinsi: [],
            dataKota: []
        };
        this.inputs = {};
    }

    async componentDidMount(){
        let uid = await AsyncStorage.getItem('@UserId:key');
        this.setState({uid});

        // GET DATA
        let res = await getMyProfile(uid);
        console.log(res);

        // FILL TO FORM
        this.setState({
            username: res.username,
            password: res.password,
            nama: res.nama,
            alamat: res.alamat,
            email: res.email,
            tlp: res.tlp,
            kota: [`${res.id_kota}`],
            provinsi: [`${res.id_kota.toString().substr(0, 2)}`]
        });

        let dataProvinsi = await getProvinsi();
        this.createProvinsi(dataProvinsi);

        let id_prov = res.id_kota.toString();
        this.createKota(id_prov.substr(0, 2));

    }

    createProvinsi=(datas)=>{
        let {dataProvinsi} = this.state;
        dataProvinsi = [];
        datas.map((data,i)=>{
            let myObj = {
                label : data.nama,  
                value : data.id 
            };
            dataProvinsi.push( myObj );
        });

        this.setState({
            dataProvinsi
        })
    }

    pickProvinsi=(prov)=>{
        let {dataProvinsi} = this.state;
        let res = dataProvinsi.filter(data => data.value == prov)
        // console.log(res);
        return res.length==0?' ':res[0].label;
    }

    createKota= async(id) =>{
        let datas = await getKota(id);
        let {dataKota} = this.state;
        dataKota = [];
        datas.map((data,i)=>{
            let myObj = {
                label : data.nama,  
                value : data.id 
            };
            dataKota.push( myObj );
        });

        this.setState({
            dataKota
        })
    }

    pickKota=(kota)=>{
        let {dataKota} = this.state;
        let res = dataKota.filter(data => data.value == kota)
        // console.log(res);
        return res.length==0?' ':res[0].label;
    }

    focusNextField=(key)=>{
        this.inputs[key].inputRef.inputRef.focus();
    }

    submitForm= async()=>{
        // FORM DATA
        let {username,email,password,nama,alamat,kota,tlp, uid} = this.state;
        let data = {
            username,
            email,
            password,
            nama,
            alamat,
            id_kota: kota,
            tlp,
        };

        let res = await updateProfile(uid, data);
        if(res.status === true){
            history.goBack();
        }else{
            Toast.info('terjadi kesalahan, coba lagi', 2);
        }
    }

    render(){
        let { dataProvinsi, provinsi, dataKota, kota, 
            username, password, nama, alamat, email, tlp
        } = this.state;

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
                        <TouchableOpacity onPress={()=> this.submitForm()}>
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
                                value={username}
                                onChange={(username) => this.setState({username})}
                                returnKeyType="next"
                                autoFocus = {true}
                                onSubmitEditing={ () => this.focusNextField('password')}
                            >
                                <Icon type={"\uE66A"} size="xs" color="black" />
                            </InputItem>   
                            <InputItem placeholder="password" name="password" type="password"
                                value={password}
                                onChange={(password) => this.setState({password})}
                                ref={el => this.inputs['password'] = el}
                                onSubmitEditing={ () => this.focusNextField('nama')}
                                returnKeyType="next"
                            >
                                <Icon type={"\uE67B"} size="xs" color="black" />
                            </InputItem>
                            <InputItem placeholder="nama" name="nama" type="text"
                                value={nama}
                                onChange={(nama) => this.setState({nama})}
                                ref={el => this.inputs['nama'] = el}
                                onSubmitEditing={ () => this.focusNextField('alamat')}
                                returnKeyType="next"
                            >
                                <Icon type={"\uE6A8"} size="xs" color="black" />
                            </InputItem>  
                            
                            
                            <InputItem placeholder="alamat" name="alamat" type="text"
                                value={alamat}
                                onChange={(alamat) => this.setState({alamat})}
                                ref={el => this.inputs['alamat'] = el}
                            >
                                <Icon type={"\uE686"} size="xs" color="black" />
                            </InputItem> 
                            
                            <Picker data={dataProvinsi} cols={1} okText='ok' dismissText='back' extra={this.pickProvinsi(provinsi)} 
                                value={provinsi}
                                onOk={(v)=>{
                                    this.setState({provinsi:v});
                                    this.createKota(v);
                                }}
                            >
                                <List.Item arrow="down">Provinsi</List.Item>
                            </Picker>

                            <Picker data={dataKota} cols={1} okText='ok' dismissText='back' extra={this.pickKota(kota)}
                                value={kota}
                                onOk={v=>this.setState({kota:v})}
                            >
                                <List.Item arrow="down">Kota</List.Item>
                            </Picker>

                            <InputItem placeholder="email" name="email" type="text" 
                                value={email}
                                onChange={(email) => this.setState({email})}
                                onSubmitEditing={ () => this.focusNextField('telepon')}
                                returnKeyType="next"
                            >
                                <Icon type={"\uE659"} size="xs" color="black" />
                            </InputItem>
                            <InputItem placeholder="telepon" name="telepon" type="number"
                                value={tlp}
                                onChange={(tlp) => this.setState({tlp})}
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

{/* <Picker data={dataKelamin} cols={1} okText='ok' dismissText='back' extra={' '}>
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
</DatePicker> */}