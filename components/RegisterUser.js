import React from 'react';
import {
    StyleSheet,View,Text,StatusBar,TouchableOpacity,ScrollView
} from 'react-native';
import { Button, WhiteSpace, WingBlank, Modal, Icon } from 'antd-mobile';
import NavigationBar from 'react-native-navbar';
import LeftButton from './leftButton';

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
        title: 'Register User',
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
            rightButton={
            <View style={{marginTop:11,marginRight:10}}>
                <TouchableOpacity onPress={()=>{}}>
                    <Icon type="check" size="sm" color="white" />
                </TouchableOpacity>
            </View>
            }
        />
        </View>
        <ScrollView style={{marginBottom:45,marginTop:10}}>
            <WingBlank size='md'>
                <Text > Register user Form</Text>
            </WingBlank>
        </ScrollView>
    </View>
);