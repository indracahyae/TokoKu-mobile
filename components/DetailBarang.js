import React,{Component} from 'react';
import {
    StyleSheet,View,Text,StatusBar,TouchableOpacity,ScrollView, Image, Dimensions, AsyncStorage
} from 'react-native';
import { Button, WhiteSpace, WingBlank, Modal, Icon, List, InputItem } from 'antd-mobile';
import NavigationBar from 'react-native-navbar';
import {history} from '../App';
import LeftButton from './leftButton';
import {selectBarang, imgUrl, addToKeranjang} from './RestApi'

const Operation = Modal.operation;
const navBarConfig = {
    leftButton : {
        title: 'back',
        handler: () => history.goBack(),
        tintColor: 'white'
    },
    rightButton : {

    },
    title : {
        title: 'Detail Barang',
        tintColor: 'white'
    }
};

const screen = Dimensions.get('screen');
const imgWidth = (screen.width - 30);

// DATA > kode barang, nama, harga, stok, img, desc, diskon, kategori
export default class App extends Component {
    constructor(){
        super();
        this.state={
            id_barang: '',
            barang: { },
            jml_barang: '',
            catatan: ''
        }
    }

    async componentDidMount(){
        // console.log(this.props.location.state)
        let {id_barang} = this.props.location.state;
        let barang = await selectBarang(id_barang);
        // console.log(res);
        this.setState({
            barang,
            id_barang
        });
    }

    addToKeranjang= async()=>{
        let { jml_barang, catatan, id_barang, barang } = this.state;
        let uid = await AsyncStorage.getItem('@UserId:key');
        // harga-(harga*(diskon/100)
        let harga = barang.harga;
        let diskon = barang.diskon;
        let total = (harga-(harga*(diskon/100)))*parseInt(jml_barang);

        let data = {
            id_customer: uid,
            id_barang: id_barang,
            jml_barang: jml_barang,
            total: total,
            catatan: catatan
        }
        // console.log(data);
        let res = await addToKeranjang(data);
        console.log(res);

        // ALERT, LANJUT BELANJA ATAU CHECKOUT
        
    }

    render(){
        let { history } = this.props;
        let { barang, jml_barang, catatan } = this.state;

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
                    <View style={{marginTop:13,marginRight:10}}>
                        <TouchableOpacity onPress={
                        () => Operation([
                            { text: 'Tambah ke keranjang', onPress: () => this.addToKeranjang() },
                        ])
                        }>
                        <Icon type="ellipsis" size="xs" color="white" />
                        </TouchableOpacity>
                    </View>
                    }
                />
                </View>
                <ScrollView style={{marginBottom:45,marginTop:10}}>
                    <WingBlank style={{paddingBottom:100}}>
                        <View>
                            <Image source={{uri: imgUrl+barang.image}} style={{ width: imgWidth,height:300 }} />
                            <List>
                                <InputItem placeholder="jumlah barang" type="number"
                                    value={jml_barang}
                                    onChange={(jml_barang) => this.setState({jml_barang})}
                                    returnKeyType="next"
                                    autoFocus = {true}
                                    onSubmitEditing={ () => console.log('enter')}
                                >
                                    <Icon type={"\uE67A"} size="xs" color="black" />
                                </InputItem>   
                                <InputItem placeholder="catatan" type="text"
                                    value={catatan}
                                    onChange={(catatan) => this.setState({catatan})}
                                    // ref={el => this.inputs['password'] = el}
                                    onSubmitEditing={ () => console.log('enter')}
                                    returnKeyType="next"
                                >
                                    <Icon type={"\uE692"} size="xs" color="black" />
                                </InputItem>
                            </List>
                        </View>
                    </WingBlank>
                </ScrollView>
            </View>
        );
    }
}

// export default ({history}) => (
    
// );