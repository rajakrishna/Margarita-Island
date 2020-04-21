import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const CardView = (props) => {
	return (
		<View style={styles.container}>
			<Card
				onPress={props.comk}
				style={{ borderRadius: 20, width: 150, height: 150, elevation: 2 }}
			>
				<View style={{ alignItems: "center" }}>
					<Card.Cover source={{ uri: props.link }} style={styles.image} />
				</View>
				<Text style={styles.paragraph}>{props.name}</Text>
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		padding: 8,
	},
	image: {
		width: 150,
		height: 150,
		borderRadius: 8,
	},

	paragraph: {
		marginBottom: 4,
		position: "absolute",
		bottom: 0,
		left: "7%",
		// backgroundColor: 'white',
		alignContent: "center",
		color: "white",
		fontSize: 17,
		fontWeight: "bold",
		// textAlign: "center",
		textShadowColor: "rgba(0, 0, 0, 0.35)",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 2,
	},
});

export default CardView;
