import * as React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Cardview from "../components/Cardview";
import { createStackNavigator } from "@react-navigation/stack";
import Details from "../components/Details";
import VerticalList from "../components/VerticalList";

const DiningScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Text>Top Chefs</Text>
				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
					<Cardview
						link="https://picsum.photos/700"
						name="Xian Yong"
						comk={() => {
							navigation.navigate("Details");
						}}
					/>
					<Cardview link="https://picsum.photos/100" name="Eric" />
					<Cardview link="https://picsum.photos/1000" name="Lampardo" />
					<Cardview link="https://picsum.photos/101" name="Kesier" />
					<Cardview link="https://picsum.photos/110" name="Martien" />
					{/* <Cardview link="https://picsum.photos/104" name="Elaine" /> */}
				</ScrollView>
				<Text>Top Hotels</Text>
				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
					<Cardview
						link="https://picsum.photos/700"
						name="Louis Backyard"
						comk={() => {
							navigation.navigate("Details");
						}}
					/>
					<Cardview link="https://picsum.photos/100" name="Xbox" />
					<Cardview link="https://picsum.photos/1000" name="Texas Long" />
					<Cardview link="https://picsum.photos/101" name="KFC" />
					<Cardview link="https://picsum.photos/110" name="Mc D" />
					{/* <Cardview link="https://picsum.photos/104" name="Pho" /> */}
				</ScrollView>

				<View>
					<Text>Hotels</Text>
					{/* <ScrollView showsVerticalScrollIndicator={false}> */}

					<VerticalList
						link="https://picsum.photos/700"
						name="Louis Backyard"
					/>

					<VerticalList
						link="https://picsum.photos/106"
						name="Louis Backyard"
					/>
					<VerticalList
						link="https://picsum.photos/706"
						name="Louis Backyard"
					/>
					<VerticalList link="https://picsum.photos/70" name="Louis Backyard" />
					<VerticalList
						link="https://picsum.photos/106"
						name="Louis Backyard"
					/>
					<VerticalList
						link="https://picsum.photos/706"
						name="Louis Backyard"
					/>

					{/* </ScrollView> */}
				</View>
			</ScrollView>
		</View>
	);
};

const App = () => {
	const Stack = createStackNavigator();
	return (
		<Stack.Navigator initialRouteName="DiningScreen">
			<Stack.Screen
				name="DiningScreen"
				component={DiningScreen}
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
