import React, { Component } from 'react'
import { Text, View,StyleSheet,Image, Dimensions } from 'react-native'
import Carousel from 'react-native-carousel';

let WIDTH= Dimensions.get('window').width;
export default class Carousels extends Component {
  render() {
    return (
      <Carousel delay={4000} hideIndicators={true} animate={true} >
        <View style={styles.container}> 
        <Image style={styles.imageStyle} source={require('../../../images/promo2.jpg')} resizeMode="cover" />
        </View>
        <View  style={styles.container}> 
            <Image style={styles.imageStyle} source={require('../../../images/promo2.jpg')} resizeMode="cover" />
        </View>
        <View style={styles.container}> 
        <Image style={styles.imageStyle} source={require('../../../images/promo2.jpg')} resizeMode="cover" />
        </View>
      </Carousel>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        width: WIDTH,
        backgroundColor:'red',
        flex:1,
    },
    imageStyle:{
       width:WIDTH,
       height:160, 
    }
});