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
  TouchableOpacity,
  Text,
  View,
  ScrollView,
} from "react-native";
import { ChatScreen } from "./views/chat";
import { AntDesign, Ionicons,Feather ,MaterialIcons,Entypo
} from '@expo/vector-icons'; 
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { Ubuntu_300Light } from '@expo-google-fonts/ubuntu';
import { Cinzel_400Regular } from '@expo-google-fonts/cinzel';
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
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const  standardTxtColor ="#673ab7"
const  mlStandardTxtColor ="#222"
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
function MyTabBar({ state, descriptors, navigation }) {
  let [fontsLoaded] = useFonts({
    Inter_900Black, Ubuntu_300Light,Cinzel_400Regular
  });
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={{ flexDirection: "row" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

            const isFocused = state.index === index;
            const icon =
              label=='Home'
              ?<AntDesign name="home" size={24} color={ isFocused ?standardTxtColor : mlStandardTxtColor } />
              :label=='Activities'
              ?<Feather name="activity" size={24} color={ isFocused ?standardTxtColor : mlStandardTxtColor }/>
              :label=='Updates'
              ?<MaterialIcons name="notifications-active" size={24} color={ isFocused ?standardTxtColor : mlStandardTxtColor } />
              :label=="Chat"
              ?<Entypo name="chat" size={24} color={ isFocused ?standardTxtColor : mlStandardTxtColor } />
              :<Entypo name="chat" size={24} color={ isFocused ?standardTxtColor : mlStandardTxtColor } />
       

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 , height:windowHeight/15,
            alignContent:'center',justifyContent:'center',alignItems:'center',
          }}
          >
            {/* <Text style={{ color: isFocused ? "#673ab7" : "#222" }}>
              {label}
            </Text> */}
            {icon}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function App({ navigation }) {
  let [fontsLoaded] = useFonts({
    Inter_900Black, Ubuntu_300Light,Cinzel_400Regular
  });
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => <MyTabBar {...props} />}
        initialRouteName="Home"
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Updates" component={UpdatesScreen} />
        <Tab.Screen name="Activities" component={ActivityScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
