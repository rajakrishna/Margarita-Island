import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
// import { white } from "react-native-paper/lib/typescript/src/styles/colors";

const CardEvents = (props) => {
	return (
		<Card onPress={props.comk} style={styles.card}>
			<Card.Cover source={{ uri: props.link }} />
			<Card.Title title={props.name} subtitle={props.location} />
		</Card>
	);
};

const styles = StyleSheet.create({
	card: {
		marginTop: 10,
		elevation: 2,
	},
});

export default CardEvents;
