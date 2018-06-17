import React, { Component } from 'react';
import {
  StyleSheet,View,Text,StatusBar,TouchableOpacity,
  ScrollView,Modal,TouchableHighlight,
} from 'react-native';
import { 
  Button,WhiteSpace,WingBlank,Icon,List,InputItem,
  ImagePicker,Picker 
} from 'antd-mobile';
import NavigationBar from 'react-native-navbar';
import LeftButton from './leftButton';

const Item = List.Item;
const navBarConfig = {
  leftButton : {

  },
  rightButton : {

  },
  title : {
    title: 'Konfirmasi Pembayaran',
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
    for(var i = 0; i <= 5; i++){
      listBukti.push(
        <Item multipleLine key={i}
          >
          no. transaksi
          <View>
            <Text onPress={()=>alert('lihat detail')}>
              tgl_upload {'\n'}
              status_pembayaran {'\n'}
              keterangan xxxxx xxxxx xxxxxx xxxxx xxxxx xxxxx xxxxx xxxxx {'\n'}
            </Text>
            <View style={{flexDirection:'row',alignSelf:'flex-end'}}>
              <TouchableOpacity onPress={()=>this.openForm()}>
                <Icon type={'\uE692'} size="sm" color="black" />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>alert('tes')}>
                <Icon type='cross' size="sm" color="black"/>
              </TouchableOpacity>
            </View>
          </View>
        </Item>
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
            rightButton={
              <View style={{marginTop:13,marginRight:10}}>
                <TouchableOpacity onPress={
                  () => {this.openForm()}
                }>
                  <Icon type={'\uE6B6'} size="sm" color="white" />
                </TouchableOpacity>
              </View>
            }
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
