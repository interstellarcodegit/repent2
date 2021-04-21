import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { styles } from "./styles";
import {
  Slider,
  Header,
  ScreenController,
  HomeScreen,
  ScrollComponent,
} from "./components";

import {
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Text,
  View,
  ScrollView,
} from "react-native";
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
export default function App() {
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
            Radio
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
            Healings
          </Text>
        </View>
        <View style={styles.slidermCont}>
          <Text
            style={styles.sliderText}
            onPress={() => {
              setScreen("lessons");
            }}
          >
            Lessons
          </Text>
        </View>
        <View style={styles.slidermCont}>
          <Text
            style={styles.sliderText}
            onPress={() => {
              setScreen("Worship");
            }}
          >
            Worship
          </Text>
        </View>
      </View>
      {/* <Slider style={styles.Slidermn} /> */}
      {/* <StatusBar style="auto" /> */}
    </ImageBackground>
  );
}
