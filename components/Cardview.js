import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CardView = (props) => {
 

  return (
  <View style={styles.container}>
  <Card onPress ={props.comk} style={{ borderRadius: 20, width : 150, height: 180}} >
    <View style={{ alignItems: 'center', }}>
      <Image
        source={{uri: props.link }}  
        style={{
          width: 150,
          height: 150,
          borderRadius: 20, 
        }}
      />

    </View>
    <Text style={styles.paragraph}>
      {props.name}
    </Text>
  </Card>
</View>
);
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 30,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 2,
    fontSize: 17,
    // fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CardView;