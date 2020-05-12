import * as React from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import { Avatar, Card, Title, Chip } from "react-native-paper";
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
				</Card>

				<Text style={{ fontSize: 24, alignSelf: "center" }}>ABOUT</Text>
				<Text style={{ paddingLeft: 10, paddingRight: 10 }}>{about}</Text>
				<Text style={{ fontSize: 24, alignSelf: "center" }}>AMENITIES</Text>
				<Text style={{ paddingLeft: 10, paddingRight: 10 }}>{amenities}</Text>
				<Text style={{ fontSize: 24, alignSelf: "center", paddingTop: 10 }}>
					Available Rooms
				</Text>

				<Bedrooms
					// link={link}
					name="4B/3Ba"
					location="Our most famous suite with multiple bathrooms"
				/>
				<Bedrooms
					// link={link}
					name="3B/2Ba"
					location="Unique with art installations from all over the world"
				/>
				<Bedrooms
					// link={link}
					name="4B/3Ba"
					location="Presidential Suite with butler service"
				/>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		// marginTop: 10,
		elevation: 2,
	},
	container: {
		// paddingTop: 25,
		backgroundColor: "white",
	},
});

export default Details;
