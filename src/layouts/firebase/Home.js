import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Content, Header, Input, Button, Icon, Item } from 'native-base';
import firebase from 'react-native-firebase';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    email :'',
    nama :''
  };
  componentDidMount(){
    
   
    //alert(username)
    //console.log(user)

  }

  signIn=()=>{
    let {email, nama} = this.state;
    console.log('masuk')
    firebase.auth().signInWithEmailAndPassword(email,nama).then((data)=>{
      console.log('succes',data)
    }).catch((error)=>{
      console.log('error',error)
    })
  }

  render() {
    return (
      <Container>
        <Header>
            <Text>Login sederhana Via Firebase </Text>
        </Header>
        <Content>
            <Item>
              <Icon name='user' type='FontAwesome'/>
              <Input name="email" placeholder='masukan email anda' label="email" onChangeText={(e)=>this.setState({email:e})} value={this.state.email} />
            </Item>
            <Input name="nama" placeholder='masukan nama  anda' label="nama" onChangeText={(e)=>this.setState({nama:e})} value={this.state.nama} />
            <Button onPress={this.signIn} block >
              <Text>Sign in</Text>
            </Button>
        </Content>
      </Container>
    );
  }
}
