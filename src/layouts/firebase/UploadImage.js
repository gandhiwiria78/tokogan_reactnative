import React, { Component } from 'react'
import { Text, View } from 'react-native'

import RNFetchBlob from 'rn-fetch-blob'
import ImagePicker from 'react-native-image-picker';
import { Container, Content, Header, Title } from 'native-base';


export default class UploadImage extends Component {
  selectedImage(){
    let Options ={
      
    }
    ImagePicker.launchImageLibrary()
  }
  render() {
    return (
      <Container>
        <Header>
          <Title>Upload Gambar ke FIrebase Storage</Title>
        </Header>
        <Content>
          <Text> textInComponent </Text>

          <Button block
          onPress={()=>this.selectedImage()}>

          </Button>
        </Content>
      </Container>
    )
  }
}