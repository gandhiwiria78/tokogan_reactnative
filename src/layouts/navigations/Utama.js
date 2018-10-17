import React, { Component } from 'react'
import {
    Container,Content,Header,
    Button,
} from 'native-base'
import {createStackNavigator} from 'react-navigation'
import { Text, View } from 'react-native';

import Side1 from './Side1';
import Side2 from './Side2';

export class Utama extends Component {
  onButtonPress=()=>{
    this.props.navigation.navigate('Side1');
  }
  
  render() {
    return (
      <Container>
        <Header>
            <Text> Utama </Text>
        </Header>
        <Content>
            <Text> Utama nieh </Text>
            <Button block onPress={this.onButtonPress}>
                <Text>Pindah ke side 1</Text>
            </Button>
        </Content>
      </Container>
    )
  }
}


export default createStackNavigator({
    Home:{
        screen:Utama,
    },
    Side1:Side1,
    Side2:Side2
},{
    initialRouteName:'Home'
})