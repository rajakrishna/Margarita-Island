import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './components/HomeScreen'
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { Fontisto } from 'react-native-vector-icons';



function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

const App = () =>{
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName = "Settings"
        activeColor = "#e2f3f5"
        inactiveColor = "#3e3636"
        barStyle= {{ backgroundColor: '#3d5af1' }}
        shifting = {true}
        >

        <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (          
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            // <Fontisto name="island" color='{color}' size={26} />  
            <MaterialCommunityIcons name="settings" color={color} size={26} />
          ),
        }}
      />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;