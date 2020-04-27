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
							<View
								style={{
									// flex: 1,
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "flex-start",
									// flexShrink: 1,
									// flexWrap: 1,
								}}
							>
								<Chip
									mode="flat"
									disabled={true}
									style={styles.chip1}
									textStyle={styles.chip1}
								>
									Wi-Fi
								</Chip>
								<Chip
									mode="flat"
									disabled={true}
									style={styles.chip}
									textStyle={styles.chip}
								>
									Breakfast
								</Chip>
								<Chip
									mode="flat"
									disabled={true}
									style={styles.chip}
									textStyle={styles.chip}
								>
									Shower
								</Chip>
							</View>
						</Card.Content>

						<Card.Actions>
							<Button
								style={styles.buttonp}
								// color="white"
								mode="contained"
								dark={true}
								onPress={props.buttonp}
							>
								Book
							</Button>
						</Card.Actions>
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
	chip: {
		marginLeft: 5,
		marginTop: 5,
		fontSize: 12,
		// flexDirection: "column",
		// flexShrink: 1,
		// flex: 1,
		// flexShrink: 1,
		// padding: 0,
	},
	chip1: {
		marginTop: 5,
		fontSize: 12,
	},
	buttonp: {
		// marginLeft: "60%",
		// backgroundColor: "green",
		color: "white",
		// width: "70%",
	},
});

export default VerticalListHotel;
