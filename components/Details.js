import * as React from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import { Avatar, Card, Title, Chip } from "react-native-paper";
import VerticalListHotel from "./VerticalListHotel";
import PaymentScreen from "./PaymentScreen";

const Details = ({ route, navigation }) => {
	const { route_name, route_location } = route.params;
	const name = JSON.parse(JSON.stringify(route_name.name));
	const location = JSON.parse(JSON.stringify(route_location.location));
	return (
		<View style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Card style={styles.card}>
					<Card.Cover />
					<Card.Title title={name} subtitle={location} />
				</Card>

				<Text>Rooms</Text>

				<VerticalListHotel
					// link={link}
					name="cost"
					location="2B/1Ba"
					buttonp={() => {
						// navigation.navigate("App", { screen: "PaymentScreen" });
						navigation.navigate("PaymentScreen");
					}}
				/>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		marginTop: 10,
		elevation: 2,
	},
	container: {
		paddingTop: 25,
		backgroundColor: "white",
	},
});

export default Details;
