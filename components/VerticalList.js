import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

const VerticalList = (props) => {
 
  let size = '100%'

  return (
  <View style={styles.container}>
  <Card onPress ={props.comk} style={{ borderRadius: 20, width : size, height: 150, elevation: 3}}>
    {/* <View style={{ alignItems: 'center', }}> */}

    <View style={{flexDirection:'row'}}>
      <Image
          source={{uri: props.link }}  
          style={styles.image}
      />
      <View style={{flexDirection:'column' }}>
        <Text style={styles.title}>
          {props.name}
        </Text>
        <Text style={styles.below}> yeah </Text>
      </View>
    </View>

  </Card>
</View>
);
}



const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection:'row',
    // justifyContent: 'center',
    paddingTop: 30,
    // backgroundColor: '#ecf0f1',
    padding: 8,
  },

  title: {
    margin: 2,
    paddingTop: 5,
    paddingLeft: 10,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  below: {
    paddingTop: 10,
  },

  image:{
    width: 150,
    height: 150,
    borderRadius: 20, 
  },

});

export default VerticalList;