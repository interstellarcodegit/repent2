import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import { UpdatesScreen } from "./views/updates";
import { HomeScreen } from "./views/home";
import { ActivityScreen } from "./views/activities";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { styles } from "./styles";

import {
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
  Button,
  ImageBackground,
  Text,
  View,
  ScrollView,
} from "react-native";
import { ChatScreen } from "./views/chat";

function LogoTitle() {
  return (
    <View style={styles.rowViewb2n}>
      <Image
        style={{ width: 50, height: 50 }}
        source={require("./assets/splash.png")}
      />
      <Text style={styles.mainTxt}>Repent and Prepare The Way</Text>
    </View>
  );
}
const MyTheme = {
  dark: true,
  colors: {
    primary: "red",
    background: "blue",
    card: " rgb(17, 4, 26)",
    text: "green",
    border: "aqua",
    notification: "rgb(255, 69, 58)",
  },
};
export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Updates" component={UpdatesScreen} />
        <Tab.Screen name="Activities" component={ActivityScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
