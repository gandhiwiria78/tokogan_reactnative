import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import {FooterTab, Footer, Button, Icon, Text} from 'native-base';

export default class navbar extends Component {
  render() {
    return (
        <Footer style={styles.container}>
          <FooterTab style={styles.tabStyle}>
            <Button vertical>
              <Icon type="Feather" name="home" />
              <Text style={styles.textStyle}>Home</Text>
            </Button>
            <Button vertical>
              <Icon type="Feather" name="heart" />
              <Text style={styles.textStyle}>Favorit</Text>
            </Button>
            <Button vertical>
              <Icon type="Feather" name="shopping-cart" />
              <Text style={styles.textStyle}>Transaksi</Text>
            </Button>
            <Button vertical>
              <Icon type="Feather" name="user" />
              <Text style={styles.textStyle}>Akun</Text>
            </Button>
          </FooterTab>
        </Footer>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    borderTopWidth: 0.5,
    marginBottom: 0,
    backgroundColor:'#fff'
  },
  tabStyle:{
    alignContent: 'center', 
    marginBottom: 15,
  },
  textStyle:{
    paddingTop: 7,
  }
})