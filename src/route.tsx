import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";
import { StatusBar } from "expo-status-bar";
// pages
import MainWeather from "./page/MainWeather";
// components
import HeaderWithTemp from "./components/Layout/HeaderWithTemp";

// stack
const Stack = createNativeStackNavigator();

const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />

      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#FF6B6B" },
          headerTitleStyle: { color: "white", fontSize: 16 },
        }}
      >
        <Stack.Screen
          name="Home"
          component={MainWeather}
          options={{
            headerRight: () => <HeaderWithTemp />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
