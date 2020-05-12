import Firebase from "firebase";
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
let app = Firebase.initializeApp(config);
export const db = app.database();
