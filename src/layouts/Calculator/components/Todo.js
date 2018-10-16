import React, { Component } from 'react';
import { ListView, Text } from 'react-native';
import {Container, Header, Input, Content, Button, } from 'native-base';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { addTodo } from '../actions'

export class Todo extends Component {
  constructor(){
    super();
    this.state ={
      newTodo:'',
      todolist:[],
    }
  }
  onSubmit=(event)=>{
    this.props.addTodo(this.state.newTodo); 
    this.setState({todolist:this.props.todolist});
  }

  // jika di tekan button maka tambah tambahkan 1
  render() {
    let list = this.state.todolist.map((data, i) =>{
      return <Text key={i}>{data}</Text>
    })
    return (
        <Container>
        <Header>
            <Text>Contoh ADd listitem</Text>
        </Header>
        <Content padder>
          <Input placeholder="Tambah Todo" 
          value = {this.state.newTodo}
          onChangeText={e=>{
              //console.log(this.props.todolist)
              this.setState({
                newTodo :e
              })
             }
            }/>
          <Button block primary onPress={this.onSubmit}>
            <Text>Submit</Text>
          </Button>
          {list}
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    todolist: state.todo.todolist
  }
}

const mapDispatchToProps =(dispatch)=> {
  return {
    addTodo : (newTodo)=>dispatch(addTodo(newTodo)),
    //addTodo :bindActionCreators(addTodo,dispatch(addTodo)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Todo)