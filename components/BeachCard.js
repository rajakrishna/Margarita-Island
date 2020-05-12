import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const CardView = (props) => {
	return (
		<View style={styles.container}>
			<Card onPress={props.comk} style={styles.card}>
				{/* <View style={{ alignItems: "center" }}> */}
				<Card.Cover source={{ uri: props.link }} style={styles.image} />
				{/* </View> */}
				<Text style={styles.paragraph}>{props.name}</Text>
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		// justifyContent: "center",
		// alignContent: "center",
		paddingTop: 15,
		flexDirection: "row",
		// width: 150,
		// height: 150,
		// paddingTop: 35,
	},
	card: {
		flex: 1,
	},

	paragraph: {
		marginBottom: 4,
		position: "absolute",
		bottom: "40%",
		// left: "40%",
		// backgroundColor: 'white',
		alignContent: "center",
		color: "white",
		fontSize: 40,
		fontWeight: "bold",
		alignSelf: "center",
		textShadowColor: "rgba(0, 0, 0, 0.35)",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 2,
	},
});

export default CardView;
