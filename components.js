import React from "react";
import { styles } from "./styles";
import {
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
  Text,
  View,
  ImageBackground,
  TextPropTypes,
} from "react-native";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import { version } from "react-dom";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export const Slider = () => {
  const [Color, setColor] = React.useState("red");
  return (
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
        >
          Home
        </Text>
      </View>

      <View style={styles.slidermCont}>
        <Text style={styles.sliderText}>News </Text>
      </View>
      <View style={styles.slidermCont}>
        <Text style={styles.sliderText}>Radio </Text>
      </View>
      <View style={styles.slidermCont}>
        <Text style={styles.sliderText}>Teachings </Text>
      </View>
      <View style={styles.slidermCont}>
        <Text style={styles.sliderText}>Healings</Text>
      </View>
      <View style={styles.slidermCont}>
        <Text style={styles.sliderText}>Lessons</Text>
      </View>
      <View style={styles.slidermCont}>
        <Text style={styles.sliderText}>Worship</Text>
      </View>
    </View>
  );
};
export const FlatlistMod = () => {
  return (
    <FlatList
      data={[
        { key: "Devin" },
        { key: "Dan" },
        { key: "Dominic" },
        { key: "Jackson" },
        { key: "James" },
        { key: "Joel" },
        { key: "John" },
        { key: "Jillian" },
        { key: "Jimmy" },
        { key: "Julie" },
        { key: "kettle" },
        { key: "Monstre" },
        { key: "Muster" },
      ]}
      renderItem={({ item }) => (
        <Text style={styles.Fltext}>
          {item.key}
          {/* <Image source={require("./assets/log.png")} /> */}
        </Text>
      )}
    />
  );
};
export const ScrollComponent = (props) => {
  return (
    <View style={styles.showView}>
      <Text style={styles.showTitle}>{props.title}</Text>
      <View style={styles.mainShowContent}>
        <Text style={styles.showTxt}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis id unde
          quaerat distinctio quidem natus, molestiae fuga praesentium tempore
          est, quibusdam iste dolore doloribus porro quia autem ut voluptatem?
          Aliquam.
        </Text>
      </View>
    </View>
  );
};
export const ScreenController = (props) => {
  if (props.screen == "lessons") {
    return <LessonsScreen />;
  }
  if (props.screen == "home") {
    return <HomeScreen />;
  }
  if (props.screen == "radio") {
    return <LessonsScreen />;
  }
  if (props.screen == "teachings") {
    return <LessonsScreen />;
  }
};
export const Header = () => {
  return (
    <View style={styles.textView}>
      <Image
        style={styles.headerImage}
        source={require("./assets/splash.png")}
      />
      <Text style={styles.mainTxt}>Repent & Prepare The Way</Text>
    </View>
  );
};
export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <ScrollComponent title="first title" />
        <ScrollComponent title="second title" />
        <ScrollComponent title="3 title" />
        <ScrollComponent title="4 title" />
        <ScrollComponent title="5 title" />
      </ScrollView>
    </View>
  );
};
export const LessonsScreen = () => {
  return (
    <ImageBackground
      style={styles.bgImage}
      source={require("./assets/worship.jpg")}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.rowViewb2n}>
          <Text style={styles.submainTxt}>Lessons</Text>
          <FontAwesome name="music" size={24} color="white" />
        </View>
        <ScrollView>
          <Card uri={uri} name="Piano&Keyboard" />
          <Card uri={uri} name="Saxophone" />
          <Card uri={uri} name="Violin" />
          <Card uri={uri} name="Voice" />
        </ScrollView>
      </View>
    </ImageBackground>
  );
};
const IconSelector = (props) => {
  if (props.family == "fontawesome") {
    return <FontAwesome name={props.name} size={24} color={props.color} />;
  }
};
export const NewsScreen = () => {
  return (
    <ImageBackground
      style={styles.bgImage}
      source={require("./assets/worship.jpg")}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.rowViewb2n}>
          <Text style={styles.submainTxt}>News</Text>
          <FontAwesome name="music" size={24} color="white" />
        </View>

        <ScrollView>
          <Card />
        </ScrollView>
      </View>
    </ImageBackground>
  );
};
const uri =
  "https://cdn.pixabay.com/photo/2020/09/07/17/40/birds-5552482_960_720.jpg";
export const Card = (props) => {
  return (
    <View style={styles.lsmainView}>
      <View style={styles.titleView}>
        <MaterialCommunityIcons name="piano" size={24} color="white" />
        <Text style={styles.lsviewTitle}>{props.name} </Text>
      </View>
      <View style={styles.rowViewb2n}>
        <Text style={styles.showTxt}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis id unde
          quaerat distinctio quidem natus, molestiae fuga praesentium tempore
          est, quibusdam iste dolore doloribus porro quia autem ut voluptatem?
          Aliquam.
        </Text>
        <Image
          style={styles.rowViewImage}
          source={{
            uri: props.uri,
          }}
        />
      </View>
    </View>
  );
};
