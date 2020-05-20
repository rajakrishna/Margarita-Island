import React, { useState, useEffect } from "react";
import { View, Text, Button, ScrollView, StyleSheet } from "react-native";
import CardEvents from "../components/CardEvents";
import { db } from "../Config";

let itemsRef = db.ref("/items/Events");

const EventScreen = () => {
	let [event, setEvent] = useState([]);

	useEffect(() => {
		itemsRef.on("value", (snapshot) => {
			let data = snapshot.val();
			let items = Object.values(data);
			setEvent((event = items));
		});
	}, []);
	const renderEvents = () => {
		return event.map((items, index) => {
			const { name, image, location } = items;
			return (
				<CardEvents
					key={index}
					name={name}
					link="https://i.ibb.co/SPKMMHx/elizeu-dias-RN6ts8-IZ4-0-unsplash.jpg"
					location={location}
				/>
			);
		});
	};
	return (
		<View style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				{renderEvents()}
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		paddingTop: 25,
		// alignItems: "center",
	},
});

export default EventScreen;
