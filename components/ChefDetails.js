import * as React from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import { Avatar, Card, Title, Chip } from "react-native-paper";
import VerticalListHotel from "./VerticalListHotel";

const ChefDetails = ({ route, navigation }) => {
	const { route_name, route_about, route_recipe_name } = route.params;
	const name = JSON.parse(JSON.stringify(route_name.name));
	const about = JSON.parse(JSON.stringify(route_about.about));
	const recipe_name = JSON.parse(JSON.stringify(route_recipe_name.recipe_name));

	const value = JSON.stringify(route.params.title);
	React.useLayoutEffect(() => {
		navigation.setOptions({
			title: value === "" ? "No title" : name,
		});
	}, [navigation, value]);

	return (
		<View style={styles.container}>
			<View
				style={{
					height: "70%",
					// width: "100%",
					backgroundColor: "#fff",
					justifyContent: "center",
					// borderRadius: 15,
					// opacity: 1,
				}}
			>
				<ScrollView showsVerticalScrollIndicator={false}>
					<Card style={styles.card}>
						<Card.Cover
							source={{
								uri:
									"https://i.ibb.co/chTvvth/reza-biazar-e-Sjm-ZW97c-H8-unsplash.jpg",
							}}
							style={{
								flex: 1,
								width: "40%",
								// justifyContent: "center",
								// alignContent: "center",
								// alignItems: "center",
								alignSelf: "center",
							}}
						/>
						{/* <Card.Title title={name} subtitle={location} /> */}
						{/* <Card.Title subtitle={location} /> */}
						<View
							style={{
								alignItems: "center",
								paddingLeft: 60,
								paddingRight: 60,
								paddingTop: 10,
							}}
						>
							<Text style={{ fontSize: 24 }}>ABOUT</Text>
							<Text>{about}</Text>
							<Text style={{ fontSize: 24 }}>Recipe</Text>
							<Text>{recipe_name}</Text>
						</View>
					</Card>

					{/* <Text>Rooms</Text> */}
				</ScrollView>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		paddingTop: 10,

		// paddingLeft: 10,
		// borderRadius: 15,
		flex: 1,
		width: "100%",
		justifyContent: "center",
		alignContent: "center",
		alignSelf: "center",
		// alignItems: "center",
	},
	container: {
		// borderRadius: 15,
		// backgroundColor: "rgba(52, 52, 52, 0.6)",
		flex: 1,
		flexDirection: "column",
		justifyContent: "flex-end",
	},
});

export default ChefDetails;
