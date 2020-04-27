import React, { Component, useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import VerticalListHotel from "./components/VerticalListHotel";

import { db } from "./Config";

let itemsRef = db.ref("/items/Hotels");

// export default class List extends Component
const Fbase = () => {
	let [todos, setTodos] = useState([]);

	useEffect(() => {
		itemsRef.on("value", (snapshot) => {
			let data = snapshot.val();
			let items = Object.values(data);
			setTodos((todos = items));
		});
	});

	// const { todos } = this.state;
	console.log(todos);
	const renderdata = () => {
		return todos.map((items, index) => {
			const { name, location, image } = items;
			return (
				<VerticalListHotel
					key={index}
					link={image}
					name={name}
					location={location}
				/>
			);
		});
	};

	return (
		<View style={styles.container}>
			{renderdata()}
			<Text>Hi</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "#ebebeb",
	},
});

export default Fbase;
