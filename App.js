import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { styles } from "./styles";
import {
  Slider,
  Header,
  ScreenController,
  HomeScreen,
  EnrollScreen,
  ScrollComponent,
  ExecEnroll,
  LessonsScreen,
  PostSubmitScreen,
} from "./components";

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
{
}
// var imagesource = "worship";
// // import log from "./assets/logo.png";
// const SetImageBackground = () => {
//   setInterval(() => {
//     if (imagesource == "worship") {
//       imagesource = "aurora";
//     }
//     imagesource = "worship";
//   }, 60000);
// };
// var imgurl = `./assets/${imagesource}.jpg`;
// var lasturl = imgurl.toString();
export var activeScreen = () => {};
const NHomeScreen = () => {
  const [screen, setScreen] = React.useState("lessons");

  return (
    <ImageBackground
      style={styles.bgImage}
      source={require("./assets/worship.jpg")}
    >
      <ScreenController screen={screen} />
      <View style={styles.sliderCont}>
        {/* decelerationRate={"normal"}> */}
        <View style={styles.slidermCont}>
          <Text
            // onPress={() => {
            //   if (Color == "red") {
            //     setColor("chartreuse");
            //   } else {
            //     setColor("red");
            //   }
            // }}
            style={styles.sliderText}
            onPress={() => {
              setScreen("home");
            }}
          >
            Home
          </Text>
        </View>

        <View style={styles.slidermCont}>
          <Text
            style={styles.sliderText}
            onPress={() => {
              setScreen("News");
            }}
          >
            News
          </Text>
        </View>
        <View style={styles.slidermCont}>
          <Text
            style={styles.sliderText}
            onPress={() => {
              setScreen("Radio");
            }}
          >
            Radio {""}
          </Text>
        </View>
        <View style={styles.slidermCont}>
          <Text
            style={styles.sliderText}
            onPress={() => {
              setScreen("Teachings");
            }}
          >
            Teachings{" "}
          </Text>
        </View>
        <View style={styles.slidermCont}>
          <Text
            style={styles.sliderText}
            onPress={() => {
              setScreen("Healings");
            }}
          >
            Healings{" "}
          </Text>
        </View>
        <View style={styles.slidermCont}>
          <Text
            style={styles.sliderText}
            onPress={() => {
              setScreen("lessons");
            }}
          >
            Lessons{" "}
          </Text>
        </View>
        <View style={styles.slidermCont}>
          <Text
            style={styles.sliderText}
            onPress={() => {
              setScreen("Worship");
            }}
          >
            Worship {""}
          </Text>
        </View>
      </View>
      {/* <Slider style={styles.Slidermn} /> */}
      {/* <StatusBar style="auto" /> */}
    </ImageBackground>
  );
};
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
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
          }}
          component={NHomeScreen}
        />
        <Stack.Screen
          name="enroll"
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
          }}
          component={EnrollScreen}
        />
        <Stack.Screen
          name="lessons"
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
          }}
          component={LessonsScreen}
        />
        <Stack.Screen
          name="post-submit"
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
          }}
          component={PostSubmitScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
