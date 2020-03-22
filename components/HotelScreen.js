import * as React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Details from './Details'
import Cardview from './Cardview'
import Btn from './Button'
import LinearGradient from 'react-native-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Details from './Details'

// EXPO linear graident check later
//https://docs.expo.io/versions/latest/sdk/linear-gradient/

const home = ({navigation})=> {
  return (
      <View style={styles.container}>        
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
        
        <Cardview link="https://picsum.photos/700" name="Louis Backyard" comk={()=>{navigation.navigate('Details')}} />
        <Cardview link="https://picsum.photos/100" name="Xbox"/>
        <Cardview link="https://picsum.photos/1000" name="Texas Long"/>
        <Cardview link="https://picsum.photos/101" name="KFC"/>
        <Cardview link="https://picsum.photos/110" name="Mc D"/>
        <Cardview link="https://picsum.photos/104" name="Pho"/>

      </ScrollView>
      <View>
        <Text>Hello</Text>

      </View>
    </View>
  );
}

const App =() =>{
    const Stack = createStackNavigator();
    return(

          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={home} options={{ headerShown: false }} />
            <Stack.Screen name="Details" component={Details}  />
          </Stack.Navigator>

        );
    }


  const styles = StyleSheet.create({
    container: {
      paddingTop: 10,}
    });






export default App;











