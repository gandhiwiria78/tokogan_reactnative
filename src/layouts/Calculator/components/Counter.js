import React, { Component } from 'react';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';
import { increment, decrement } from '../actions/index.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Counter extends Component{
  render(){
   // console.log(this.props.count);
    return(
      <Container>
        <Header>
          <Body>
            <Title>Redux Counter</Title>
          </Body>
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Text>
               Nilai: {this.props.count}
              </Text>
            </CardItem>
          </Card>
          <Button onPress= {() => this.props.increment()}>
            <Text>Increment</Text>
          </Button>
          <Button  onPress= {() => this.props.decrement()}>
            <Text>Decrement</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
// state untuk di bind ke tampilan
function mapStateToProps(state){
  return{
    count : state.count
  };
}

// actions dengan props 
function matchDispatchToProps(dispatch){
  return bindActionCreators({
      increment: increment,
      decrement: decrement
    }, dispatch );
}
export default connect(mapStateToProps, matchDispatchToProps)(Counter);


// Q :Apakah ini bisa dipakai di tampilan lain ???