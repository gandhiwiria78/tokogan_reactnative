import React, { Component } from 'react'
import { 
  Container, Content, Header, Left, Button, Icon, Text, Body, Title , Right
} from 'native-base'
//import HomeScreen from '../HomeScreens/HomeScreen'

export default class ChatScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress = {()=>{navigation.openDrawer()}}
            >
            <Icon name='menu'/>
            </Button>
          </Left>
          <Body>
            <Title> Ini Screen </Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Text> Ini Chat Screen </Text>
        </Content>
      </Container>
    )
  }
}