import * as React from 'react';
import { View, Text, Button } from 'react-native';
import Details from './Details'


function HotelScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Wassup</Text>
        <Button
          title="Go to Details"
          // onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }

export default HotelScreen;










