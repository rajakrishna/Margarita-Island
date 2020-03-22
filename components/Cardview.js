import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CardView = () => (
  // <View style={{justifyContent:'center',alignContent:'center',paddingLeft: '30%'}} >
  //   <TouchableOpacity activeOpacity={0.7} >
  //     <Card  onPress = {() =>{console.log('Hello')}} style={{justifyContent:'center',alignContent:'center', width: 150}}>      
  //       <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={{width: 150 , height: 150, borderRadius: 12}}/>
  //       <Text style={{alignItems:'center',paddingLeft: '38%'}}>hekllo</Text>
  //     </Card> 
  //   </TouchableOpacity>
  // </View>

  <View style={styles.container}>
  <Card onPress ={ () =>{console.log('Clicked on card view')}} style={{ borderRadius: 20, width : 150, height: 180}} >
    <View style={{ alignItems: 'center', }}>
      <Image
        source={{
          uri:
            // 'https://picsum.photos/700',
            'https://picsum.photos/id/10/150/150',
        }}
        style={{
          width: 150,
          height: 150,
          borderRadius: 20, 
        }}
      />
    </View>
    <Text style={styles.paragraph}>
      Louis Backyard
    </Text>
  </Card>
</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // paddingTop: 30,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    // margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CardView;