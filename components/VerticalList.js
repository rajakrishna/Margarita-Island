import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Entypo";

const VerticalList = (props) => {
	let size = "100%";

	return (
		<View style={styles.container}>
			<Card
				onPress={props.comk}
				style={{ borderRadius: 8, width: size, height: 100, elevation: 1 }}
			>
				<View style={{ flexDirection: "row" }}>
					<Card.Cover source={{ uri: props.link }} style={styles.image} />
					{/* <View style={{ flexDirection: "column" }}> */}
					<Card.Content>
						{/* <View
						style={{
							flex: 1,
							flexDirection: "row",
							flexWrap: "wrap",
							paddingLeft: 10,
						}}
					> */}
						<Title style={styles.title}>{props.name}</Title>
						{/* <Paragraph>{props.location}</Paragraph> */}

						<Text style={{ color: "#2d767f" }}>
							{/* {"\n"} */}
							<Icon name="location-pin" size={15} />
							{props.location}
						</Text>
						{/* </View> */}
					</Card.Content>
					{/* </View> */}
				</View>
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		// flexDirection:'row',
		// justifyContent: 'center',
		paddingTop: 5,
		// backgroundColor: '#ecf0f1',
		padding: 8,
	},

	title: {
		margin: 2,
		paddingTop: 5,
		paddingLeft: 2,
		fontSize: 17,
		// fontWeight: "bold",
		textAlign: "center",
	},

	below: {
		paddingTop: 10,
	},

	image: {
		width: 120,
		height: 100,
		borderRadius: 8,
	},
});

export default VerticalList;
