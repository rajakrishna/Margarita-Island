import * as React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';

const Btn = () => (
    <View style={styles.red}>
  <Button mode="contained" onPress={() => console.log('Pressed')} style={styles.bigBlue}>
    Press Me
  </Button>
  </View>
);

const styles = StyleSheet.create({
    bigBlue: {
        backgroundColor: 'blue',
        // width: '50%',
        marginLeft: '25%',
        marginRight: '25%',
        borderRadius: 12,
        marginTop:10
    },
    
    red:{
        alignContent: 'center',
        justifyContent: 'center',
        // width: '100%',
        // height: '10%',
        // backgroundColor:'red',

    }

  });

export default Btn;