import * as React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Cardview from "../components/Cardview";
import { createStackNavigator } from "@react-navigation/stack";
import Details from "../components/Details";
import VerticalList from "../components/VerticalList";

const IslandScreen = () => {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Text>Beaches</Text>
				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
					<Cardview
						link="https://picsum.photos/700"
						name="Xian Yong"
						comk={() => {
							navigation.navigate("Details2");
						}}
					/>
					<Cardview link="https://picsum.photos/100" name="Eric" />
					<Cardview link="https://picsum.photos/1000" name="Lampardo" />

					{/* <Cardview link="https://picsum.photos/104" name="Elaine" /> */}
				</ScrollView>
				<Text>Mountains</Text>
				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
					<Cardview
						link="https://picsum.photos/700"
						name="Xian Yong"
						comk={() => {
							navigation.navigate("Details2");
						}}
					/>
					<Cardview link="https://picsum.photos/100" name="Eric" />
					<Cardview link="https://picsum.photos/1000" name="Lampardo" />

					{/* <Cardview link="https://picsum.photos/104" name="Elaine" /> */}
				</ScrollView>
				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
					<Cardview
						link="https://picsum.photos/700"
						name="Xian Yong"
						comk={() => {
							navigation.navigate("Details2");
						}}
					/>
					<Cardview link="https://picsum.photos/100" name="Eric" />
					<Cardview link="https://picsum.photos/1000" name="Lampardo" />

					{/* <Cardview link="https://picsum.photos/104" name="Elaine" /> */}
				</ScrollView>
			</ScrollView>
		</View>
	);
};
const App = () => {
	const Stack = createStackNavigator();
	return (
		<Stack.Navigator initialRouteName="IslandScreen">
			<Stack.Screen
				name="IslandScreen"
				component={IslandScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name="Details" component={Details} />
		</Stack.Navigator>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: 25,
		backgroundColor: "white",
	},
});

export default App;
