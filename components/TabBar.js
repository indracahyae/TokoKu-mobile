import React, { Component } from 'react';
import {
  StyleSheet,View,Text,Image,StatusBar,BackHandler
} from 'react-native';
import { Button, WhiteSpace, WingBlank, Modal, Icon, TabBar } from 'antd-mobile';
import {Switch,Route} from 'react-router-native';
import RoutesHome from './RoutesHome';
import RoutesOrder from './RoutesOrder';
import RoutesHelp from './RoutesHelp';
import RoutesAccount from './RoutesAccount';
import {connect} from 'react-redux';

class Main extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectedTab: 'home',
            hidden: false,
        };
        console.log('tab bar');
    }

    componentDidMount(){
        BackHandler.addEventListener('hardwareBackPress', () => {
            var path = this.props.history.location.pathname;
            if( path == '/' || path == '/order' || path == '/help' || path == '/account' ){
                BackHandler.exitApp();
                return true; 
            }else{
                this.props.history.goBack();
                return true;
            }
        });
        this.props.history.push('/');
    }

    renderContent=(pageText)=>{
        console.log(pageText);
        return (
            <View><Text>{pageText}</Text></View>
        );
    }

    render() {
        return (
                <View style={{ height: '100%', width: '100%', top: 0 }}>
                    <TabBar
                        unselectedTintColor="#696969"
                        tintColor="#0984e3"
                        barTintColor="white"
                        hidden={this.state.hidden}
                    >
                    <TabBar.Item
                        title="Home"
                        key="home"
                        icon={require('./img/home.png')}
                        selectedIcon={require('./img/home_select.png')}
                        selected={this.state.selectedTab === 'home'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'home',
                            });
                            this.props.history.push('/');
                        }}
                        data-seed="logId"
                    >
                        {
                            this.state.selectedTab == 'home' &&
                            <RoutesHome/>
                        }
                    </TabBar.Item>
                    <TabBar.Item
                        icon={require('./img/order.png')}
                        selectedIcon={require('./img/order_select.png')}
                        title="Order"
                        key="order"
                        selected={this.state.selectedTab === 'order'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'order',
                            });
                            this.props.history.push('/order')
                        }}
                        data-seed="logId1"
                    >
                        {
                            this.state.selectedTab == 'order' &&
                            <RoutesOrder/>
                        }
                    </TabBar.Item>
                    <TabBar.Item
                        icon={require('./img/help.png')}
                        selectedIcon={require('./img/help_select.png')}
                        title="Help"
                        key="help"
                        dot={true}
                        selected={this.state.selectedTab === 'help'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'help',
                            });
                            this.props.history.push('/help')
                        }}
                    >
                        {
                            this.state.selectedTab == 'help' &&
                            <RoutesHelp/>
                        }
                    </TabBar.Item>
                    <TabBar.Item
                        icon={require('./img/account.png')}
                        selectedIcon={require('./img/account_select.png')}
                        title="Account"
                        key="account"
                        selected={this.state.selectedTab === 'account'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'account',
                            });
                            this.props.history.push('/account');
                        }}
                    >
                        {
                            this.state.selectedTab == 'account' &&
                            <RoutesAccount/>
                        }
                    </TabBar.Item>
                    </TabBar>
                </View>
        );
    }
}

function mapStateToProps(state){
    return{
      allState: state
    };
  }
  const mapDispatchToProps = (dispatch) => ({
    dispatch
  })
  Main = connect(mapStateToProps,mapDispatchToProps)(Main);
  export default Main;