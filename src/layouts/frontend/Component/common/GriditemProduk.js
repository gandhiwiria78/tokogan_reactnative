import React from 'react';
import {CardItem} from 'native-base';
import {Col} from 'react-native-easy-grid';
import { Text, Image } from 'react-native';
import Rupiah from '../../format/matauang';

const GriditemProduk=(props)=>{
    const{ id, nama, harga, image }= props.data; //props.data.id
    const {item_imgStyle,item_textNama,item_textHarga,itemStyle} = styles;
    return(
        <CardItem style={itemStyle} >
            <Col style={{flex:1}}>
                <Image style={item_imgStyle} resizeMode="contain" source={{uri:'http://127.0.0.1:8000'+image}}/>
                <Text style={item_textNama} >{nama}</Text>
                <Text style={item_textHarga} >Rp {Rupiah(harga)}</Text>
            </Col>      
        </CardItem>
    );
};

const styles ={
    itemStyle:{
        width: '49%', 
        aspectRatio: 1,
        justifyContent: 'center',
        margin:1,
    },
    item_imgStyle: {
        width: '100%',
        height: '80%',
    },
    item_textNama: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: 10,
    },
    item_textHarga: {
        fontSize: 14,
        color: '#04D5C1',
        fontWeight: 'bold',
        paddingTop: 5,
        paddingBottom: 4,
    },
};
export {GriditemProduk};