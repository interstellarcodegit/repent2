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
  SafeAreaView,
} from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo,
  Fontisto,
  AntDesign,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { styles } from "../styles";
import AppLoading from 'expo-app-loading';
import {  Inter_900Black } from '@expo-google-fonts/inter';
import { Ubuntu_300Light } from '@expo-google-fonts/ubuntu';
import { useFonts,Cinzel_400Regular } from '@expo-google-fonts/cinzel';

const  standardTxtColor ="#673ab7"
const  mlStandardTxtColor ="#222"


const IconSelector = (props) => {
  let [fontsLoaded] = useFonts({
    Inter_900Black, Ubuntu_300Light,Cinzel_400Regular
  });
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
  if (props.family == "Entypo") {
    return <Entypo name={props.name} size={24} color={props.color} />;
  }

  if (props.family == "MaterialIcons") {
    return <MaterialIcons name={props.name} size={24} color={props.color} />;
  }
  if (props.family == "antdesign") {
    return <AntDesign name={props.name} size={24} color={props.color} />;
  }
};

const Card = (props) => {
  let [fontsLoaded] = useFonts({
    Inter_900Black, Ubuntu_300Light,Cinzel_400Regular
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.Card}>
      <Image style={styles.cardImage} source={{ uri: props.image }} />
      <View>
        <View style={styles.flexRowView}>
          <IconSelector
            family={props.iconFamily}
            name={props.iconName}
            color={props.iconColor}
          />
          <Text style={styles.cardText}>{props.iname}</Text>
        </View>
      </View>
    </View>
  );
};
export const HomeScreen = () => {
  let [fontsLoaded] = useFonts({
    Inter_900Black, Ubuntu_300Light,Cinzel_400Regular
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ImageBackground
      source={require("../assets/images/mangu.jpg")}
      style={styles.bgImage}
    >
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri: "https://www.tenderyetu.com/wp-content/uploads/2021/05/Mangu-High-School-TENDER.jpg",
          }}
          style={styles.headerImage}
        >
          <View style={styles.topFlex}>
            <View>
              <Text style={styles.welcomeText}>The Mangu Alumni</Text>
              <Text style={styles.smWelcomeText}>Transforming Mangu</Text>
            </View>
            <View style={styles.profileView}>
              <View style={styles.profileImageEnclosure}>
                <Image
                  source={require("../assets/images/logo.jpg")}
                  style={styles.profileImage}
                />
              </View>
              {/* <View style={styles.profileNameViewDecorator}>
                <View style={styles.profileNameView}>
                  <Text style={styles.profileText}>Obongo Githuka</Text>
                </View>
              </View> */}
            </View>
          </View>
        </ImageBackground>

        <Text style={styles.topCardText}>Something about The Mangu High</Text>

        <View style={styles.cardView}>
          <View style={styles.mnCardView}>
            <Card
              iconColor={standardTxtColor}
              iconName="bookshelf"
              iconFamily="MaterialCommunityIcons"
              iname="Academics"
              image="https://www.kassfm.co.ke/home/wp-content/uploads/2019/03/Mang%C3%BA.jpg"
            />
            <Card
              iconColor={standardTxtColor}
              iconName="spade"
              iconFamily="MaterialCommunityIcons"
              iname="Activities"
              image="https://upload.wikimedia.org/wikipedia/en/5/5a/Mang%27u_students.jpeg"
            />
          </View>
          <View style={styles.mnCardView2}>
            <Card
              iconColor={standardTxtColor}
              iconName="change-history"
              iconFamily="MaterialIcons"
              iname="History"
              image="https://i2.wp.com/www.kahawatungu.com/wp-content/uploads/2019/03/D1yJOLtWsAAs0s1.jpg?fit=1152%2C892&ssl=1"
            />
            <Card
              iconColor={standardTxtColor}
              iconName="images"
              iconFamily="Entypo"
              iname="Gallery "
              image="https://pbs.twimg.com/media/Cb56zVsXIAEQQi5.jpg"
            />
          </View>
        </View>
        <StatusBar style="dark" />
      </View>
    </ImageBackground>
  );
};
