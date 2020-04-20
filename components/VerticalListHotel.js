import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

const VerticalListHotel = (props) => {
	return (
		<View style={styles.container}>
			<Card onPress={props.comk} style={styles.card}>
				<View style={{ flexDirection: "row" }}>
					<Card.Cover source={{ uri: props.link }} style={styles.image} />
					<View style={{ flexDirection: "column" }}>
						<Card.Content>
							<Title>{props.name}</Title>
							<Paragraph>{props.location}</Paragraph>
						</Card.Content>
					</View>
				</View>
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: 5,
		padding: 8,
	},
	card: {
		height: 150,
		elevation: 2,
	},

	title: {
		margin: 2,
		paddingTop: 5,
		paddingLeft: 10,
		fontSize: 24,
		fontWeight: "bold",
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
