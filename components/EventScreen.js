import * as React from "react";
import { View, Text, Button, ScrollView, StyleSheet } from "react-native";
import CardEvents from "./CardEvents";

const EventScreen = () => {
	return (
		<View style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<CardEvents link="https://picsum.photos/700" name="Pho" />
				<CardEvents link="https://picsum.photos/700" name="Pho" />
				<CardEvents link="https://picsum.photos/700" name="Pho" />
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: "red",
		paddingTop: 25,
		// alignItems: "center",
	},
});

export default EventScreen;
