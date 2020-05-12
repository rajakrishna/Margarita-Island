import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Details from "../components/Details";
import VerticalListHotel from "../components/VerticalListHotel";
import PaymentScreen from "../components/PaymentScreen";

import { CATEGORIES } from "../data/data";
import { db } from "../Config";

let itemsRef = db.ref("/items/Hotels");

const HotelScreen = ({ navigation }) => {
	// const [sdata, setSdata] = useState({
	// 	link: "https://picsum.photos/700",
	// 	name: "UTA",
	// 	location: "Arlington",
	// });
	let [hoteldata, setHoteldata] = useState([]);
	// let [name, setName] = useState("");

	useEffect(() => {
		itemsRef.on("value", (snapshot) => {
			let data = snapshot.val();
			let items = Object.values(data);
			setHoteldata((hoteldata = items));
		});
	}, []);

	const renderdata = () => {
		return hoteldata.map((items, index) => {
			const { name, location, image, about, amenities } = items;
			return (
				<VerticalListHotel
					key={index}
					link={image}
					name={name}
					location={location}
					comk={() => {
						navigation.navigate("Details", {
							route_name: { name },
							route_location: { location },
							route_image: { image },
							route_about: { about },
							route_amenities: { amenities },
						});
					}}
				/>
			);
		});
	};

	return (
		<View style={styles.container}>
			{/* <Text>Hotels</Text> */}
			<ScrollView showsVerticalScrollIndicator={false}>
				{renderdata()}
			</ScrollView>
		</View>
	);
};

const App = () => {
	const Stack = createStackNavigator();
	return (
		<Stack.Navigator
			initialRouteName="HotelScreen"
			screenOptions={
				{
					// headerStyle: {
					// 	backgroundColor: "transparent",
					// },
				}
			}
		>
			<Stack.Screen
				name="HotelScreen"
				component={HotelScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Details"
				component={Details}
				options={({ route }) => ({ title: route.params.title })}
			/>
			<Stack.Screen name="PaymentScreen" component={PaymentScreen} />
		</Stack.Navigator>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: 35,
		backgroundColor: "white",
	},
});

export default App;
