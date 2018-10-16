import React, { Component } from 'react';
import { StyleSheet,Image} from 'react-native';
import { Container, Header, Content, Form, Item, Input,Text,Button, Footer, FooterTab } from 'native-base';
import styles from '../styles/styles'

export class Register extends Component {
  render() {
    return (
      <Container>
        <Content style={styles.containerStyle}>
          <Item style={styles.textStyle}>
              <Image style={styles.imgStyle} resizeMode="contain" source={require('../images/logo.png')}/>
          </Item>
          <Form style={styles.formStyle}>
            <Item >
              <Input   style={styles.inputStyle} placeholderTextColor="white" placeholder="Email" />
            </Item>
            <Item >
              <Input style={styles.inputStyle} placeholder="Password"placeholderTextColor="white" secureTextEntry/>
            </Item>
            <Item >
              <Input style={styles.inputStyle} placeholder="Repeat Password" placeholderTextColor="white" secureTextEntry/>
            </Item>
            <Item>
              <Button style={styles.btnStyle}>
                  <Text>Daftar</Text>
              </Button>
            </Item>
          </Form>
          <Text style={styles.SignText}> Sign In</Text> 
        </Content>
      </Container>
    )
  }
}

export default Register;
