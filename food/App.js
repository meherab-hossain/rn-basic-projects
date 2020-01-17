/*import React from 'react';
import { StyleSheet, Text, View } from 'react-native';*/
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import SearchScreen from './src/screens/SearchScreen'

const navigator = createStackNavigator(
    {
        Search:SearchScreen
    },
    {
        initialRouteName: 'Search',
        defaultNavigationOptions: {
            title: 'Business search'
        }
    }
);
export default createAppContainer(navigator);

/*export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}*/

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
