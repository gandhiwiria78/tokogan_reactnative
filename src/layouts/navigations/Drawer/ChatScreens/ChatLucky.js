import React, { Component } from 'react'
import { 
  Container, Content, Header, Left, Button, Icon, Text, Body, Title, Right ,
} from 'native-base'
//import HomeScreen from '../HomeScreens/HomeScreen'

export default class ChatLucky extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress = {()=>{navigation.openDrawer()}} >
            <Icon name='menu'/>       
            </Button>
          </Left>
          <Body>
            <Title> Ini Lucky</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Text> Ini Chat Lucky </Text>
        </Content>
      </Container>
    )
  }
}