import { StyleSheet, Text, View,ScrollView,Image,TouchableOpacity,Dimensions } from 'react-native'
import React from 'react'
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;

import Octicons from 'react-native-vector-icons/Octicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Profile = () => {
  return (
    <ScrollView style={styles.Main}>
        
      <View style={styles.Head}>
          <Text style={styles.HeadTxt}>Account</Text>
      </View>

      <View style={styles.SubHead}>
        <Image source={require('../Src/profileimage.png')} style={styles.image}/>
        <Text style={styles.SubHeadTxt}>Aayush</Text>
      </View>

      <View style={styles.Opt}>
        <Text style={styles.OptTxt}>Options</Text>
      </View>

      <View>

        <View style={styles.List}>
            <Octicons name='checklist' color={'#FFA500'} size={22} style={{marginLeft:20}}/>
            <Text style={styles.ListTxt}>Orders</Text>
            <MaterialIcons name='keyboard-arrow-right' size={25} style={styles.Arrow1}/>
        </View>

        <View style={styles.List}>
            <Ionicons name='location-outline' color={'#FFA500'} size={22} style={{marginLeft:20}}/>
            <Text style={styles.ListTxt}>Address</Text>
            <MaterialIcons name='keyboard-arrow-right' size={25} style={styles.Arrow2}/>
        </View>

        <View style={styles.List}>
            <FontAwesome5 name='hands-helping' color={'#FFA500'} size={22} style={{marginLeft:20}}/>
            <Text style={styles.ListTxt}>Help</Text>
            <MaterialIcons name='keyboard-arrow-right' size={25} style={styles.Arrow3}/>
        </View>

        <View style={styles.List}>
            <MaterialIcons name='help-outline' color={'#FFA500'} size={22} style={{marginLeft:20}}/>
            <Text style={styles.ListTxt}>FAQ</Text>
            <MaterialIcons name='keyboard-arrow-right' size={25} style={styles.Arrow4}/>
        </View>

        </View>
        
        <View style={styles.Recent}>
            <Text style={styles.RecentTxt
            }>Recently Order</Text>
        </View>

        <ScrollView horizontal={true} style={styles.horizontal}>
            
            <TouchableOpacity style={{display:"flex",flexDirection:"row"}}>
               <View style={styles.MainCard}>
                
                <View style={{display:"flex",flexDirection:"row"}}>
                    
                    <View style={{marginLeft:20,marginTop:40}}>
                        <Image source={require('../Src/fortune.png')} style={{width:35,height:100}}/>
                    </View>
                    
                    <View style={{marginTop:20,marginLeft:20}}>
                         <Text style={{fontSize:18,color:"black",fontWeight:'700',marginTop:20}}>Delivered</Text>
                         <Text style={{marginTop:20,fontSize:12,color:"grey"}}>23-Jan-2023</Text>
                         <Text style={{color:"black",fontWeight:'700',marginTop:20}}>Order ID:233345</Text>
                    </View>

                </View>
                
               </View> 
            </TouchableOpacity>

        </ScrollView>
        
        <View style={{marginBottom:100}}></View>

    </ScrollView>
  )
}

export default Profile

const styles = StyleSheet.create({
    Main:{
        backgroundColor:"white"
    },
    Head:{
        alignItems:"center",
        marginTop:20
    },
    HeadTxt:{
        color:"black",
        fontSize:20,
        fontWeight:'700'
    },
    SubHead:{
        display:"flex",
        flexDirection:"row",
        marginTop:40
    },
    image:{
        height: windoHeight/7,
        width: windoWidth/3.5,
        marginLeft:20
    },
    SubHeadTxt:{
        marginLeft:30,
        marginTop:30,
        fontSize:22,
        color:"black",
        fontWeight:'600'
    },
    Opt:{
        marginLeft:30,
        marginTop:30
    },
    OptTxt:{
        fontSize:20,
        fontWeight:'500',
        color:"grey"
    },
    List:{
       marginLeft:20,
       marginTop:30,
       display:"flex",
       flexDirection:"row"
    },
    ListTxt:{
        color:"black",
        marginLeft:20,
        fontSize:18,
        fontWeight:'600',
    },
    Arrow1:{
        marginLeft:180
    },
    Arrow2:{
        marginLeft:165
    },
    Arrow3:{
        marginLeft:195
    },
    Arrow4:{
        marginLeft:199
    },
    Recent:{
        marginLeft:30,
        marginTop:30
    },
    RecentTxt:{
        fontSize:20,
        fontWeight:'500',
        color:"grey"
    },
    horizontal:{
        marginTop:30
    },
    MainCard:{
        height: 180,
        width:200,
        borderRadius: 15,
        borderColor:"black",
        borderWidth:1,
        marginLeft: 30
    },
})