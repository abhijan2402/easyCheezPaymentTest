import { StyleSheet, Text, View,Image,ScrollView,TextInput,TouchableOpacity, FlatList,Dimensions } from 'react-native'
import React, { useState } from 'react';
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
const Offer = () => {

    const names=[
      {name:'ABC',percentage:"30%"},
      {name:'DEF',percentage:"50%"},
      {name:'GHI',percentage:"60%"},
      {name:'JKL',percentage:"10%"},
      {name:'MNO',percentage:"80%"},
      ]
  return (
    <ScrollView style={styles.Scroll}>
    <Text style={styles.SubHead}>Offer</Text>
    
    <View style={{alignItems: 'center'}}>
      <View>
      <Text style={{fontWeight: '700',fontSize:16,color:"black",marginLeft:5,marginTop: 30}}>Offer Name*</Text>
        <TextInput 
            style={styles.Box} 
            placeholder={'Enter Offer Name'} 
            placeholderTextColor={"black"}
        />
      </View>
   
      <View>
      <Text style={{fontWeight: '700',fontSize:16,color:"black",marginLeft:5,marginTop: 20}}>Offer Percentage*</Text>
        <TextInput 
            style={styles.Box} 
            placeholder={'Enter Offer Percentage'} 
            placeholderTextColor={"black"}
        />
      </View>
   
      <View>
      <Text style={{fontWeight: '700',fontSize:16,color:"black",marginLeft:5,marginTop: 20}}>Offer Code*</Text>
        <TextInput 
            style={styles.Box} 
            placeholder={'Offer Code'} 
            placeholderTextColor={"black"}
        />
      </View>
   
        <TouchableOpacity style={styles.Btn} >
            <Text style={styles.BtnTxt}>Add</Text>
        </TouchableOpacity>
      
    </View>

    <View>
      <Text style={{fontWeight: '700',fontSize:16,color:"black",marginLeft:57,marginTop: 25}}>Existing Offers</Text>
      <View style={{marginLeft:57,marginTop:10}}>
       <FlatList data={names} renderItem={(element)=>{
         console.log(element.item.name);
      return <Text style={{fontWeight:"600",color:"black",marginTop:15}}>{element.item.name}</Text>
       }}/></View>
    </View>

</ScrollView>
   
     // <ScrollView style={{backgroundColor:"white"}}>
      
    //    <View style={{alignItems:"center",marginTop:25}}>
    //   <Text style={{fontWeight: '800',fontSize:22,color:"black"}}>Offer</Text>
    //   </View>
  
      
    //   <View>
    //         <Text style={{fontWeight: '700',fontSize:16,color:"black",marginLeft:50,marginTop: 30}}>Offer Name*</Text>
    //         <TextInput style={{height: 44,width: 279,marginLeft: 50,marginTop: 10,borderRadius:10,borderColor:"black",borderWidth:1}}
    //           placeholder={'Enter Offer Name'}
    //          />
    //       </View>
    //       <View>
    //         <Text style={{fontWeight: '700',fontSize:16,color:"black",marginLeft:50,marginTop: 20}}>Offer Percentage*</Text>
    //         <TextInput style={{height: 44,width: 279,marginLeft: 50,marginTop: 10,borderRadius:10,borderColor:"black",borderWidth:1}}
    //           placeholder={'Enter Offer Percentage'}
    //          />
    //       </View>
    //       <View>
    //         <Text style={{fontWeight: '700',fontSize:16,color:"black",marginLeft:50,marginTop: 20}}>Offer Code</Text>
    //         <TextInput style={{height: 44,width: 279,marginLeft: 50,marginTop: 10,borderRadius:10,borderColor:"black",borderWidth:1}}
    //           placeholder={'Offer Code'}
    //          />
    //       </View> 
         
    //       <TouchableOpacity style={{height: 44,width: 279,marginLeft: 50,marginTop: 30,backgroundColor: '#F05656',borderRadius: 20,marginBottom: 10,}}>
    //           <Text style={{textAlign: 'center', marginTop: 13,color: 'white',fontSize: 15,fontWeight: '500'}}>Add</Text>
    //       </TouchableOpacity>

    //       <View style={{marginBottom:24}}></View> 


    //       <View>
    //   <FlatList data={names} renderItem={(element)=>{
    //     console.log(element.item.name);
    //  return <Text>{element.item.name}</Text>
    //   }}/>
    //    </View>

    //    </ScrollView>   
  
  )
}

export default Offer

const styles = StyleSheet.create({
  Scroll: {
    backgroundColor: "white",
    height:windoHeight,
    width:windoWidth
},
Head: {
    alignSelf: "center",
    marginTop: 20
},
SubHead: {
    color: "black",
    fontSize: 30,
    fontWeight: '900',
    textAlign:"center",
    padding:10
},
Box: {
    width:windoWidth/1.4,
    height:windoHeight/18,
    marginTop: 10,
    borderRadius: 10,
    borderColor: "#808080",
    borderWidth: 1,
    fontWeight:"bold",
    color:"black",
    paddingLeft:10
},
Btn: {
    width:windoWidth/1.4,
    height:windoHeight/17,
    marginTop: 15,
    backgroundColor: '#F05656',
    borderRadius: 10,
    alignItems:"center",
    justifyContent: 'center',
},
BtnTxt: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500'
},
})