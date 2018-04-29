import React from 'react';
import {
    StyleSheet,View,Text,StatusBar,TouchableOpacity,ScrollView
} from 'react-native';
import {Switch,Route} from 'react-router-native';

export default ({history}) => (
    <View>
        <Text>Detail Order</Text>
        <Text onPress={()=>history.goBack()}>Back</Text>
    </View>
);