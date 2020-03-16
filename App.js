import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
// import { Fontisto } from 'react-native-vector-icons';
import HotelScreen from './components/HotelScreen'
import ProfileScreen from './components/ProfileScreen'
import DiningScreen from './components/DiningScreen'
import ServiceScreen from './components/ServiceScreen'
import EventScreen from './components/EventScreen'
import IslandScreen from './components/IslandScreen'





const Tab = createMaterialBottomTabNavigator();

const App = () =>{
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName = "Hotel"
        activeColor = "#e2f3f5"
        inactiveColor = "#3e3636"
        barStyle= {{ backgroundColor: '#2d6cdf' }}
        shifting = {true}
        keyboardHidesNavigationBar = {true}
        // barStyle={{ size:100 }}
        >

        <Tab.Screen
        name="Hotel"
        component={HotelScreen}
        options={{
          tabBarLabel: 'Hotel',
          // tabBarColor: 'black',
          tabBarIcon: ({ color }) => (          
            <MaterialCommunityIcons name="hotel" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Dining"
        component={DiningScreen}
        options={{
          tabBarLabel: 'Dining',
          tabBarIcon: ({ color }) => (          
            <MaterialCommunityIcons name="food" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Islands"
        component={IslandScreen}
        options={{
          tabBarLabel: 'Island',
          tabBarIcon: ({ color }) => (          
            <MaterialCommunityIcons name="tree" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Events"
        component={EventScreen}
        options={{
          tabBarLabel: 'Events',
          tabBarIcon: ({ color }) => (          
            <MaterialCommunityIcons name="calendar" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Services"
        component={ServiceScreen}
        options={{
          tabBarLabel: 'Services',
          tabBarIcon: ({ color }) => (          
            <MaterialCommunityIcons name="settings" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => ( 
            <MaterialCommunityIcons name="account-settings" color={color} size={26} />
          ),
        }}
      />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;