import { StyleSheet, Text, View,TouchableOpacity,PermissionsAndroid,Image} from 'react-native'
import React,{useState} from 'react'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import RNUpiPayment from 'react-native-upi-payment'
const ImagePicker = () => {
  const [cameraPhoto,setCameraPhoto]=useState();
  const[galleryPhoto,setGalleryPhoto]=useState();

  const[imageUri,setimageUri]=useState();

  let options = {
    saveToPhotos: true,
    mediaType: 'photo',
  };

  const openCamera = async()=>{
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED){
      const result = await launchCamera(options);
      setCameraPhoto(result.assets[0].uri);
    }
  };

  
  const openGallery= async()=>{
    const result = await launchImageLibrary(options);
    const hi=setGalleryPhoto(result.assets[0].uri);
    console.log(hi)
  };
  const trye=()=>{
    RNUpiPayment.initializePayment({
      vpa: '7976114618127@paytm', // or can be john@ybl or mobileNo@upi
      payeeName: 'Abhishek Jangid So Munna Jangid',
      amount: '1',
      transactionRef: 'afhf-332-auui-fn'
    }, ()=>console.log("Succeess"), (error)=>console.log("Fail",error));

  }
  // const openCamera=()=>{
  //   let options ={
  //     storageOption:{
  //       path:'images',
  //       mediaType:'photo',
  //     },
  //     includeBase64:true,
  //   };
  //   launchCamera(options,response=>{
  //     console.log('Response = ',response);
  //     if(response.didCancel){
  //       console.log('user cancelled image picker');
  //     } else if(response.error){
  //       console.log("ImagePicker Error: ",response.error);
  //     } else if (response.customButton) {
  //       console.log('user tapped custom button:',response.customButton);
  //     } else {
  //       const source = {uri: 'data:image/jpeg;base64,' + response.base64};
  //       setimageUri(source);
  //     }
  //   });
  //   }

  return (
    <View>
    <TouchableOpacity onPress={trye} style={{backgroundColor:"blue",height:34,width:100,alignContent:"center",alignItems:"center",alignSelf:"center",marginTop:350,borderRadius:10}}>
      <Text style={{color:"white",marginTop:6}}>hi</Text>
    </TouchableOpacity>
    <Image style={{height:100,width:100}} source={{uri: cameraPhoto}}/>
     
    <TouchableOpacity onPress={openGallery} style={{backgroundColor:"blue",height:34,width:100,alignContent:"center",alignItems:"center",alignSelf:"center",marginTop:50,borderRadius:10}}>
      <Text style={{color:"white",marginTop:6}}>hi</Text>
    </TouchableOpacity>
    <Image source={{uri:galleryPhoto}}/>
    </View>
  )
}

export default ImagePicker

const styles = StyleSheet.create({})