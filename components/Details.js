import * as React from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import { Avatar, Card, Title, Chip } from "react-native-paper";
import VerticalListHotel from "./VerticalListHotel";
import PaymentScreen from "./PaymentScreen";
import Bedrooms from "./Bedrooms";

const Details = ({ route, navigation }) => {
	const {
		route_name,
		route_location,
		route_image,
		route_about,
		route_amenities,
	} = route.params;
	const name = JSON.parse(JSON.stringify(route_name.name));
	const location = JSON.parse(JSON.stringify(route_location.location));
	const image = JSON.parse(JSON.stringify(route_image.image));
	const about = JSON.parse(JSON.stringify(route_about.about));
	const amenities = JSON.parse(JSON.stringify(route_amenities.amenities));
	const value = JSON.stringify(route.params.title);
	React.useLayoutEffect(() => {
		navigation.setOptions({
			title: value === "" ? "No title" : name,
		});
	}, [navigation, value]);

	return (
		<View style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Card style={styles.card}>
					<Card.Cover source={{ uri: image }} />
					{/* <Card.Title title={name} subtitle={location} /> */}
					{/* <Card.Title subtitle={location} /> */}
					<Text>ABOUT</Text>
					<Text>{about}</Text>
				</Card>
				<Text>AMENITIES</Text>
				<Text>{amenities}</Text>
				<Text>Rooms</Text>

				<Bedrooms
					// link={link}
					name="4B/3Ba"
					location="Our most famous suite with multiple bathrooms"
					buttonp={() => {
						// navigation.navigate("App", { screen: "PaymentScreen" });
						navigation.navigate("PaymentScreen");
					}}
				/>
				<Bedrooms
					// link={link}
					name="3B/2Ba"
					location="Unique with art installations from all over the world"
					buttonp={() => {
						// navigation.navigate("App", { screen: "PaymentScreen" });
						navigation.navigate("PaymentScreen");
					}}
				/>
				<Bedrooms
					// link={link}
					name="4B/3Ba"
					location="Presidential Suite with butler service"
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
		// paddingTop: 25,
		backgroundColor: "white",
	},
});

export default Details;
