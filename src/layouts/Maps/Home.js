import React, { Component } from 'react';
import { Text, StyleSheet, Dimensions,View } from 'react-native';
import { Container, Content, Header, Input, Button, Icon, Card, CardItem, Body } from 'native-base';
import MapView,{Marker} from 'react-native-maps';
import Polyline from '@mapbox/polyline';
import {Fonts} from '../../assets/Fonts';

/*
TODO: menghitung jarak antar titik dari map sehingga mendapat total jarak 
dengan menggunakan api Diretcion.
Dan Membuat Set lokasi dengan membaca gps kita.
Setelah mendapat nilai gps membuat sebuah maker , sebagai titik acuan perhitungan
setelah set ke lokasi ke dua tanpa membaca gps 

bandingkan nilai di API laravel.

*/
let HEIGHT = Dimensions.get('window').height;

export default class Home extends Component {
  state={
    latitude:null,
    longitude:null,
    coords:[],
    markers:
      [
        {
          //lokasi awal
          latlng:{
              latitude: -0.026330,
              longitude: 109.342506,
          },
          title:'Lokasi 1',
          description:'Test Lokasi 1'
        },
        {
          //lokasi tujuan
          latlng:{
              latitude: -0.026290,
              longitude: 109.334506,
              
          },
          title:'Lokasi 3',
          description:'Test Lokasi 3'
        },
      ]
  }
  async getDirections(loc_awal, loc_tujuan){
    try {
        let respon = await fetch('https://maps.googleapis.com/maps/api/directions/json?origin='+loc_awal+'&destination='+loc_tujuan+'&key=AIzaSyBLQoyC7tTGQGXtYIS4MFTRR0Q2tzb8uw0');
        let responJson = await respon.json();
        console.log(responJson);
        let points = Polyline.decode(responJson.routes[0].overview_polyline.points);
        let coords = points.map((point,index) => {
          return {
            latitude :point[0],
            longitude:point[1],
          }
        })
        this.setState({coords:coords});
        return coords;
    } catch (error) {
     // alert('Error Kode'+error)
      return error;
    }
  }

  componentDidMount(){
      navigator.geolocation.getCurrentPosition(
        (posisi) => {
          this.setState({
            latitude:posisi.coords.latitude,
            longitude:posisi.coords.longitude,
            error:null,
          })
          this.margeLot();
        },
          (error) => this.setState({
            error:error.message
          },{
            enableHighAccuracy:false, timeout:2000000, maximumAge:1000
          })
      )
  }
  margeLot(){
    let { latitude, longitude} = this.state;
    if(latitude != null && longitude!=null){
      let concatlot = latitude+ ',' +longitude
      this.setState({
        concat:concatlot
      },()=>{
        this.getDirections(concatlot,'-6.270565,106.759550');
      });
    }
  }
  onButtonpress(){
    this.setState({
      markers:[
        {
          latlng:{
              latitude: -0.026630,
              longitude: 109.332506,
              
          },
          title:'Lokasi 1',
          description:'Test Lokasi 1'
        },
      ]
    })
  }

  render() {
    let { latitude, longitude} = this.state;
    return (
      <Container >
        <Header style={styles.headerStyle}>
            <Text style={styles.item_text_Big}>Testing Maps</Text>
        </Header>
        <Content >
        
        <MapView 
         initialRegion={{
          latitude:-6.270565,
          longitude:106.759550,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,     
          }}
            style={styles.mapsStyle}
          >
          {!!latitude && !!longitude && 
            <MapView.Marker 
              coordinate={{'latitude':latitude,'longitude': longitude}}
              title= {"Lokasi Kamu"}
            />  
          }

        </MapView>
        {/* <MapView
            style={styles.mapsStyle}
            initialRegion={{
              latitude: -0.026330,
              longitude: 109.342506,
              latitudeDelta: 0.0222,
              longitudeDelta: 0.0011,
            }}>
            {this.state.markers.map((marker,key) => (
                <Marker
                  key={key}
                  coordinate={marker.latlng}
                  title={marker.title}
                  description={marker.description}
                />
              ))}
        </MapView> */}

        {/* <Button block onPress={()=>this.onButtonpress()}>
          <Text>Tambah Lokasi</Text>
        </Button> */}
        <View style={styles.cardStyle}>

        <Card style={styles.item_cardStyle} >
          <CardItem style={styles.item_header}header>
            <Text style={styles.item_text}>HEADER ITEM MAPS</Text>
          </CardItem>
          <CardItem style={styles.item_body}>
            <Body>
                <Text style={[styles.item_text,styles.item_text_Big]}>Alamat Detail</Text>
                <Text style={styles.item_text}> Detail</Text>
                <Text style={styles.item_text}> Detail</Text>
            </Body>
          </CardItem>
        </Card>
        </View>
        </Content>
      </Container>
    );
  }
}

const styles= StyleSheet.create({
    containerStyle:{
      flex:1,
      justifyContent: 'center',
    },
    cardStyle:{
      position:'absolute',
      top:'60%',
      padding: 10,
      width:'100%',
      backgroundColor:'rgba(0,0,0,0)'
    },
    item_cardStyle:{
      borderWidth: 10,
    },
    item_header:{
      backgroundColor:'#04D5E2',
    },
    item_body:{
      backgroundColor:'#00cccc',
    },  
    item_text:{
      fontSize:15,
      fontFamily: Fonts.applesdBold,
      color:'white'
    },
    item_text_Big:{
      fontSize:20,
      fontFamily: Fonts.applesdBold,
      color:'white'
    },
    mapsStyle:{
      height: HEIGHT,
      width:'100%',   
      position:'relative'
    }, 
    headerStyle:{
      backgroundColor:'#00cccc',
    }
})
