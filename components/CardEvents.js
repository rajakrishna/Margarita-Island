import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const CardEvents = (props) => {
	return (
		<Card
			onPress={props.comk}
			style={{
				borderRadius: 20,
				width: "90%",
			}}
		>
			<Card.Cover source={{ uri: props.link }} style={{ borderRadius: 20 }} />
			<Card.Title
				title="Card Title"
				subtitle="Card Subtitle"
				style={{ borderRadius: 20 }}
			/>
		</Card>
	);
};

const styles = StyleSheet.create({});

export default CardEvents;
