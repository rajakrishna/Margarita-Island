import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Details from "./Details";
import VerticalListHotel from "./VerticalListHotel";

import { CATEGORIES } from "../data/data";
import Category from "../models/category";

const HotelScreen = ({ navigation }) => {
	const [link, setLink] = useState("https://picsum.photos/700");
	const [name, setName] = useState("UTA");
	const [location, setLocation] = useState("Arlington");

	// console.log(CATEGORIES.color);
	const renderdata = () => {
		return CATEGORIES.map((data, index) => {
			// return console.log(data.color, index);
			return (
				<VerticalListHotel
					// link={link}
					key={data.id}
					name={data.color}
					location={data.id}
				/>
			);
		});
	};

	return (
		<View style={styles.container}>
			<Text>Hotels</Text>
			<ScrollView showsVerticalScrollIndicator={false}>
				<VerticalListHotel
					link={link}
					name={name}
					location={location}
					comk={() => {
						navigation.navigate("Details", {
							route_name: { name },
							route_location: { location },
						});
					}}
				/>
				{renderdata()}
			</ScrollView>
		</View>
	);
};

const App = () => {
	const Stack = createStackNavigator();
	return (
		<Stack.Navigator initialRouteName="HotelScreen">
			<Stack.Screen
				name="HotelScreen"
				component={HotelScreen}
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
