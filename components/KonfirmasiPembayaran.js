import React from 'react';
import {
    StyleSheet,View,Text,StatusBar,TouchableOpacity,ScrollView
} from 'react-native';

export default ({history}) => (
    <View>
        <Text>Konfirmasi Pembayaran</Text>
        <Text onPress={()=>history.goBack()}>Back</Text>
    </View>
);