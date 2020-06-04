import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Details = () => {
   return (
      <View style={styles.view} >
         <View style={styles.first}>
            <Text>First</Text>
         </View>
         <View style={styles.second}>
            <Text>Second</Text>
         </View>
         <View style={styles.third}>
            <Text>Third</Text>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   view : {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "grey",
   },
   first: {
      width : 70,
      height: 70,
      backgroundColor : "red"
   },
   second: {
      width : 70,
      height: 70,
      backgroundColor : "orange"
   },
   third: {
      width : 70,
      height: 70,
      backgroundColor : "green"
   },
})


export default Details