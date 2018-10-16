import React, { Component } from 'react';
import { Image,View,Platform} from  'react-native'
import { 
  Content, Text, Header, Container, Left,
  Body, Item,Footer
} from 'native-base';

import { Col, Row, Grid } from "react-native-easy-grid";

import styles from '../../styles/styles';
import gosek from '../../styles/gosek';

export default class Home extends Component {
  render() {
    //TODO: Buat Function Sendri Reuseable Component masing masing View
    return (
      <Container style={gosek.appStyle}>
          <Header style={gosek.Header}>
            <Left style={{paddingLeft:5}}>
                <Image resizeMode="contain" style={gosek.imgNavbar} source={require('../../images/Logo_app.png')} />
            </Left>
          </Header>
          <Content style={gosek.containerStyle}>
            <View style={gosek.gopay_Style}>
                <Body style={gosek.gopay_header}>
                  <Image source={require('../../images/gopayLogo.png')} resizeMode="contain"/>
                  <Text style={gosek.textStyle}>Rp 192.000</Text>
                </Body>
                <Body style={gosek.gopay_body}>
                  <Item style={gosek.gopay_item}>
                    <Image source={require('../../images/btn_transfer_gopay.png')} resizeMode="contain"/>
                    <Text style={gosek.gopay_itemText}>Tranfer</Text>
                  </Item>
                  <Item style={gosek.gopay_item}>
                    <Image source={require('../../images/btn_scanqr_gopay.png')} resizeMode="contain"/>
                    <Text style={gosek.gopay_itemText}>Scan Qr</Text>
                  </Item>
                  <Item style={gosek.gopay_item}>
                    <Image source={require('../../images/btn_Topup_gopay.png')} resizeMode="contain"/>
                    <Text style={gosek.gopay_itemText}>Top Up</Text>
                  </Item>
                  <Item style={gosek.gopay_item}>
                    <Image source={require('../../images/btn_Home_gopay.png')} resizeMode="contain"/>
                    <Text style={gosek.gopay_itemText}>Home</Text>
                  </Item>
                </Body>
            </View>
            <Grid style={gosek.ContainerMenu}>
              <Row style={gosek.barisMenu}>
                <Col style={gosek.menu_item}>
                  <Image source={require('../../images/btn_goride_menu.png')}  style={gosek.menu_itemImg} resizeMode="contain"/>
                  <Text style={gosek.menu_itemText}>GO-RIDE</Text>
                </Col>
                <Col style={gosek.menu_item}>
                  <Image source={require('../../images/btn_gotaxi_menu.png')}  style={gosek.menu_itemImg} resizeMode="contain"/>
                  <Text style={gosek.menu_itemText}>GO-CAR</Text>
                </Col>
                <Col style={gosek.menu_item}>
                  <Image source={require('../../images/btn_gobluebird_menu.png')}  style={gosek.menu_itemImg} resizeMode="contain"/>
                  <Text style={gosek.menu_itemText}>GO-BLUEBIRD</Text>
                </Col>
                <Col style={gosek.menu_item}>
                  <Image source={require('../../images/btn_goFood_menu.png')}  style={gosek.menu_itemImg} resizeMode="contain"/>
                  <Text style={gosek.menu_itemText}>GO-FOOD</Text>
                </Col>
              </Row>
              <Row style={gosek.barisMenu}>
                <Col style={gosek.menu_item}>
                  <Image source={require('../../images/btn_gosend_menu.png')}  style={gosek.menu_itemImg} resizeMode="contain"/>
                  <Text style={gosek.menu_itemText}>GO-SEND</Text>
                </Col>
                <Col style={gosek.menu_item}>
                  <Image source={require('../../images/btn_gopoint_menu.png')}  style={gosek.menu_itemImg} resizeMode="contain"/>
                  <Text style={gosek.menu_itemText}>GO-POINTS</Text>
                </Col>
                <Col style={gosek.menu_item}>
                  <Image source={require('../../images/btn_gopulsa_menu.png')}  style={gosek.menu_itemImg} resizeMode="contain"/>
                  <Text style={gosek.menu_itemText}>GO-PULSA</Text>
                </Col>
                <Col style={gosek.menu_item}>
                  <Image source={require('../../images/btn_gomore_menu.png')}  style={gosek.menu_itemImg} resizeMode="contain"/>
                  <Text style={gosek.menu_itemText}>MORE</Text>
                </Col>
              </Row>
            </Grid>
             {/* Todo : buat Bloaview */}

             {/*  TODO : BlogView*/}
        </Content>

        {/* Todo : buat Navigasi */}
        <Footer>
          <Text>
            Belum Ada Navigasi
          </Text>
        </Footer>
      </Container>
    )
  }
}