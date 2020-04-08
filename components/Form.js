import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from "react-native";
// import Firebase from "./Firebase";

import * as firebase from "firebase";

const config = {
	apiKey: "AIzaSyCn4kww7uA_kPkroZS9hXPkuCvhDDq1WKc",
	authDomain: "margarita-island-8e170.firebaseapp.com",
	databaseURL: "https://margarita-island-8e170.firebaseio.com",
	projectId: "margarita-island-8e170",
	storageBucket: "margarita-island-8e170.appspot.com",
	messagingSenderId: "36607366513",
	appId: "1:36607366513:web:ce3d8f5038c25948e652d0",
	measurementId: "G-J7F4F0MGKD",
};

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

export default class App extends React.Component {
	state = {
		email: "",
		password: "",
	};

	userLogin = (email, password) => {
		try {
			firebase.auth().signInWithEmailAndPassword(email, password);
			console.log("logged In");
		} catch (error) {
			console.log(error.toString());
		}
	};

	userSignup = (email, password) => {
		console.log(email, password);
		firebase.auth().createUserWithEmailAndPassword(email, password);
	};

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.logo}>Logo here</Text>
				<View style={styles.inputView}>
					<TextInput
						style={styles.inputText}
						placeholder="Email..."
						placeholderTextColor="#003f5c"
						onChangeText={(text) => this.setState({ email: text })}
					/>
				</View>
				<View style={styles.inputView}>
					<TextInput
						secureTextEntry
						style={styles.inputText}
						placeholder="Password..."
						placeholderTextColor="#003f5c"
						onChangeText={(text) => this.setState({ password: text })}
					/>
				</View>
				<TouchableOpacity
					onPress={() => {
						console.log("yes");
					}}
				>
					<Text style={styles.forgot}>Forgot Password?</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.loginBtn}
					onPress={() => this.userLogin(this.state.email, this.state.password)}
				>
					<Text style={styles.loginText}>LOGIN</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.loginBtn}
					onPress={() => this.userSignup(this.state.email, this.state.password)}
				>
					<Text style={styles.loginText}>Signup</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#003f5c",
		alignItems: "center",
		justifyContent: "center",
	},
	logo: {
		fontWeight: "bold",
		fontSize: 50,
		color: "#fb5b5a",
		marginBottom: 40,
	},
	inputView: {
		width: "80%",
		backgroundColor: "#465881",
		borderRadius: 25,
		height: 50,
		marginBottom: 20,
		justifyContent: "center",
		padding: 20,
	},
	inputText: {
		height: 50,
		color: "white",
	},
	forgot: {
		color: "white",
		fontSize: 11,
	},
	loginBtn: {
		width: "80%",
		backgroundColor: "#fb5b5a",
		borderRadius: 25,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 40,
		marginBottom: 10,
	},
	loginText: {
		color: "white",
	},
});
