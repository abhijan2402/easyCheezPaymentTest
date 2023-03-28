import { View, Text,StyleSheet,style,Image } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Porfile from '../Auth/Porfile';
import AccountDetails from '../AccountDetails';
import StoreRegistration from '../Auth/StoreRegistration';
import Default from '../Default';
import Profile from '../Profile';

import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return ( 
      <Tab.Navigator
      screenOptions={{
        headerShown:false,
       
        tabBarShowLabel: false,
        showIcon: false,
    
            tabBarStyle:[ {
              position:"absolute",
            //   bottom:25,
              left:20,
              right:20,
              elevation:0,
              backgroundColor:"#ffffff",
              borderRadius:15,
              height:70,
            //   ...styles.shadow
            },],
          }}
      >
      <Tab.Screen name="Profile" component={Porfile} options={{
        tabBarIcon:({focused})=>(
          <View style={{alignItems:'center',justifyContent:'center'}}>
            <Ionicons name='home'  color={focused ? '#FFA500' : 'black'} size={22}/>
           
          </View>
        )
      }}/>

<Tab.Screen name='Account' component={AccountDetails} options={{
        tabBarIcon:({focused})=>(
          <View style={{alignItems:'center',justifyContent:'center'}}>
          
            <Ionicons name='fast-food-outline' color={focused ? '#FFA500' : 'black'} size={22}/>
           
          </View>
        )
      }}
        />

      <Tab.Screen name="Store" component={StoreRegistration} options={{
        tabBarIcon:({focused})=>(
          <View style={{alignItems:'center',justifyContent:'center'}}>
            <Ionicons name='cart-outline' color={focused ? '#FFA500' : 'black'} size={22}/>
            
          </View>
        )
      }}
      />
      <Tab.Screen name="Profil" component={Profile} options={{
        tabBarIcon:({focused})=>(
          <View style={{alignItems:'center',justifyContent:'center'}}>
            <Ionicons name='person' color={focused ? '#FFA500' : 'black'} size={22}/>
            
          </View>
        )
      }}
      />
      
        

    </Tab.Navigator>
    
  )
}

// const styles= StyleSheet.create({
//   shadow:{
//     shadowColor:"lightblue",
//     shadowOffset:{
//       width:0,
//       height:10,
//     },
//     shadowOpacity:0.25,
//     shadowRadius:3.5,
//     elevation:5
//   }
// });

export default MainNavigation