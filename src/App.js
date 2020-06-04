import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

// react navigation container
import {NavigationContainer} from '@react-navigation/native'

// react navigation stack
import {createStackNavigator} from '@react-navigation/stack'

// object stack
const Stack = createStackNavigator()

// components
import Home from './components/Home'
import Details from './components/Details'


const App= () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      // screenOptions akan berdampak ke semua screen
        screenOptions = {{
          title: 'N E R D F L I X',
          headerLeft: null,
          headerTitleStyle: {
            textAlign: 'center',
            fontFamily: "BebasNeue",
            fontSize: 30,
            color: 'white'
          },
          headerStyle: {
            backgroundColor: '#E50914'
          }
        }}
      >
        <Stack.Screen name='Home' component= {Home} />
        <Stack.Screen name='Details' component= {Details} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.view}>
    // {/* <View style={{ backgroundColor : 'red'}}> */}
    //   {/* <Text style={{ color : 'white' }}>App Component</Text> */}
    //   <Text style={styles.text}>App Component</Text>
    // </View>
  )
}

// const styles = StyleSheet.create({
//   view: {
//     backgroundColor : 'red'
//   },
//   text : {
//     color: 'white'
//   }
// })

export default App;

// jika inging memberikan title yang berbeda pada setiap screen
{/* <Stack.Screen name='Home' component= {Home} options={{title: 'Home Page'}} />
<Stack.Screen name='Details' component= {Details} options={{title: 'Detail Page'}} /> */}
