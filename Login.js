import React, { useState, useEffect } from "react";
// import { TextInput } from "react-native-paper";
import {
	View,
	Text,
	ScrollView,
	StyleSheet,
	Image,
	Button,
	Alert,
} from "react-native";
import { TextInput } from "react-native";
import { db } from "./Config";
import firebase from "firebase";
import { NavigationContainer } from "@react-navigation/native";
import BottomNavigation from "./components/BottomNavigation";
import { createStackNavigator } from "@react-navigation/stack";
// import app_icon2 from "./assets/app_icon2";
let config = {
	// REMOVED FIREBASE API_KEYS
	apiKey: "AIzaSyCn4kww7uA_kPkroZS9hXPkuCvhDDq1WKc",
	authDomain: "margarita-island-8e170.firebaseapp.com",
	databaseURL: "https://margarita-island-8e170.firebaseio.com",
	projectId: "margarita-island-8e170",
	storageBucket: "margarita-island-8e170.appspot.com",
	messagingSenderId: "36607366513",
	appId: "1:36607366513:web:ce3d8f5038c25948e652d0",
	measurementId: "G-J7F4F0MGKD",
};
// let app = Firebase.initializeApp(config);
if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

const LoginScreen = ({ navigation }) => {
	let [email, setEmail] = useState("");
	let [pass, setPass] = useState("");
	const UserSignedAlert = () =>
		Alert.alert(
			"Margarita Island Welcome You",
			"Thank You for the signing up with us" +
				"\n" +
				"Login using your email and password",
			[{ text: "OK", onPress: () => console.log("OK Pressed") }],
			{ cancelable: false }
		);

	const SignUp = (email, password) => {
		try {
			firebase
				.auth()
				.createUserWithEmailAndPassword(email, password)
				.then((user) => {
					console.log(user);
					{
						UserSignedAlert();
					}
				});
		} catch (error) {
			console.log(error.toString(error));
		}
	};
	const Login = (email, password) => {
		try {
			firebase
				.auth()
				.signInWithEmailAndPassword(email, password)
				.then((res) => {
					console.log(res.user.email);
					console.log("SIGNED IN");
					// navigation.navigate("BottomNavigation");
					navigation.reset({
						index: 0,
						routes: [
							{
								name: "BottomNavigation",
							},
						],
					});
				});
		} catch (error) {
			console.log(error.toString(error));
		}
	};
	const textclear = () => {
		setEmail((email = ""));
		setPass((pass = ""));
	};

	const Svalidate = (pass) => {
		let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (pass.length < 8 || reg.test(email) === false) {
			Alert.alert(
				"Error: Check email or password",
				"Email format should be john@gmail.com" +
					"\n" +
					" Password should be 8 or more characters",
				[{ text: "OK", onPress: () => console.log("OK Pressed") }],
				{ cancelable: false }
			);
		} else {
			SignUp(email, pass);
			textclear();
		}
	};
	const Lvalidate = (pass) => {
		let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (pass.length < 8 || reg.test(email) === false) {
			Alert.alert(
				"Error: Check email or password",
				"Email format should be john@gmail.com" +
					" " +
					" Password should be 8 or more characters",
				[{ text: "OK", onPress: () => console.log("OK Pressed") }],
				{ cancelable: false }
			);
		} else {
			Login(email, pass);
			textclear();
		}
	};
	return (
		<View style={styles.container}>
			<Text style={styles.mtext}>Margarita Island</Text>
			<Image style={styles.logo} source={require("./assets/app_icon2.png")} />
			<View style={styles.form}>
				<TextInput
					style={styles.txt}
					placeholder="Email"
					value={email}
					autoCapitalize="none"
					autoCorrect={false}
					onChangeText={(email) => setEmail((email = email))}
				/>
				<TextInput
					style={styles.txt}
					placeholder="Password"
					value={pass}
					autoCapitalize="none"
					autoCorrect={false}
					secureTextEntry={true}
					onChangeText={(pass) => setPass((pass = pass))}
				/>
				<View style={styles.btn}>
					<Button
						style={styles.btn}
						title="Login"
						color="green"
						onPress={() => {
							Lvalidate(pass);
						}}
					/>
				</View>
				<View style={styles.btn}>
					<Button
						// color="red"
						// backgroundColor="white"
						title="Signup"
						onPress={() => {
							Svalidate(pass);
						}}
					/>
				</View>
			</View>
		</View>
	);
};

const App = () => {
	const Stack = createStackNavigator();
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="LoginScreen">
				<Stack.Screen
					name="LoginScreen"
					component={LoginScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="BottomNavigation"
					component={BottomNavigation}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 40,
		backgroundColor: "white",
	},
	btn: {
		marginTop: 20,
	},
	mtext: {
		fontSize: 30,
		alignSelf: "center",
		// marginBottom: 70,
	},
	form: {
		// flex: 1,
		marginTop: 30,
		justifyContent: "center",
		marginLeft: 30,
		marginRight: 30,
	},
	txt: {
		height: 50,
		borderBottomColor: "black",
		// color: "red",
		fontSize: 18,
		borderBottomWidth: 1,
	},
	logo: {
		width: 200,
		height: 200,
		marginTop: 20,
		alignSelf: "center",
	},
});
export default App;
