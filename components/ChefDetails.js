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
						<Card.Cover source={{ uri: "https://picsum.photos/700" }} />
						{/* <Card.Title title={name} subtitle={location} /> */}
						{/* <Card.Title subtitle={location} /> */}
						<Text>ABOUT</Text>
						<Text>{about}</Text>
						<Text>RECIPE</Text>
						<Text>{recipe_name}</Text>
					</Card>

					{/* <Text>Rooms</Text> */}
				</ScrollView>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		padding: 10,
		// borderRadius: 15,
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
