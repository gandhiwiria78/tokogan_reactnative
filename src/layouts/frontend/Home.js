import React, { Component } from 'react';
import {Text, StyleSheet} from 'react-native';
import {Container, Content} from 'native-base';
import {Grid } from 'react-native-easy-grid';
import axios from 'axios';

//ambil komponen yg telah dibuat
import Headers from './Component/headers';
import NavBarBottom from './Component/navbar';
import Carousels from './Component/carousel';
import Flashsale from './Component/flashsale';
import {GriditemProduk} from './Component/common';


//  TODO: Belajar dengan redux
//  redux adalah state manajemen dengan Store, Reducer dan Actions
//  untuk interkasi antar komponen dengan state dan props
//  untuk perpindahan antar layout pakai module react-navigation 


class Home extends Component {
  state = {
    produk:[],
  }

  // sementara TANPA pengecekan auth:api di middleware
  // TODO: buat dengan middleware dengan redux dan cek auth api dengan credential key sebelun ambil data

  componentDidMount(){

    axios.get('http://127.0.0.1:8000/getproduk').then(
        (data)=>{
          this.setState({
            produk:data.data
          })
        }
    )
  }

  render() {
    //Belum menggunakan Redux
    const dataProduk = this.state.produk.map((data,key)=>{
        return(
           <GriditemProduk data={data} key={data.id}/>
        )
    });
    return (
      <Container>
        <Headers/>
        <Content>
          <Carousels/>
          <Flashsale/>
          <Text style={stylesi.textTitleStyle}>Best Produk</Text>
          <Grid style={stylesi.gridStyle}>
            {dataProduk}
          </Grid>
         </Content>
         <NavBarBottom/>
      </Container>
    );
  }
}

const stylesi = StyleSheet.create({
  gridStyle:{
    width: '100%', 
    flexDirection: 'row', 
    flexWrap: 'wrap',
    backgroundColor:'#f2f2f2',
  },
  textTitleStyle:{
    fontSize:23,
    fontWeight:'bold',
    paddingTop:20,
    paddingLeft: 10,
  }
});

export default Home;