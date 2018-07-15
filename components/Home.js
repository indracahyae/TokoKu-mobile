import React, { Component } from 'react';
import {
  StyleSheet,View,Text,StatusBar,TouchableOpacity,
  ScrollView,Image,Dimensions, AsyncStorage
} from 'react-native';
import { Button, WhiteSpace, WingBlank, Modal, Icon, Grid, List} from 'antd-mobile';
import NavigationBar from 'react-native-navbar';
import {history} from '../App';
import {getBarangs, imgUrl} from './RestApi'

const Operation = Modal.operation;
const Item = List.Item;
const Brief = Item.Brief;
const navBarConfig = {
  leftButton : {

  },
  rightButton : {

  },
  title : {
    title: 'TokoKu',
    tintColor: 'black'
  }
};

const data1 = Array.from(new Array(20)).map(() => ({
  icon: 'https://images.pexels.com/photos/843266/pexels-photo-843266.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
}));

const screen = Dimensions.get('screen');
const imgWidth = (screen.width - 30) /2;

export default class Home extends Component {

  constructor(props){
    super(props);
    this.state={
      iconLove: [],
      barangs: []
    }
  }

  async componentDidMount(){
    console.log('home');

    // GET BARANGS
    let barangs = await getBarangs();
    console.log(barangs);
    
    this.setState({
      barangs,
      iconLove: new Array(barangs.length).fill(false)
    });
  }

  love=(i)=>{
    let iconLove = this.state.iconLove;
    iconLove[i] = !iconLove[i];
    this.setState({ iconLove });
    console.log(this.state.iconLove);
  }

  diskon=(harga,diskon)=>{
    let res = harga-(harga*(diskon/100));
    return res; 
  }

  formatNumber=(number)=>{
    number = parseInt(number);
    // number = number.toLocaleString(['ban', 'id']);
    number = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return number;
  }

  render() {
    let {iconLove, barangs} = this.state;

    return (
      <View>
        <StatusBar
          backgroundColor="#0984e3"
          barStyle="light-content"
        />
        
          <NavigationBar
            tintColor='transparent'
            style={{backgroundColor:'rgba(116,185,255,0.5)'}}
            title={navBarConfig.title}
            leftButton={
              <View style={{marginTop:13,marginLeft:10,flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>{}} style={{marginRight:7}}>
                  <Icon type={"\uE663"} size="sm" color="black" />
                </TouchableOpacity>
              </View>
            }
            rightButton={
              <View style={{marginTop:13,marginRight:10,flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>{}} style={{marginRight:7}}>
                  <Icon type={"\uE670"} size="sm" color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}} style={{marginRight:7}}>
                  <Icon type={'\uE6A4'} size="sm" color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}>
                  <Icon type={"\uE668"} size="sm" color="black" />
                </TouchableOpacity>
              </View>
            }
          />
        
        <ScrollView style={{marginBottom:40,paddingTop:55,top:-45,zIndex:-1}}>
          <WingBlank size='md'>
            <View style={{paddingBottom:50}}>
  
              <Grid data={barangs}
                hasLine={false}
                columnNum={2}
                itemStyle={{ height:240, }}
                onClick={()=>console.log('klik')}
                renderItem={(dataItem,i) => (
                  <View style={{ paddingBottom:0,flexDirection:'column',alignItems:'center',justifyContent:'center' }}>
                    <View style={{position:'absolute',zIndex:2,top:203,right:5}}>
                      <TouchableOpacity onPress={()=>this.love(i)}>
                        <Icon type={iconLove[i]==true?'\uE6A3':'\uE6A4'} size="sm" color="#eb4d4b" />
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={()=>history.push("/detailBarang",{id_barang: dataItem.id})}>
                      <Image source={{uri: imgUrl+dataItem.image}} style={{ width: imgWidth,height:150 }} />
                    </TouchableOpacity>
                    <View style={{justifyContent:'flex-start',alignSelf:'flex-start', paddingLeft:3}}>
                      <Text numberOfLines={2} style={{fontWeight:'bold'}}>{dataItem.nama}</Text>
                      {/* <Text numberOfLines={1}>Kategori</Text> */}
                      <View style={{flexDirection:'row'}} id='harga'>
                        <Text 
                          style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>
                          Rp {dataItem.harga} 
                        </Text>
                        <Text> -{dataItem.diskon}%</Text>
                      </View>
                      <Text>Rp {this.formatNumber(this.diskon(dataItem.harga, dataItem.diskon))}</Text>
                    </View>
                  </View>
                )}
              />

            </View>
          </WingBlank>
        </ScrollView>
      </View>
    );
  }
}

// var styles = StyleSheet.create({
//   containerImg: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//     position: 'relative'
//   },
//   canvasImg: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     bottom: 0,
//     right: 0,
//   },
// });
