import React, { Component } from 'react';
import {
  TouchableOpacity
} from 'react-native';
import { Icon } from 'antd-mobile';

export default class Left extends Component {
    constructor(props){
        super(props);
    }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={{marginTop:11,marginLeft:5}}>
          <Icon type="left" size="sm" color="white" />
      </TouchableOpacity>
    );
  }
}

{/* <Image
  source={{ uri: charmander }}
  style={[{ width: 20, height: 20, }, this.props.style]}/> */}