import React, { Component } from 'react';
import {
  StyleSheet,View,Text,StatusBar,TouchableOpacity,
  ScrollView,Modal,TouchableHighlight,
} from 'react-native';
import { 
  Button,WhiteSpace,WingBlank,Icon,List,InputItem,
  ImagePicker,Picker,
} from 'antd-mobile';
import NavigationBar from 'react-native-navbar';
import LeftButton from './leftButton';

const Item = List.Item;
const Brief = Item.Brief;

const navBarConfig = {
  leftButton : {

  },
  rightButton : {

  },
  title : {
    title: 'Detail Pembelian',
    tintColor: 'white'
  }
};
const dataPicker = [
  {
    label: '2013',
    value: '2013',
  },
  {
    label: '2014',
    value: '2014',
  },
];


export default class app extends Component {

  constructor(props){
    super(props);
    this.state={
      modalVisible:false
    };
  }

  openForm=()=>{
    this.setState({
      modalVisible:true
    })
  }

  render() {
    var listBukti = [];
    for(var i = 0; i <= 0; i++){
      listBukti.push(
        <View key={i}>
            <Item
                extra={<Icon type={'\uE629'} size="sm" color="black" />}
                arrow="empty"
                thumb="https://www.iconspng.com/uploads/3d-isometric-cardboard-box/3d-isometric-cardboard-box.png"
                multipleLine
                onClick={() => {}}
            >
                Status Pengiriman 
                <Brief>JNE - Telah dikirim</Brief>
                <Brief>Resi : 23749672040</Brief>
            </Item>
            <Item multipleLine
            >
                no. transaksi
                <View>
                    <Text onPress={()=>alert('lihat detail')}>
                        hf67565868
                    </Text>
                </View>
                Status transaksi
                <View>
                    <Text onPress={()=>alert('lihat detail')}>
                        diterima
                    </Text>
                </View>
                Tanggal Beli
                <View>
                    <Text onPress={()=>alert('lihat detail')}>
                        Senin, 22 Maret 2018
                    </Text>
                </View>
                Alamat
                <View>
                    <Text onPress={()=>alert('lihat detail')}>
                    tgl_upload
                    status_pembayaran
                    keterangan xxxxx xxxxx xxxxxx xxxxx xxxxx xxxxx xxxxx xxxxx
                    </Text>
                </View>
            </Item>
            <Item 
                extra="2 item" 
                align="top" 
                thumb="https://www.iconspng.com/uploads/3d-isometric-cardboard-box/3d-isometric-cardboard-box.png" 
                multipleLine 
                onClick={()=>{}}
                >
                Nama Barang <Brief>harga</Brief>
            </Item>
            <Item 
                extra="2 item" 
                align="top" 
                thumb="https://www.iconspng.com/uploads/3d-isometric-cardboard-box/3d-isometric-cardboard-box.png" 
                multipleLine 
                onClick={()=>{}}
                >
                Nama Barang <Brief>harga</Brief>
            </Item>
            <Item extra={<Text style={{fontSize:15}}>4 item (2kg)</Text>}> 
                <Text style={{fontSize:15}}>Jumlah barang</Text>
            </Item>
            <Item extra={<Text style={{fontSize:15}}>Rp. 70.000</Text>}> 
                <Text style={{fontSize:15}}>Ongkos Kirim</Text>
            </Item>
            <Item extra={<Text style={{fontSize:15}}>Rp. 120.000</Text>}> 
                <Text style={{fontSize:15}}>Total Belanja</Text>
            </Item>
            <Item extra={<Text style={{fontSize:15}}>Rp. 0</Text>}> 
                <Text style={{fontSize:15}}>Potongan</Text>
            </Item>
            
            <Item extra={<Text style={{fontSize:15}}>Rp. 120.000</Text>}>
              Total Pembayaran
            </Item>
        </View>
      )
    }

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
            leftButton={<LeftButton onPress={()=>this.props.history.goBack()}/>}
            rightButton={null}
          />
        </View>
        <ScrollView style={{marginBottom:90,paddingTop:10}}>
          <WingBlank size='md'>
            <List className="my-list" style={{paddingBottom:25}}>
              {listBukti}
            </List>
          </WingBlank>
        </ScrollView>
        
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{marginTop:5,marginRight:5}}>
            <View style={{flexDirection:'row',alignSelf:'flex-end'}}>
              <TouchableOpacity onPress={()=>this.setState({modalVisible:false})}>
                <Icon type='cross' size="sm" color="black"/>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.setState({modalVisible:false})}>
                <Icon type='check' size="sm" color="black"/>
              </TouchableOpacity>
            </View>
            <Text style={{alignSelf:'center',fontSize:20}}>Form Upload</Text>
            <ImagePicker
              files={[]}
              onChange={null}
              onImageClick={(index, fs) => console.log(index, fs)}
              selectable={true}
              multiple={false}
            />
            <List>
              <Picker data={dataPicker} cols={1} okText='ok' dismissText='back' extra={' '}
                
              >
                <List.Item arrow="down">no.transaksi</List.Item>
              </Picker>
              <InputItem clear placeholder="keterangan" type="text"
                  value={''}
                  onChange={(username) => {}}
                  returnKeyType="next"
                  onSubmitEditing={ () => {}}
              />
              </List>
          </View>
        </Modal>
      </View>
    );
  }
}
