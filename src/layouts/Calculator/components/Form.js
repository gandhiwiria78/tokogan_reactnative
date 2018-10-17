import React, { Component } from 'react';
import {Container, Header, Input, Content, Button, } from 'native-base';
import {Text} from 'react-native';
import { login } from '../reducers/formReducer'
import { connect } from 'react-redux';

export class Form extends Component {
  constructor(props){
    super(props);
    this.state ={}
  }

  onSubmit=(e)=>{
    let {email, nama} = this.state;
    // console.log(email)
    this.props.login(email, nama);
  }
  
  render() {
    let {email,nama} = this.state;
    let{ isloginSukses,isloginPending,isloginError } = this.props;
   
    return (
      <Container>
        <Header>
            <Text>Contoh Form dengan Redux</Text>
        </Header>
        <Content padder>
          <Input name="email" placeholder="Email" onChangeText={e=>{
              this.setState({
                email :e
              })
             }
            }/>
          <Input name="name" placeholder="Nama"  onChangeText={e =>{
              this.setState({
                nama :e
              })
             }
            }/>
          <Button block primary onPress={this.onSubmit}>
            <Text>Submit</Text>
          </Button>
          <Text>Keterangan:</Text>
          { isloginError && <Text>{isloginError.message}</Text>}
          { isloginSukses && <Text> Login Berhasil </Text>}
          { isloginPending && <Text> Harap Tunggu Sebentar .... </Text>}
        </Content>
      </Container>
    )
  }
  
}

//state menjadi props yg di hasilkan oleh combine reducer berdasarkan function reducer
const mapStateToProps = (state) => {
  //console.log(state.form)
  return {
    isloginSukses: state.form.isloginSukses,
    isloginPending:state.form.isloginPending,
    isloginError: state.form.isloginError,
  }
};

// Bearti ini adalah pemangilan sebuah function dari reducer sehingga bisa di peroleh props
const mapDispatchToProps = (dispatch) => {
  return {
    login : (email,nama)=>dispatch(login(email,nama))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)

/*
  Tujuam untuk mengetahui kegunaan redux, serta pemahaman tentang state dan props sebagai dasar redux
  Dari latihan diatas dapat di simpulkan bahwa props itu adalah sebuah properti yang bisa bekomunikasi / bisa memberikan 
  trigger ke component lain 

  sedangkan state hanya bisa memberikan triger ke komponen itu sendiri

  -> State To Props
  contoh pada diatas kita mengubah state menjadi props itu berfungsi untuk
  memberikan triger kepada komponen lain untuk mentriger nilai yang ada 
  sehingga nilai tersebut bisa di proses oh komponen lain

  -> dispacth 
  disini dipacth berfungsi untuk mengubah sebuah function menjadi props
  juga mirip dengan state ke props akan tetapi yng diubah di dispatch lebih ke 
  function atau class yang terdapat pada komponen tertentu
  dan bisa dipakai di semua komponen 

  dikedapan ini bisa berguna untuk pemanggilan bahwa status user loggin atau tidak

  Redux 
  redux dari latihan diatas berguna untuk berinteraksi dengan props yang berasal dari state atau function
  antara komponen 
  misalnya 
  user sudah login maka dari komponen form login sudah memberikan state kalo sudah login 
  dan menyimpan bahwa user tidak perlu login kembali
  ketika komponen tersebut tidak muncul maka kita tinggal panggil state tersebut dari redux
  
  
*/
