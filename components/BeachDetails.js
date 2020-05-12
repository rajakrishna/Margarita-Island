import * as React from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import { Avatar, Card, Title, Chip } from "react-native-paper";
import VerticalListHotel from "./VerticalListHotel";
import { lockAsync } from "expo/build/ScreenOrientation/ScreenOrientation";

const ChefDetails = ({ route, navigation }) => {
	const { route_name, route_location, route_image } = route.params;
	const name = JSON.parse(JSON.stringify(route_name.name));
	const location = JSON.parse(JSON.stringify(route_location.location));
	const image = JSON.parse(JSON.stringify(route_image.image));

	return (
		<View style={styles.container}>
			<View
				style={{
					backgroundColor: "#fff",
					justifyContent: "center",
					borderRadius: 5,
					height: "70%",
					// marginLeft: 5,
					// marginRight: 5,
				}}
			>
				<ScrollView showsVerticalScrollIndicator={false}>
					<Card style={styles.card}>
						<Card.Cover
							source={{ uri: "https://picsum.photos/900" }}
							style={styles.image}
						/>
						<Text>Name: {name}</Text>
						{/* <Text>{name}</Text> */}
						<Text>Location: {location}</Text>
						{/* <Text>Google Maps Link: </Text> */}
					</Card>

					{/* <Text>Rooms</Text> */}
				</ScrollView>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		// marginTop: 10,
		height: "100%",
		// borderRadius: 5,
		padding: 10,
	},

	// image: {
	// 	// borderRadius: 5,
	// },
	container: {
		// backgroundColor: "rgba(52, 52, 52, 0.1)",
		flex: 1,
		flexDirection: "column",
		justifyContent: "flex-end",
	},
});

export default ChefDetails;
