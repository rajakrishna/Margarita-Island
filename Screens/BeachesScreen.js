import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import BeachCard from "../components/BeachCard";
import { createStackNavigator } from "@react-navigation/stack";
import { db } from "../Config";
import BeachDetails from "../components/BeachDetails";

let itemsRef = db.ref("/items/Beaches");
const BeachsScreen = ({ navigation }) => {
	let [beach, setBeach] = useState([]);

	useEffect(() => {
		itemsRef.on("value", (snapshot) => {
			let data = snapshot.val();
			let items = Object.values(data);
			setBeach((beach = items));
		});
	}, []);
	const renderbeaches = () => {
		return beach.map((items, index) => {
			const { name, image, location } = items;
			// console.log(items);
			return (
				<BeachCard
					key={index}
					name={name}
					link="https://i.ibb.co/SPKMMHx/elizeu-dias-RN6ts8-IZ4-0-unsplash.jpg"
					comk={() => {
						navigation.navigate("BeachDetails", {
							route_name: { name },
							route_location: { location },
							route_image: { image },
							// route_image: { image },
						});
					}}
				/>
			);
		});
	};
	// <a href="https://ibb.co/M922Gwf"><img src="" alt="playa-el-agua" border="0"></a>
	return (
		<View style={styles.container}>
			{/* <View style={styles.child}> */}
			<ScrollView showsVerticalScrollIndicator={false}>
				{/* <Text>Beaches</Text> */}
				{renderbeaches()}
			</ScrollView>
			{/* </View> */}
		</View>
	);
};
const App = () => {
	const Stack = createStackNavigator();
	return (
		<Stack.Navigator
			initialRouteName="BeachsScreen"
			mode="modal"
			headerMode="none"
			screenOptions={{
				cardStyle: { backgroundColor: "transparent" },
				// cardOverlayEnabled: true,
			}}
		>
			<Stack.Screen
				name="BeachsScreen"
				component={BeachsScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name="BeachDetails" component={BeachDetails} />
		</Stack.Navigator>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: 25,
		backgroundColor: "white",
		flex: 1,
		// justifyContent: "center",
		// alignItems: "center",
		// flex: 1,
		// flexWrap: "wrap",
		// flexDirection: "row",
	},
});

export default App;
