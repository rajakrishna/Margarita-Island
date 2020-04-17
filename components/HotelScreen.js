import * as React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Cardview from "./Cardview";
import Btn from "./Button";
import LinearGradient from "react-native-linear-gradient";
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Details from "./Details";
import VerticalListHotel from "./VerticalListHotel";
// import { white } from 'react-native-paper/lib/typescript/src/styles/colors';

// EXPO linear graident check later
//https://docs.expo.io/versions/latest/sdk/linear-gradient/

const home = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>Hotels</Text>
			<ScrollView showsVerticalScrollIndicator={false}>
				<VerticalListHotel
					link="https://picsum.photos/700"
					name="Picka Hotel"
				/>
				<VerticalListHotel
					link="https://picsum.photos/106"
					name="Louis Backyard"
				/>
				<VerticalListHotel
					link="https://picsum.photos/706"
					name="Louis Backyard"
				/>
				<VerticalListHotel
					link="https://picsum.photos/70"
					name="Louis Backyard"
				/>
				<VerticalListHotel
					link="https://picsum.photos/106"
					name="Louis Backyard"
				/>
				<VerticalListHotel
					link="https://picsum.photos/706"
					name="Louis Backyard"
				/>
				<VerticalListHotel
					link="https://picsum.photos/706"
					name="Louis Backyard"
				/>
				<VerticalListHotel
					link="https://picsum.photos/706"
					name="Louis Backyard"
				/>
			</ScrollView>
		</View>
	);
};

const App = () => {
	const Stack = createStackNavigator();
	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen
				name="Home"
				component={home}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name="Details" component={Details} />
		</Stack.Navigator>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: 25,
		backgroundColor: "white",
	},
});

export default App;
