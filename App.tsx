import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
// screens
import Home from "./screens/Home";
import Settings from "./screens/Settings";
// navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// styling
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
  materialIconName: keyof typeof Ionicons.glyphMap;
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused }) => {
                let iconName: Props["materialIconName"] = "md-checkmark-circle";

                if (route.name === "Home") {
                  iconName = focused ? "home" : "home-outline";
                } else if (route.name === "Settings") {
                  iconName = focused ? "ios-list" : "ios-list-outline";
                }
                return <Ionicons name={iconName} size={32} />;
              },
              tabBarActiveTintColor: "gold",
              tabBarInactiveTintColor: "dodgerblue",
              tabBarStyle: { backgroundColor: "#333333" },
            })}
          >
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
              }}
            />
            <Tab.Screen
              name="Settings"
              component={Settings}
              options={{
                headerStyle: {
                  backgroundColor: "#333333",
                },
                headerTitleStyle: {
                  fontWeight: "bold",
                  color: "white",
                },
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
});
