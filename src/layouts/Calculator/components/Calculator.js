import React, { Component } from 'react';
import { Text, StyleSheet,TouchableOpacity } from 'react-native';
import {Container, Header, Content } from 'native-base';
import {Grid,Row,Col} from 'react-native-easy-grid';

export class Calculator extends Component {
    state ={
        hasil:0,
        operator:'',
        angka1:'',
        angka2:''
    }
    hitung(){
        let {angka1,angka2,operator} = this.state;
        angka1 = parseInt(angka1);
        angka2 = parseInt(angka2);

        let hasil = 0
        if(operator==='/'){
            hasil = angka1 / angka2
        }else if(operator==='-'){
            hasil = angka1-angka2
        }else if(operator==='+'){
            hasil = angka1+angka2
        }else if(operator==='x'){
            hasil = angka1*angka2
        }
        return hasil;
    }

    onbuttonpress(input){
        
        /*
            LOGIKA dari kalkulator sederhana adalah 
            jika angka ditekan maka akan di menganti hasil ke perhitungan 
            jika angka tekan kedua maka diakan menambahkan angka tersebut di akhir angka perhtngan
            jika operator selain = ditekan maka angka 2 akan diset untuk ke 
            jika operator di tekan maka akan menghitung sesuai operator yg di inputkan
            Jika operator ditekan maka hasil akan di masukan ke view
            jika angka tidak ditekan dan langsung menekan operator angka pertama akan dianggap 0 ,
            jika angka 1 ada , hasil kosong dan operator ada maka set angka2
            jika angka 1 kosong ,operator kosong , hasil kosong  maka set angka 1
            
            jika angka 1 ada, angka 2 ada , ada operator ada, dan menekan operator lagi selain '='
            maka hitung terlebih dahulu dan letakan hasilnya  diangka 1 dan reset angka2 dan operator
        */
       let {angka1,angka2,hasil,operator} = this.state;

       
       if(typeof input === 'number'){
         
        if (angka1 ==='' && hasil ===0 && operator ===''){
            console.log('angka1')
            this.setState({
                angka1: angka1+input,
            })
        }else if (angka1 !=='' && hasil ===0 && operator ===''){
            console.log('masih angka1')
            this.setState({
                angka1: angka1+input,
            })
        }else if (angka1 !== '' && hasil ===0 && operator !==''){
            console.log('angka2')
            this.setState({
                angka2: angka2+input,
            })
        }

       }else if (typeof input ==='string'){

        //console.log('this is operator pressed')
        if(input === '='){
            //disini tempat perhitungannya
            //  jika menekan '=' maka reset semua angka dan operator 
            this.setState({
                hasil: this.hitung(),
                operator:'',
                angka1:'',
                angka2:'',
            })

        }else if(input==='reset'){
            this.setState({
                hasil: 0,
                operator:'',
                angka1:'',
                angka2:'',
            })
        }else{
            if (angka1 !== '' && angka2 !=='' && operator !==''){
                this.setState({
                    hasil: 0,
                    operator:'',
                    angka1:this.hitung(),
                    angka2:'',
                })
            }
            this.setState({
                operator: input
            })
        }
       

        
       }

      // console.log('angka1='+angka1+'angka2='+angka2+'hasil='+hasil+'operator='+operator)
    }

