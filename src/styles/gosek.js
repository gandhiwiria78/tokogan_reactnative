import { StyleSheet } from "react-native";
import {Fonts} from '../assets/Fonts';

export default StyleSheet.create({
    imgNavbar: {
        width:100,
    },
    appStyle:{
        flexDirection: "column",
    },
    Header:{
        backgroundColor:'white',
        borderBottomWidth: 0,
      
    },
    containerStyle:{
        backgroundColor: '#F5F5EF'
    },
    gopay_Style:{ 
        backgroundColor: '#fff',
        paddingHorizontal:10
    },
    gopay_header:{
        flex:1,
        flexDirection: 'row',
        justifyContent:'space-between',
        width:'100%',
        height:50,
        borderTopStartRadius:10,
        borderTopEndRadius:10,
        backgroundColor:'#126095', 
        paddingHorizontal: 10,
    },
    gopay_body:{
        flex:1,
        flexDirection: 'row',
        width:'100%',
        height:100,
        borderBottomStartRadius:10,
        borderBottomEndRadius:10,
        justifyContent:'space-between',
        alignContent: 'center',
        backgroundColor:'#136EA8' ,
        paddingHorizontal: 10,
    },
    gopay_item:{
        flexDirection:'column',
        borderBottomWidth:0,
    },
    gopay_itemText:{
        paddingTop: 10,
        fontFamily: Fonts.applesdBold,
        color:'#fff',
        textAlign:'center',
    },
    textStyle:{
        fontFamily: Fonts.applesdBold,
        color:'#fff',
    },

    //STYE Menu DI sini 
    ContainerMenu:{
        backgroundColor:'#fff',
        paddingBottom: 20,
    },
    barisMenu:{

        paddingTop: 10,
    },
    menu_itemText:{
        fontFamily: Fonts.applesdsemiBold,
        textAlign:'center',
        fontSize:11
    },
    menu_item:{
         textAlign:'center',
         paddingHorizontal: 10,
    },
    menu_itemImg:{
        width:'100%',
    },
    menu_blog:{
        height:500,
        backgroundColor:'white',
        flexDirection:'column'
    }, 
    menu_blog_Itemimg:{
        width:'10%',
    },
    menu_blog_item_text:{
        fontSize:50,
        fontFamily : Fonts.applesdBold,
        textAlign: 'center',
    },
    menu_blog_container:{
        flexDirection:'row',
    },
    menu_blog_item_textContainer:{
        flexDirection: 'column',
    },
    menu_blog_item_imgblog:{
        width: '50%',
    },
    menu_blog_item_undernote:{
        
    },
    
})