import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Cardview from "../components/Cardview";
import { createStackNavigator } from "@react-navigation/stack";
import Details from "../components/Details";
import VerticalList from "../components/VerticalList";
import { db } from "../Config";

let itemsRef = db.ref("/items/Dining");
let itemsRef2 = db.ref("/items/Chefs");
const DiningScreen = ({ navigation }) => {
	let [diningdata, setDiningdata] = useState([]);
	let [chef, setChef] = useState([]);

	useEffect(() => {
		itemsRef.on("value", (snapshot) => {
			let data = snapshot.val();
			let items = Object.values(data);
			setDiningdata((diningdata = items));
		});
		itemsRef2.on("value", (snapshot) => {
			let data = snapshot.val();
			let items = Object.values(data);
			setChef((chef = items));
		});
	}, []);

	const renderdata = () => {
		return diningdata.map((items, index) => {
			const { name, location, image } = items;
			return (
				<VerticalList
					key={index}
					// link={image}

					name={name}
					location={location}
				/>
			);
		});
	};
	const renderchefs = () => {
		return chef.map((items, index) => {
			const { name } = items;
			return (
				<Cardview key={index} name={name} link="https://picsum.photos/700" />
			);
		});
	};

	return (
		<View style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Text>Top Chefs</Text>
				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
					{/* <Cardview
						link="https://picsum.photos/700"
						name="Xian Yong"
						comk={() => {
							navigation.navigate("Details");
						}}
					/> */}
					{renderchefs()}
				</ScrollView>
				<View>
					<Text>Restaurants</Text>
					{renderdata()}
				</View>
			</ScrollView>
		</View>
	);
};

const App = () => {
	const Stack = createStackNavigator();
	return (
		<Stack.Navigator initialRouteName="DiningScreen">
			<Stack.Screen
				name="DiningScreen"
				component={DiningScreen}
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
