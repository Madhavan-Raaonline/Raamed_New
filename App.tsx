/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import Login from './src/Pages/Login';



function App(): React.JSX.Element {


  return (
    <SafeAreaView >
      <View style={{paddingBottom:60}}>
        <Login/>
      </View>
    </SafeAreaView>
  )
}


export default App;
