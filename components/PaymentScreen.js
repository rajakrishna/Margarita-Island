import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView, StyleSheet } from "react-native";
import Input from "./Input";

const PaymentScreen = () => {
	const [formdata, setformdata] = useState({
		firstname: "",
		lastname: "",
		email: "",
		phone: "",
	});

	let { firstname, lastname, email, phone } = formdata;

	firstname = (text) => {
		setformdata({ firstname: text });
	};
	lastname = (text) => {
		setformdata({ lastname: text });
	};
	email = (text) => {
		setformdata({ email: text });
	};
	phone = (text) => {
		setformdata({ phone: text });
	};

	return (
		<KeyboardAvoidingView style={styles.container}>
			<View style={styles.whotext}>
				<Text style={styles.text}>Enter The</Text>
				<Text style={styles.text2}>Details</Text>
			</View>

			<Input value={firstname} onChangeText={firstname} name="firstname" />

			<Input name="lastname" value={lastname} onChangeText={lastname} />
			<Input
				name="email"
				value={email}
				onChangeText={email}
				keyboard="email-address"
			/>
			<Input
				name="phone"
				value={phone}
				onChangeText={phone}
				keyboard="numeric"
				mlength={10}
			/>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#20263f",
		// alignItems: "center"
		justifyContent: "center",
	},
	button: {
		flexDirection: "row",
		justifyContent: "space-around",
	},
	text: {
		fontSize: 40,
		color: "#00e08b",
		textTransform: "uppercase",
	},
	text2: {
		fontSize: 40,
		color: "#fff",
		textTransform: "uppercase",
	},
	whotext: {
		alignItems: "flex-end",
		paddingRight: 30,
	},
});

export default PaymentScreen;
