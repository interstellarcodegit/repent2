import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

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
  TextInput,
} from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo,
  Fontisto,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";
import { activeScreen } from "./App";
import { version } from "react-dom";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export const Slider = ({ navigation }) => {
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
export function setEnrollStatus(status) {
  return status;
}

export const ExecEnroll = () => {
  if (enrollStatus == "true") {
    return <EnrollScreen />;
  }
  return <LessonsScreen />;
};

export const ScrollComponent = (props, { navigation }) => {
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
export const ScreenController = (props, { navigation }) => {
  if (props.screen == "lessons") {
    return <LessonsScreen />;
  }
  if (props.screen == "enroll") {
    return <EnrollScreen />;
  }
  if (props.screen == "home") {
    return <HomeScreen />;
  }
  if (props.screen == "radio") {
    return <Text>Radio</Text>;
  }
  if (props.screen == "teachings") {
    return <LessonsScreen />;
  }
};
export const Header = ({ navigation }) => {
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
export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
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
const violin =
  "https://cdn.pixabay.com/photo/2018/02/01/06/21/violin-3122660_960_720.jpg";
const voice =
  "https://cdn.pixabay.com/photo/2016/01/10/21/05/mic-1132528_960_720.jpg";
const piano =
  "https://cdn.pixabay.com/photo/2015/06/08/14/46/piano-801707_960_720.jpg";
const sax =
  "https://cdn.pixabay.com/photo/2018/03/21/13/16/saxophone-3246650_960_720.jpg";
export const LessonsScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.bgImage}
      source={require("./assets/worship.jpg")}
    >
      <View style={styles.container}>
        <View style={styles.rowViewb2n}>
          <Text style={styles.submainTxt}>Lessons</Text>

          <IconSelector family="fontawesome" color="white" name="music" />
        </View>
        <ScrollView>
          <Card
            uri={piano}
            iconfamily="MaterialCommunityIcons"
            iconName="piano"
            iconColor="white"
            name="Piano&Keyboard"
          />
          <Card
            uri={sax}
            iconfamily="MaterialCommunityIcons"
            iconColor="white"
            iconName="saxophone"
            name="Saxophone"
          />
          <Card
            uri={violin}
            iconfamily="MaterialCommunityIcons"
            iconColor="white"
            iconName="violin"
            name="Violin"
          />
          <Card
            uri={voice}
            iconfamily="MaterialIcons"
            iconColor="white"
            iconName="keyboard-voice"
            name="Voice"
          />
        </ScrollView>
      </View>
    </ImageBackground>
  );
};
export const IconSelector = (props) => {
  if (props.family == "fontawesome") {
    return <FontAwesome name={props.name} size={24} color={props.color} />;
  }
  if (props.family == "ionicons") {
    return <Ionicons name={props.name} size={24} color={props.color} />;
  }
  if (props.family == "MaterialCommunityIcons") {
    return (
      <MaterialCommunityIcons name={props.name} size={24} color={props.color} />
    );
  }
  if (props.family == "fontisto") {
    return <Fontisto name={props.name} size={24} color={props.color} />;
  }
  if (props.family == "entypo") {
    return <Entypo name={props.name} size={24} color={props.color} />;
  }

  if (props.family == "MaterialIcons") {
    return <MaterialIcons name={props.name} size={24} color={props.color} />;
  }
};
export const NewsScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.bgImage}
      source={require("./assets/worship.jpg")}
    >
      <View style={styles.container}>
        <View style={styles.rowViewb2n}>
          <Text style={styles.submainTxt}>News</Text>
          <FontAwesome name="music" size={24} color="white" />
          <IconSelector family="fontawesome" name="music" />
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
const uri2 =
  "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_960_720.jpg";
export const Card = (props, { navigation }) => {
  return (
    <View style={styles.lsmainView}>
      <View style={styles.titleView}>
        <IconSelector
          family={props.iconfamily}
          color={props.iconColor}
          name={props.iconName}
        />
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
      <View style={styles.enrollButtonCont}>
        <Text
          style={styles.enrollButton}
          onPress={() => {
            navigation.navigate("enroll");
          }}
        >
          Enroll
        </Text>
      </View>
    </View>
  );
};

export const PostSubmitScreen = () => {
  return (
    <ImageBackground
      style={styles.bgImage}
      source={require("./assets/worship.jpg")}
    >
      <View style={styles.container}>
        <View style={styles.rowViewb2n}>
          <Text style={styles.submainTxt}>Enroll</Text>
          <FontAwesome name="music" size={24} color="white" />
          <IconSelector family="fontawesome" name="music" />
        </View>
        <Text style={styles.mainTxt}>Thanks for enrolling ....</Text>
      </View>
    </ImageBackground>
  );
};
export const EnrollScreen = () => {
  const [fname, setFname] = React.useState("");
  const [sname, setSname] = React.useState("");
  return (
    <ImageBackground
      style={styles.bgImage}
      source={require("./assets/worship.jpg")}
    >
      <View style={styles.container}>
        <View style={styles.rowViewb2n}>
          <Text style={styles.submainTxt}>Enroll</Text>
          <FontAwesome name="music" size={24} color="white" />
          <IconSelector family="fontawesome" name="music" />
        </View>

        <TextInput
          style={styles.nativeInput}
          onChangeText={(text) => setFname(text)}
          placeholder="Your first name"
          placeholderTextColor="gray"
        />
        <TextInput
          style={styles.nativeInput}
          onChangeText={(text) => setSname(text)}
          placeholder="Your second name"
          placeholderTextColor="gray"
        />
        <View style={styles.submitButtonCont}>
          <Text style={styles.submitButton}>Submit </Text>
        </View>
      </View>
    </ImageBackground>
  );
};
