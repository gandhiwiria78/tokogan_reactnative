import React, { Component } from 'react';
import {  Text, ScrollView, StyleSheet,Image } from 'react-native';
import { Card, Grid } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

export default class flashsale extends Component {
    //TOdo: Sebenrnya harus menggunakan Redux atau Vuex untuk data binding dan mengdispatch props dan state
    // karena saya belm paham penggunaan redux dan vuex maka itu di ganti sementara dengan Model ofline 
  render() {
    return (
        <LinearGradient colors={['#66ffff', '#9966ff', '#33cccc']} style={styles.linearGradient}>
            <ScrollView
                horizontal={true}
                style={styles.container}
            >
                <Grid style={styles.gridStyle} >
                        <Card style={styles.item_flashsale}>
                            <Text style={styles.item_textHeader}>
                                FLASH SALE DEAL
                            </Text>
                            <Text style={styles.item_textHeader_waktu}>Akan Berakhir :{"\n"} 02:50:40</Text>
                            <Text style={styles.item_textHeader_more}>Lihat Semua</Text>
                        </Card>   
                        {/* DIsini Tempat Foreachnya  */}
                        <Card style={styles.itemStyle}>
                            <Image style={styles.item_imgStyle} resizeMode="contain" source={require('../../../images/vivo.jpg')}/>
                            <Text style={styles.item_textNama}>
                                Vivo FinseXs 14
                            </Text>
                            <Text style={styles.item_textHarga}>
                                Rp 2.500.000
                            </Text>
                        </Card>    
                        <Card style={styles.itemStyle}>
                            <Image style={styles.item_imgStyle} resizeMode="contain" source={require('../../../images/vivo.jpg')}/>
                            <Text numberOfLines={2} style={styles.item_textNama}>
                                Vivo FinseXs 14 asdskkdj qweiweuweoqweieu qweieuuew
                            </Text>
                            <Text style={styles.item_textHarga}>
                                Rp 2.500.000
                            </Text>
                        </Card>    
                        <Card style={styles.itemStyle}>
                            <Image style={styles.item_imgStyle} resizeMode="contain" source={require('../../../images/vivo.jpg')}/>
                            <Text style={styles.item_textNama}>
                                Vivo FinseXs 14 asdasdkqwekj
                            </Text>
                            <Text style={styles.item_textHarga}>
                                Rp 2.500.000
                            </Text>
                        </Card>    
                        <Card style={styles.itemStyle}>
                            <Image style={styles.item_imgStyle} resizeMode="contain" source={require('../../../images/vivo.jpg')}/>
                            <Text style={styles.item_textNama}>
                                Vivo FinseXs 14
                            </Text>
                            <Text style={styles.item_textHarga}>
                                Rp 2.500.000
                            </Text>
                        </Card>    
                        {/* End Foreach */}
                </Grid>
            </ScrollView>
      </LinearGradient>
    );
  }
}

const styles= StyleSheet.create({
    container:{
       height:320,
       paddingHorizontal: 15,
    },
    linearGradient: {
        flex: 1,
        marginTop: 10,
    },
    gridStyle:{
        paddingRight: 40,
        marginVertical:20,
    },
    item_flashsale:{
        width:150,
        backgroundColor:'rgba(0,0,0,0)',
        borderLeftWidth: 0,
        borderBottomWidth: 0,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderWidth: 0,
        borderRadius: 0,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    item_textHeader:{
        color:'#fff',
        fontSize: 26,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 5,  
    },
    item_textHeader_waktu:{
        color:'#fff',
        fontSize: 20,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
    },
    item_textHeader_more:{
        color:'#fff',
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
    },
    item_imgStyle:{
        width:'100%',
        height:'70%',
    },
    item_textNama:{
        fontSize:16,
        fontWeight: 'bold',
        paddingLeft: 8,
        height: 50,
    },
    item_textHarga:{
        fontSize:14,
        color:'#04D5C1',
        fontWeight: 'bold',
        paddingBottom: 4,
        paddingLeft: 8,
    },
    itemStyle:{
        width:150,
        flexDirection: 'column',

        borderRadius:5,
        borderWidth:1.5,
    },
});
