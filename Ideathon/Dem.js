import React , {Component} from 'react';
import axios from 'axios';
import { Avatar, Button, Card, Title, Paragraph, Divider } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import DialogInput from 'react-native-dialog-input';
import {FontAwesome,AntDesign} from 'react-native-vector-icons';
import { ImageViewer } from 'react-native-image-zoom-viewer';
import * as blobUtil from 'blob-util'
import Base64 from 'Base64';
import base64 from 'react-native-base64'
var Buffer = require('buffer/').Buffer
import blobToBase64 from 'blob-to-base64'

import { 
  View, 
  Text, 
  ScrollView ,
  TouchableOpacity, 
  TouchableHighlight,
  TextInput,
  Platform,
  StyleSheet ,
  StatusBar,
  Image, 
  Modal,
  ImageBackground,
  Alert
} from 'react-native';
import Profile from './ProfileScreen'
import Icon from '@ant-design/icons';


const images = [{
  url: '../Railway_WebService/FileSystem/Grievance/15604C00139/File/15604C00139-1612290396575.jpg',
  }
]
class ComplaintCard extends Component{

  state = {
    modals: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  readData = async() => {
      try {
        global.userName = await AsyncStorage.getItem('Name');
        global.userPFNumber = await AsyncStorage.getItem('PFNumber');
        global.userMobile = await AsyncStorage.getItem('Mobile');
        global.userRole = await AsyncStorage.getItem('Role');
        global.userColony = await AsyncStorage.getItem('Colony');
        global.userStation = await AsyncStorage.getItem('Station');
        global.userQtrNumber = await AsyncStorage.getItem('QtrNumber');
        global.userDepart = await AsyncStorage.getItem('demo');
        global.userToken = await AsyncStorage.getItem('foundUser');
      } catch(e) {
        console.log(e);
      }
      if(userRole!=='Occupant'){
      this.begin()
      }

  }

  showDialog(isShow){
    this.setState({isDialogVisible: isShow});
  }
  sendInput(inputText){
    console.log("sendInput (DialogInput#1): "+inputText);
  }

  constructor(props){
    super(props)

    this.state={
      posts:[],
      isDialogVisible: false,
      imageUrl:null,
      iconmodalVisible:false
    }
  }

  seticonModalVisible = (visible) => {
    this.setState({ iconmodalVisible: visible });
  }


  begin(){

    console.log('CARD:',userDepart)

    if(userRole=='Occupant')
    {   
        global.Rol='6'
        
    }
    if(userRole=='SeniorSectionEngineer')
    {
      global.Rol='4'
  
    }
    if(userRole=='AdditionalDivisionalEngineer')
    {
      global.Rol='3'

    }
    if(userRole=='DivisionalEngineer')
    {
      global.Rol='2'
      
    }
    if(userRole=='SeniorDivisionalEngineer')
    {
      global.Rol='1'
    
    }
    if(userRole=='JuniorEngineer'){
      global.Rol='5'
    }


    console.log(userDepart)
    global.dis ={
      PFNumber : userPFNumber,
      Name:userName,
      QtrNumber:userQtrNumber,
      Department:userDepart,  
      Colony:userColony,
      Role:Rol,
      Station:userStation,
      Mobile:userMobile,
  }


    axios.post('http://192.168.43.163:3000/admin/showComplaints',dis)
    .then(response =>{
      // this.state.posts=response.data
      axios.post(`http://192.168.43.163:3000/admin/getList/`,dis)
      .then(res=>{
        let slist=res.data;
        let result=dis.Role==1?response.data:response.data.filter(r=>slist.includes(r.Station))
        let resul = result.filter(complaint=>complaint.status!='04')
        this.setState({posts:resul})
        })
      })
      .catch(error =>
      {
          console.log(error)
      })

      this.render()

  }
  componentDidMount(){
    this.readData()
  }
  
  preview(pat){
    console.log(pat)
    const d={
      path:pat
    }
    axios.post('http://192.168.43.163:3000/user/download/',d,{responseType:'blob'})
    .then(response =>{
      unsafeImageUrl=URL.createObjectURL(response.data);
      this.setState({imageUrl:unsafeImageUrl})


      // var myblo = blobUtil.blobToBase64String(response.data)
      // console.log(myblo)
      // blobUtil.blobToBase64String(response.data).then(function (base64String) {
      //   this.setState({imageUrl:base64String})
      // })
        
      // var base64Image =  new Buffer(response.data,'binary').toString('base64')
      // console.log(base64Image)

      // console.log(JSON.stringify(response))
      // global.imageUrl="data:image/jpg;base64,"+ response.data;
      // console.log(imageUrl)
      // blobToBase64(response.data, function (error, base64) {
      //   if (!error) {
      //     this.setState({imageUrl:base64})
      //   }
      // }.bind(this))

      // console.log(this.state.imageUrl)
      
      // var reader = new FileReader();
      // reader.readAsDataURL(response.data); 
      // reader.onloadend = function() {
      //     var base64data = reader.result;                
      //     console.log(base64data);
      // }
      
        // blobUtil.blobToBase64String(response.data).then(function (base64String) {
        //   console.log("Done")
        //   this.setState({imageUrl:base64String})
        // }).catch(function (err) {
        //   console.log(err)
        // });
      
      // unsafeImageUrl=URL.createObjectURL(response.data);
      // console.log(unsafeImageUrl)
      // this.setState({imageUrl:unsafeImageUrl})
      
      // // var reader = new FileReader();
      // // reader.readAsDataURL(response.data)
      // // console.log(reader)
      // // reader.onloadend=function(){
      // //   var base64data = reader.result;
      // //   console.log(base64data)
      // }
      // global.images={
      //   url:base64data
      // }
      // this.seticonModalVisible(true)
    })
   
  }



  // blobToBase64(blob) {
  //   return new Promise(function (res, rej) {
  //     try {
  //       var a = new FileReader()
  //       a.onload = function (e) {
  //         res(e.target.result)
  //         console.log(e.target.result)
  //       }
  //       a.readAsDataURL(blob)
  //     } catch (e) {
  //       rej(e)
  //     }
  //   })
  // }
  accept(referenceKey){
    axios.post(`http://192.168.43.163:3000/admin/verifyComplaints/${referenceKey}`,dis)
    .then(response =>{
      // console.log(response)
      // this.state.posts=response.data
      console.log('done')
      this.componentDidMount()
      Alert.alert('Grievance!', 'Grievance Accepted', [
        {text: 'Okay'}
    ]);
  })
  .catch(error =>
      {
          console.log(error)
      })

      this.render()

  }
  refresh(){
    axios.post('http://192.168.43.163:3000/admin/showComplaints',dis)
    .then(response =>{
      axios.post(`http://192.168.43.163:3000/admin/getList/`,dis)
      .then(res=>{
        let slist=res.data;
        console.log("add",slist,slist.includes(res.Station))
        let result=dis.Role==1?response.data:response.data.filter(r=>slist.includes(r.Station))
        let resul = result.filter(complaint=>complaint.status!='04')
        this.setState({posts:resul})
        })
      })
      .catch(error =>
      {
          console.log(error)
      })

      this.render()

  }

  forward(referenceKey){
    axios.post(`http://192.168.43.163:3000/admin/forwardComplaints/${referenceKey}`,dis)
    .then(response =>{
      // console.log(response)
      // this.state.posts=response.data
      Alert.alert('Grievance!', 'Grievance Forwared', [
        {text: 'Okay'}
    ]); 
    this.componentDidMount()
  })
  .catch(error =>
      {
          console.log(base6)
      })

  }

  
  reject(referenceKey){
    axios.post(`http://192.168.43.163:3000/admin/rejectComplaint/${referenceKey}`,dis)
    .then(response =>{
      // console.log(response)
      // this.state.posts=response.data
      
      Alert.alert('Grievance!', 'Grievance Rejected', [
        {text: 'Okay'}
    ]);
    this.componentDidMount()
  })
  .catch(error =>
    {
        console.log(error)
    })
  }

  render(){
    const {iconmodalVisible}=this.state;
    if(userRole!='Occupant' && userRole!='JuniorEngineer'){
      if(this.state.posts==0){
        return(
          <View>
          <Button color={'#000000'} onPress={() => this.refresh()}>Refresh</Button>
           <Text style={styles.text_header}>Pending Grievances</Text>
          <Card style={styles.card}>
       <Card.Content>
           <Title style={{fontWeight:'bold',textAlign:'center'}}>No Pending Grievances</Title>
       </Card.Content>
         </Card>
         </View>
        );
      }
      else{
    return(
      <View>
        <ScrollView>
        { this.state.imageUrl!='' &&(
		    <Image
          style={styles.stretch}
          source={{uri: this.state.imageUrl}}
        />)}
        <Modal
            animationType="slide"
            transparent={true}
            visible={iconmodalVisible}
            
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}

            >
            <ImageViewer imageUrls={images} backgroundColor = 'white' enablePreload = 'true' renderFooter = {(currentImage) => (<View style={{justifyContent:'center',paddingLeft:170 ,paddingBottom : 70}}><Text>{currentImage+1}/{images.length}</Text></View>) }   />
            <View style={{alignItems:'center',paddingBottom:30,backgroundColor:'white'}}>
           <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#006400" }}
                onPress={() => {
                  this.seticonModalVisible(!iconmodalVisible);
                }}
              >
                <Text style={styles.textStyle}>Close</Text>
              </TouchableHighlight></View>
            </Modal>
        <Button color={'#000000'} onPress={() => this.refresh()}>Refresh</Button>
         <Text style={styles.text_header}>Pending Grievances</Text>
          {
             this.state.posts.map((u,i) => {
               return(
             
                 <View key={i}>
 
 
            <Card style={styles.card}>
               <Card.Content>
               <Title style={styles.title}>{u.Name}<View style={{paddingLeft : 190}}><AntDesign name = 'eye' size ={28} onPress = {()=>{this.preview(u.documents.filledApplication.path)}} color='#34495e'/></View></Title>
                   <Divider/>
                   <Paragraph style={{fontWeight: 'bold'}}>PFNumber<Paragraph style={{color: '#34495e'}}> : {u.PFNumber}</Paragraph></Paragraph>
                   <Paragraph style={{fontWeight: 'bold'}}>Reference Key<Paragraph style={{color: '#34495e'}}> : {u.referenceKey}</Paragraph></Paragraph>
                   <Paragraph style={{fontWeight: 'bold'}}>QtrNumber<Paragraph style={{color: '#34495e'}}> : {u.QtrNumber}</Paragraph></Paragraph>
                   <Paragraph style={{fontWeight: 'bold'}}>Role<Paragraph style={{color: '#34495e'}}> : {u.Role}</Paragraph></Paragraph>
                   <Paragraph style={{fontWeight: 'bold'}}>Colony<Paragraph style={{color: '#34495e'}}> : {u.Colony}</Paragraph></Paragraph>
                   <Paragraph style={{fontWeight: 'bold'}}>Station<Paragraph style={{color: '#34495e'}}> : {u.Station}</Paragraph></Paragraph>
                   <Paragraph style={{fontWeight: 'bold'}}>Grievance category<Paragraph style={{color: '#34495e'}}> : {u.ComplaintCategory}</Paragraph></Paragraph>
                   <Paragraph style={{fontWeight: 'bold'}}>Description<Paragraph style={{color: '#34495e'}}> : {u.Description}</Paragraph></Paragraph>
                   <Paragraph style={{fontWeight: 'bold'}}>Mobile Number<Paragraph style={{color: '#34495e'}}> : {u.Mobile}</Paragraph></Paragraph>
               </Card.Content>
               <Divider/>
                   <Card.Actions >
                     { userRole!='DivisionalEngineer' &&(
                     <Button color={'#000080'} onPress={() => {this.forward(u.referenceKey)}}>Forward</Button>)}
                     <Button color={'#FF0000'} onPress={() => {this.reject(u.referenceKey)}}>Reject</Button>
                     <Button color={'#008000'} onPress={() => this.accept(u.referenceKey)}>Accept</Button>
                     
                   </Card.Actions>
                 </Card>
                 </View>
                 
                 
               );
             }
             )
           }
       </ScrollView>
      </View>
    );
    }
  }
  else{
    return(
      <Profile/>
    );
  }
}
  
}
export default ComplaintCard;

const styles = StyleSheet.create({

  title:{
    fontWeight: 'bold',
  },
  text_header: {
    color: '#34495e',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign:'center'
  },

  container: {
    flex: 1,
  },
  content: {
    padding: 4,
  },
  card: {
    alignContent:'center',
    margin: 16,
    marginTop:15,
    backgroundColor:'#fff',
    borderRadius:12,
    marginBottom:15,
    width:'93%',
    elevation: 6,
  },
    paragraph: {
      margin: 2,
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
     // color: '#34495e',

    },
    cardText:{
      fontSize:30,
      padding:10
    },
    button : {
       flex : 1,
       flexDirection : 'row',
       width : '40%',
       marginHorizontal : '10%'
       
    },
    newbutton : {
        fontSize : 12
    },
    ok : {
       width : '50%',
       marginHorizontal : '5%'
    },
    decline : {
       width : "50%",
       marginHorizontal : '10%'
    },
    signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  }

});