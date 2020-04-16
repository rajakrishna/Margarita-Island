import * as React from "react";
import { View, Text, Button } from "react-native";
import CardEvents from "./CardEvents";

const EventScreen = () => {
	return (
		<View style={{ paddingTop: 100, alignItems: "center" }}>
			<CardEvents link="https://picsum.photos/700" name="Pho" />
			<CardEvents link="https://picsum.photos/700" name="Pho" />
			<CardEvents link="https://picsum.photos/700" name="Pho" />
		</View>
	);
};

export default EventScreen;
