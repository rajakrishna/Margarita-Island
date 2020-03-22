import * as React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Details from './Details'
import Cardview from './Cardview'
import Btn from './Button'
import LinearGradient from 'react-native-linear-gradient';

function HotelScreen() {
    return (
        <View>
          {/* <Text>Wassup</Text> */}
        
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
        
        <Cardview />
        <Cardview />
        <Cardview />
        <Cardview />
        <Cardview />
        <Cardview />

        {/* <Btn/>
        <Btn/>
        <Btn/>
        <Btn/> */}
      </ScrollView>
      <View>
        {/* <Btn/> */}
        <Text>Hello</Text>

      </View>
      </View>
    );
  }


export default HotelScreen;










