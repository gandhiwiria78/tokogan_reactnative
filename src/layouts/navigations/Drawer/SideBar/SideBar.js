import React, { Component } from 'react';
import {
    Container, Content, List, ListItem, Text, Header
} from 'native-base'
import {  Image } from 'react-native';
const routes = ["Home","Chat","Profile","logout"];

export default class SideBar extends Component {
  render() {
    return (
      <Container>
          <Header>
              
          </Header>
          <Content>
         
            <List 
                dataArray={routes}
                renderRow={
                    data =>{
                        return(
                            <ListItem
                              button
                              onPress={()=>{this.props.navigation.navigate(data)}}
                            >
                            <Text>{data}</Text>
                            </ListItem>
                        );
                    }
                }
            /> 
          </Content>
      </Container>
    );
  }
}
