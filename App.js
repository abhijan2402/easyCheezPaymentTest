import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Porfile from './Screens/Auth/Porfile'
import AccountDetails from './Screens/AccountDetails'
import StoreRegistration from './Screens/Auth/StoreRegistration'
import Offer from './Screens/Offer'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainNavigation from './Screens/Navigation/MainNavigation';
import Default from './Screens/Default'
import ImagePicker from './Screens/ImagePicker'
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    
    <View>
        {/* <Porfile/> 
        <AccountDetails/> 
    <StoreRegistration/> 
      <Default/>  */}
      <ImagePicker/>
        </View> 
  //   <NavigationContainer>
  //   <Stack.Navigator initialRouteName='Bottomtab' screenOptions={{
  //       headerShown:false
  //     }}>
    
  //    <Stack.Screen name='Bottomtab' component={MainNavigation}/>
    
  //   </Stack.Navigator>
 
  // </NavigationContainer>
 
  )
}