    onrenderHasil(){
        let {angka1,angka2,hasil,operator} = this.state;

        if (angka1 !=='' && hasil !==0 && operator !==''){
            return (
                <Text style={styles.textHasilStyle}>
                    {hasil}
                </Text>
            )
        }else if (angka1 !=='' && hasil ===0 && operator ===''){
            return (
                <Text style={styles.textHasilStyle}>
                    {angka1}
                </Text>
            )
        }else if (angka1 !=='' && operator !==''){
            return (
                <Text style={styles.textHasilStyle}>
                    {angka1}{operator}{angka2}
                </Text>
            )
        }else if (angka1 ==='' && angka2 ==='' && operator ===''){
            return (
                <Text style={styles.textHasilStyle}>
                    {hasil}
                </Text>
            )
        }
    }
    render() {
    return (
        <Container>
            <Header style={styles.hasilStyle}>
               
                { this.onrenderHasil() }
                
            </Header>
            <Content>
                <Grid style={styles.containerStyle}>
                    <Row >
                        <Col style={styles.colStyle}>
                            <TouchableOpacity onPress={()=>this.onbuttonpress(7)} style={{flex:1}}>
                                <Text style={styles.textStyle}>7</Text>
                            </TouchableOpacity>
                        </Col>
                        <Col style={styles.colStyle}>
                            <TouchableOpacity onPress={()=>this.onbuttonpress(8)} style={{flex:1}}>
                                <Text style={styles.textStyle}>8</Text>                                
                            </TouchableOpacity>
                        </Col>
                        <Col style={styles.colStyle}>
                            <TouchableOpacity onPress={()=>this.onbuttonpress(9)} style={{flex:1}}>
                                <Text style={styles.textStyle}>9</Text>
                            </TouchableOpacity>
                        </Col>
                        <Col style={styles.colStyle}>
                            <TouchableOpacity onPress={()=>this.onbuttonpress('/')} style={{flex:1}}>
                                 <Text style={[styles.textStyle,styles.textOperator]}>/</Text>
                            </TouchableOpacity>
                        </Col>
                    </Row>
                    <Row >
                        <Col style={styles.colStyle}>
                            <TouchableOpacity onPress={()=>this.onbuttonpress(4)} style={{flex:1}}>
                                 <Text style={styles.textStyle}>4</Text>
                            </TouchableOpacity>
                        </Col>
                        <Col style={styles.colStyle}>
                            <TouchableOpacity onPress={()=>this.onbuttonpress(5)} style={{flex:1}}>
                                <Text style={styles.textStyle}>5</Text>
                            </TouchableOpacity>
                        </Col>
                        <Col style={styles.colStyle}>
                            <TouchableOpacity onPress={()=>this.onbuttonpress(6)} style={{flex:1}}>
                                <Text style={styles.textStyle}>6</Text>
                            </TouchableOpacity>
                        </Col>
                        <Col style={styles.colStyle}>
                            <TouchableOpacity onPress={()=>this.onbuttonpress('-')} style={{flex:1}}>
                                <Text style={[styles.textStyle,styles.textOperator]}>-</Text>
                            </TouchableOpacity>
                        </Col>
                    </Row>
                    <Row >
                        <Col style={styles.colStyle}>
                            <TouchableOpacity onPress={()=>this.onbuttonpress(1)} style={{flex:1}}>
                                 <Text style={styles.textStyle}>1</Text>
                            </TouchableOpacity>
                        </Col>
                        <Col style={styles.colStyle}>
                            <TouchableOpacity onPress={()=>this.onbuttonpress(2)} style={{flex:1}}>
                                <Text style={styles.textStyle}>2</Text> 
                            </TouchableOpacity>
                        </Col>
                        <Col style={styles.colStyle}>
                            <TouchableOpacity onPress={()=>this.onbuttonpress(3)} style={{flex:1}}>
                                <Text style={styles.textStyle}>3</Text>
                            </TouchableOpacity>
                        </Col>
                        <Col style={styles.colStyle}>
                            <TouchableOpacity onPress={()=>this.onbuttonpress('+')} style={{flex:1}}>
                                <Text style={[styles.textStyle,styles.textOperator]}>+</Text>
                            </TouchableOpacity>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={[{flex:2},styles.colStyle]}>
                            <TouchableOpacity onPress={()=>this.onbuttonpress(0)} style={{flex:1}}>
                                <Text style={[styles.textStyle]}>0</Text>
                            </TouchableOpacity>
                        </Col>

                        <Col style={[{flex:1},styles.colStyle]}>
                            <TouchableOpacity onPress={()=>this.onbuttonpress('=')} style={{flex:1}}> 
                                <Text style={[styles.textStyle,styles.textOperator]}>=</Text>
                            </TouchableOpacity>
                        </Col>
                        <Col style={[{flex:1},styles.colStyle]}>
                            <TouchableOpacity onPress={()=>this.onbuttonpress('x')} style={{flex:1}}> 
                                <Text style={[styles.textStyle,styles.textOperator]}>x</Text>
                            </TouchableOpacity>
                        </Col>
                    </Row>
                    <TouchableOpacity onPress={()=>this.onbuttonpress('reset')} style={{flex:1}}> 
                                <Text style={[styles.textStyle,styles.textOperator]}>Reset</Text>
                    </TouchableOpacity>
                </Grid>
            </Content>
        </Container>
    )
  }
}

const styles= StyleSheet.create({
    containerStyle:{
        height:'50%',
        backgroundColor:'#6D6D6D',
    },
    colStyle:{
        borderColor: '#fff',
        borderWidth: 1,
    },
    hasilStyle:{
        backgroundColor:'#EECF72'
    },
    textStyle:{
        textAlign:'center',
        fontSize:30,
    },
    textNol:{
        backgroundColor:'#E8E21E'
    },
    textHasilStyle:{
        justifyContent: 'center',
        fontSize:40,
        alignItems: 'center',
    },
    textSamadengan:{
        
    },
    textOperator:{
        backgroundColor:'#F19C11'
    }
})

export default Calculator