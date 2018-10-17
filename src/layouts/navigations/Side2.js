import React, { Component } from 'react'
import {
    Container,Content,Header,
    Button,
} from 'native-base'

import { Text, View } from 'react-native'


export class Side2 extends Component {
  onButtonPress=()=>{
    this.props.navigation.navigate('Home')
  }
  render() {
    return (
      <Container>
        <Header>
            <Text>Side2 </Text>
        </Header>
        <Content>
            <Text> SIde2 nieh </Text>
            <Button block onPress={this.onButtonPress}>
                <Text>Balik ke Utama </Text>
            </Button>
        </Content>
      </Container>
    )
  }
}


export default Side2