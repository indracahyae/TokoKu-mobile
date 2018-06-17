import React, { Component } from 'react';
import {
  StyleSheet,View,Text,StatusBar,TouchableOpacity,
  ScrollView,Image,Dimensions
} from 'react-native';
import { Button, WhiteSpace, WingBlank, Modal, Icon, Grid, List} from 'antd-mobile';
import NavigationBar from 'react-native-navbar';

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
    tintColor: 'white'
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
      iconLove: []
    }
  }

  componentDidMount(){
    this.setState({
      iconLove: new Array(20).fill(false)
    });
  }

  love=(i)=>{
    let iconLove = this.state.iconLove;
    iconLove[i] = !iconLove[i];
    this.setState({ iconLove });
    console.log(this.state.iconLove);
  }

  render() {
    console.log(imgWidth);
    let {iconLove} = this.state;

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
            leftButton={
              <View style={{marginTop:13,marginLeft:10,flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>{}} style={{marginRight:7}}>
                  <Icon type={"\uE663"} size="sm" color="white" />
                </TouchableOpacity>
              </View>
            }
            rightButton={
              <View style={{marginTop:13,marginRight:10,flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>{}} style={{marginRight:7}}>
                  <Icon type={"\uE670"} size="sm" color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}} style={{marginRight:7}}>
                  <Icon type={'\uE6A4'} size="sm" color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}>
                  <Icon type={"\uE668"} size="sm" color="white" />
                </TouchableOpacity>
              </View>
            }
          />
        </View>
        <ScrollView style={{marginBottom:85,marginTop:0}}>
          <WingBlank size='md'>
        
            <Grid data={data1}
              hasLine={false}
              columnNum={2}
              itemStyle={{ height:240, }}
              onClick={()=>this.props.history.push("/detailBarang")}
              renderItem={(dataItem,i) => (
                <View style={{ paddingTop:12,paddingBottom:12,flexDirection:'column',alignItems:'center',justifyContent:'center' }}>
                  <View style={{position:'absolute',zIndex:999,top:11,right:3}}>
                    <TouchableOpacity onPress={()=>this.love(i)}>
                      <Icon type={iconLove[i]==true?'\uE6A3':'\uE6A4'} size="sm" color="#eb4d4b" />
                    </TouchableOpacity>
                  </View>
                  <Image source={{uri: dataItem.icon}} style={{ width: imgWidth,height:150 }} />
                  <View style={{justifyContent:'flex-start',alignSelf:'flex-start', paddingLeft:3}}>
                    <Text numberOfLines={2} style={{fontWeight:'bold'}}>Nama xx xxx xxx xxxxx</Text>
                    <Text numberOfLines={1}>Kategori</Text>
                    <Text >Rp 150.000</Text>
                  </View>
                </View>
              )}
            />

          </WingBlank>
        </ScrollView>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  containerImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    position: 'relative'
  },
  canvasImg: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
