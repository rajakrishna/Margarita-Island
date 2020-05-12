import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import HotelScreen from "../Screens/HotelScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import DiningScreen from "../Screens/DiningScreen";
import ServiceScreen from "../Screens/ServiceScreen";
import EventScreen from "../Screens/EventScreen";
import BeachesScreen from "../Screens/BeachesScreen";

const Tab = createMaterialBottomTabNavigator();

const BottomNavigation = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName="Hotel"
				activeColor="#e2f3f5"
				inactiveColor="#3e3636"
				barStyle={{ backgroundColor: "#3d6cb9" }}
				shifting={true}
				keyboardHidesNavigationBar={true}
				// barStyle={{ size:100 }}
			>
				<Tab.Screen
					name="Hotel"
					component={HotelScreen}
					options={{
						tabBarLabel: "Hotel",
						// tabBarColor: 'black',
						tabBarIcon: ({ color }) => (
							<MaterialCommunityIcons name="hotel" color={color} size={26} />
						),
					}}
				/>

				<Tab.Screen
					name="Dining"
					component={DiningScreen}
					options={{
						tabBarLabel: "Dining",
						tabBarIcon: ({ color }) => (
							<MaterialCommunityIcons name="food" color={color} size={26} />
						),
					}}
				/>
				<Tab.Screen
					name="Beaches"
					component={BeachesScreen}
					options={{
						tabBarLabel: "Beaches",
						tabBarIcon: ({ color }) => (
							<MaterialCommunityIcons name="beach" color={color} size={26} />
						),
					}}
				/>

				<Tab.Screen
					name="Events"
					component={EventScreen}
					options={{
						tabBarLabel: "Events",
						tabBarIcon: ({ color }) => (
							<MaterialCommunityIcons name="calendar" color={color} size={26} />
						),
					}}
				/>
				{/* <Tab.Screen
					name="Services"
					component={ServiceScreen}
					options={{
						tabBarLabel: "Services",
						tabBarIcon: ({ color }) => (
							<MaterialCommunityIcons name="settings" color={color} size={26} />
						),
					}}
				/> */}

				{/* <Tab.Screen
					name="Profile"
					component={ProfileScreen}
					options={{
						tabBarLabel: "Profile",
						tabBarIcon: ({ color }) => (
							<MaterialCommunityIcons
								name="account-settings"
								color={color}
								size={26}
							/>
						),
					}}
				/> */}
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default BottomNavigation;
