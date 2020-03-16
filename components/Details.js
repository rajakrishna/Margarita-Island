import * as React from 'react';
import { View, Text, Button } from 'react-native';

const Details = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Wassup</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('HotelScreen')}
        />
      </View>
    );
  }

  export default Details;