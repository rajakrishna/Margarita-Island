import * as React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default class Input extends React.Component {
	render() {
		return (
			<TextInput
				onChangeText={this.props.onChangeText}
				value={this.props.value}
				style={styles.text}
				placeholder={this.props.name}
				keyboardType={this.props.keyboard}
				maxLength={this.props.mlength}
			/>
		);
	}
}

const styles = StyleSheet.create({
	text: {
		// backgroundColor: "white",
		marginLeft: 30,
		marginRight: 30,
		marginBottom: 12,
		height: 50,
		color: "white",
		borderBottomColor: "white",
		borderBottomWidth: 1,
	},
});
