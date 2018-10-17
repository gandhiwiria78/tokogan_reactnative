import React, { Component } from 'react'
import {
    Container,Content,Header,
    Button,
} from 'native-base'

import { Text, View } from 'react-native'


export class Side1 extends Component {
  onButtonPress=()=>{
    this.props.navigation.navigate('Side2')
  }
  render() {
    return (
      <Container>
        <Header>
            <Text>Side1 </Text>
        </Header>
        <Content>
            <Text> Side1 nieh </Text>
            <Button block onPress={this.onButtonPress}>
                <Text>Pindah ke side 2</Text>
            </Button>
        </Content>
      </Container>
    )
  }
}

export default Side1