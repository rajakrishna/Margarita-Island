import * as React from 'react';
import {Text, View} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CardView = () => (
  <View style={{justifyContent:'center',alignContent:'center',flex:1,paddingLeft:'30%'}} >
    <TouchableOpacity activeOpacity={0.7} >
      <Card  onPress = {() =>{console.log('Hello')}} style={{justifyContent:'center',alignContent:'center', width: 150}}>      
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={{width: 150 , height: 150, borderRadius: 12}}/>
        <Text style={{justifyContent:'center',alignItems:'center',flex:1}}>hekllo</Text>
      </Card> 
    </TouchableOpacity>
  </View>
);

export default CardView;