import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import {
	Avatar,
	Button,
	Card,
	Title,
	Paragraph,
	Chip,
} from "react-native-paper";
import Icon from "react-native-vector-icons/Entypo";

const VerticalListHotel = (props) => {
	return (
		<View style={styles.container}>
			<Card onPress={props.comk} style={styles.card}>
				<View style={{ flexDirection: "row" }}>
					<Card.Cover source={{ uri: props.link }} style={styles.image} />
					<Card.Content>
						<Title style={styles.title}>{props.name}</Title>
						<Text style={{ color: "#2d767f" }}>
							<Icon name="location-pin" size={15} />
							{props.location}
						</Text>
					</Card.Content>
				</View>
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: 5,
		padding: 3,
	},

	card: {
		height: 150,
		elevation: 2,
		// width: "100%",
	},

	title: {
		margin: 2,
		paddingTop: 5,
		paddingLeft: 2,
		fontSize: 18,
		// fontWeight: "bold",
		textAlign: "center",
	},

	below: {
		paddingTop: 10,
	},

	image: {
		width: 150,
		height: 150,
		// borderRadius: 20,
	},
});

export default VerticalListHotel;
