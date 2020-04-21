import * as React from "react";
import { View, Text, Button } from "react-native";

const Details = ({ route, navigation }) => {
	const { route_name, route_location } = route.params;
	const name = JSON.parse(JSON.stringify(route_name.name));
	const location = JSON.parse(JSON.stringify(route_location.location));
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>{name}</Text>
			<Text>{location}</Text>
		</View>
	);
};

export default Details;
