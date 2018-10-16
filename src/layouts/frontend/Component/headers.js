import React, { Component } from 'react';
import { Text, View , StyleSheet } from 'react-native';
import {Header, Icon, Item, Input } from 'native-base';


export default class headers extends Component {
  render() {
    return (
      <Header style={Styles.container}>
        <Icon type="Entypo" name='menu' style={Styles.iconStyle}/>
        <Item style={Styles.searchContainer}> 
          <Input placeholder='Cari....'/>
          <Icon type="FontAwesome" name='search' style={{color:'#737373',}}/>
        </Item>
        <Icon type="MaterialCommunityIcons" name='bell-ring' style={Styles.iconButton}/>
        <Icon type="MaterialCommunityIcons" name='comment-processing' style={Styles.iconButton} />
      </Header>
    )
  }
}

const Styles = StyleSheet.create({
  container:{
    backgroundColor:'#04D5E2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height:70,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 1,
  },
  iconStyle:{
    fontWeight: '900',
    fontSize: 50,
    color: '#fff'
  },
  searchContainer:{
      backgroundColor:'#fff',
      flex:1,
      borderRadius:5,
      height:'70%'
  },
  iconButton:{
    
    fontSize: 30,
    color: '#fff',
    alignContent: 'center',
    paddingHorizontal: 8,
  }

});