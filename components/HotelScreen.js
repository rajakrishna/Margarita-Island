import * as React from 'react';
import { View, Text } from 'react-native';
import Details from './Details'
import Cardview from './Cardview'
import Btn from './Button'

function HotelScreen({ navigation }) {
    return (
      <View style={{ }}>
        <Text>Wassup</Text>
        <Cardview />
        <Btn/>
        <Btn/>
        <Btn/>
        <Btn/>
      </View>
    );
  }

export default HotelScreen;










