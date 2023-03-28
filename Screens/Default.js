import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Default = () => {
    const product=[
        {
            name:"hi"
        },
        {
            name:"i"
        },
        {
            name:"1"
        },
        {
            name:"2"
        },
        {
            name:"3"
        },
    ]
  return (
    // <View>
    //   <Text>Default</Text>
    // </View>
    <FlatList data={product} renderItem={(element)=>{
        console.log(element.item.name)
       return <Text>{element.item.name}</Text>
    }}/>
  )
}

export default Default

const styles = StyleSheet.create({})