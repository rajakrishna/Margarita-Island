import * as React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Details from './Details'
import HotelScreen from './HotelScreen'


const Navig =() =>{
    const Stack = createStackNavigator();
    return(
    
        <NavigationContainer>

            <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HotelScreen} />
            <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>

        </NavigationContainer>

        );
    }



export default Navig;