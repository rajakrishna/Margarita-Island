import * as React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Cardview from "./Cardview";
import Btn from "./Button";
import LinearGradient from "react-native-linear-gradient";
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Details from "./Details";
import VerticalList from "./VerticalList";
// import { white } from 'react-native-paper/lib/typescript/src/styles/colors';

// EXPO linear graident check later
//https://docs.expo.io/versions/latest/sdk/linear-gradient/

const DiningScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Text>Top Chefs</Text>
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
					<Cardview link="https://picsum.photos/104" name="Pho" />
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
					<Cardview link="https://picsum.photos/104" name="Pho" />
				</ScrollView>

				<View>
					<Text>Top Chefs</Text>
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
