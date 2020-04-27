import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import ItemComponent from "./Yoyo.js";
import VerticalListHotel from "./components/VerticalListHotel";

import { db } from "./Config";

let itemsRef = db.ref("/items");

export default class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// data: [],
			todos: [],
		};
		// console.log(this.state.todos);
	}

	componentDidMount() {
		itemsRef.on("value", (snapshot) => {
			let data = snapshot.val();
			let items = Object.values(data);
			// let ipack = Object.values(items);
			// let i1 = ipack[0];
			// let i2 = Object.values(i1);
			this.setState({ todos: items });
		});
	}

	render() {
		const { todos } = this.state;
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

		// let todokeys = Object.keys(this.state.todos);

		return (
			<View style={styles.container}>
				{renderdata()}
				<Text>Hi</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "#ebebeb",
	},
});
