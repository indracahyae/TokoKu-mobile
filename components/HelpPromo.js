import React from 'react';
import {
    StyleSheet,View,Text,StatusBar,TouchableOpacity,ScrollView
} from 'react-native';
import { Button, WingBlank, Icon } from 'antd-mobile';
import NavigationBar from 'react-native-navbar';
import {history} from '../App';
import LeftButton from './leftButton';

const navBarConfig = {
    leftButton : {
        title: 'back',
        handler: () => history.goBack(),
        tintColor: 'white'
    },
    rightButton : {

    },
    title : {
        title: 'Tentang Promo',
        tintColor: 'white'
    }
};

export default ({history}) => (
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
        />
        </View>
        <ScrollView style={{marginBottom:45,marginTop:10}}>
        <WingBlank>
            <Text > Tentang Promo</Text>
        </WingBlank>
        </ScrollView>
    </View>
);