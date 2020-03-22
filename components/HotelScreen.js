import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Details from './Details'
import Cardview from './Cardview'
import Btn from './Button'

function HotelScreen({ navigation }) {
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
        <Btn/>
      </View>
      </View>
    );
  }

export default HotelScreen;










