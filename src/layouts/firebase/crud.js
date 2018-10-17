
/*
    TODO: membuat contoh penggunaan firebase dengan mudah
    1. buat input nama, dan nomor hp
    2. simpan ke bagian firebase.database().ref
*/
import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Content, Header, Input, Button, Icon, Item, Card, CardItem, H1 } from 'native-base';
import firebase from 'react-native-firebase';


export default class crud extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    isEdit:false,
    hobi :'',
    nama :'',
    data:{}
  };
  componentDidMount(){
   // memanggil database 
    let db= firebase.database();
    /*
     refensi dengan memanggil nama root table
     karena Firebase berupa database dokumen yg tidak memakai Sintax SQL, kita analogikan jka mempunyai table maka 
     saya tinggal merubah nama tabel dengna konsep json
        Contoh data json yng diterapkan di Firebase
        
        {
            namatabel-1:{
                id-1:{
                    nama_colom: 'isi'
                },
                id-2:{
                    nama_colom: 'isi'
                },
            },
            namaTabel-2:{
                id-1:{
                    nama_colom: 'isi'
                },
                id-2:{
                    nama_colom: 'isi'
                },
            },
        }
        jika saya perlu data dari tabel-1 maka tinggal masukan aja ke method .ref
        => ref('/namatabel-1')
        maka kita siap crud di root tabel tersebut 
    */
    let todo = db.ref('Todo');
    
    // dengan memaki metode .on maka setiap perubahan data secara realtime akan diketahui 
    
    todo.orderByKey().on('value',(showData)=>{
        //console.log(showData.val())
        if(showData.val()!==null){
            this.setState({data: showData.val()})

        }
    },(error)=>{
       // console.log(error)
        this.setState({data:{}})
    });
    /*
        Event pada method .on() yaitu:
        Value = mengambil semua event
        child_added = memberikan nilai balik hnya saat ada penambahan data
        child_removed = memberikan nilai balik hanya saat ada penghapusan data,
        child_changed = memberikan nilai balik hanya saat ada perubahan data 
        child_moved = memberikan nilai balik hanya saat ada perubahan posisi data 
    */
  }
  onbuttonHapus(data){
    
    let db = firebase.database();
    db.ref('Todo/'+data).remove();
    console.log('hapus',data);
  }
  onButtonEdit(data){
    let db = firebase.database();
    db.ref('Todo/'+data).once('value',(showData)=>{
        let nama = showData.val().nama;
        let hobi = showData.val().hobi;
        this.setState({
            nama:nama,
            hobi:hobi,
            edit:data,
        })
    })
    this.setState({isEdit:true})
       
  }
  addData=()=>{
    let {hobi, nama} = this.state;
    let db = firebase.database();
   
    let newitem ={
        nama:nama,
        hobi:hobi,
    };
    
    let id = db.ref().child('Todo').push();
    id.set(newitem);
    //console.log('id',id);
    //console.log('masuk'+hobi+nama)
    this.setState({
        hobi :'',
        nama :'',
    })
  }
  updateData(){
    let iddata= this.state.edit;
    console.log('id',iddata);
    let db = firebase.database();
    let updateItems = {
        nama:this.state.nama,
        hobi:this.state.hobi
    }
    db.ref('Todo/'+iddata).update(updateItems);
    this.setState({
        isEdit:false,
        hobi :'',
        nama :'',
    })
  }
  onEdit(){
      if (this.state.isEdit){
          return(
            <Button onPress={()=>this.updateData()} block >
                <Text>Edit to List</Text>
            </Button>
          )
      }else{
          return(
            <Button onPress={this.addData} block >
                <Text>Add to List</Text>
            </Button>
          )
      }
  }
  render() {
    //console.log('list data', this.state.data);
    let {data} = this.state;
    
    let test = Object.keys(data).sort()
    //console.log('json',JSON.stringify(data));
    //console.log('parse',JSON.parse(JSON.stringify(data)))
    //console.log('data',data)
    //console.log('sort',test)
    //console.log('Nosort',Object.keys(data));

    let todo = Object.keys(data).sort().map((items)=>{
        return (
            <CardItem key={items}>
                <Text >nama:{data[items].nama}, Hobi:{data[items].hobi}</Text>
                <Button
                    onPress={()=>this.onbuttonHapus(items)}
                >
                    <Text>Hapus</Text>
                </Button>
                <Text> Atau </Text>
                <Button
                    onPress={()=>this.onButtonEdit(items)}
                >
                    <Text>Edit</Text>
                </Button>
            </CardItem>
        );
    });
    
    // let todo = function(){
    //     for(items of data){
    //         console.log(items);
    //         return (
    //             <CardItem key={items}>
    //                 <Text >=>nama:{items.nama}, Hobi:{items.hobi}</Text>
    //             </CardItem>
    //         );
    //     }
    // }

    return (
      <Container>
        <Header>
            <Text>Create,Read,Update,Delete(CRUD) di Firebase </Text>
        </Header>
        <Content>
            <Card>
                <Item>
                    <Icon name='lock' type='FontAwesome'/>
                    <Input name="nama" placeholder='masukan nama  anda' label="nama" onChangeText={(e)=>this.setState({nama:e})} value={this.state.nama} />   
                </Item>
                <Item>
                    <Icon name='user' type='FontAwesome'/>
                    <Input name="hobi" placeholder='masukan hobi anda' label="hobi" onChangeText={(e)=>this.setState({hobi:e})} value={this.state.hobi} />
                </Item>
                {this.onEdit()}
            </Card>
            <H1>List Item </H1>
            <Card>
                {/* <CardItem><Text>1</Text></CardItem>*/}
               {todo}
            </Card>
        </Content>
      </Container>
    );
  }
}
