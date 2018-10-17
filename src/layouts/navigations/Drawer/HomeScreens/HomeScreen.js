import React, { Component } from 'react'
import {
    Container, Content, Left, Header,
    Button, Icon, Card, CardItem, Body, Right, Title,

} from 'native-base';

import { Text, View, StatusBar } from 'react-native'

export default class HomeScreen extends Component {
  render() {
    return (
     <Container>
         <Header>
             <Left>
               
                <Button
                    transparent
                    onPress={() => this.props.navigation.openDrawer()}>
                    <Icon name="menu"/>
                </Button>
             </Left>
            <Body>
                <Title>Ini Home</Title>
            </Body>
             <Right/>
         </Header>
         <Content padder>
            <Card>
                <CardItem>
                    <Body>
                        <Text></Text>
                    </Body>
                </CardItem>
            </Card>
            <Button full rounded dark>
                <Text>Chat Deh</Text>
            </Button>
            <Button full rounded primary>
                <Text>Profile</Text>
            </Button>
         </Content>
     </Container>
    )
  }
}