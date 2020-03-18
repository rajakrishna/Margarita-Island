import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Details from './Details'
import Cardview from './Cardview'
import Btn from './Button'

function HotelScreen({ navigation }) {
    return (
      <ScrollView>
        <Text>Wassup</Text>
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
    );
  }

export default HotelScreen;










