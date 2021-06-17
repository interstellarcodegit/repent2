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
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { viewStyles } from "../styles/viewStyles";

import AppLoading from 'expo-app-loading';
import { Inter_900Black } from '@expo-google-fonts/inter';
import { Ubuntu_300Light } from '@expo-google-fonts/ubuntu';
import {useFonts, Cinzel_400Regular } from '@expo-google-fonts/cinzel';


const UpdateComponent=()=>{
  let [fontsLoaded] = useFonts({
    Inter_900Black, Ubuntu_300Light,Cinzel_400Regular
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return(
    <View style={styles.UpdateInfoView}>
      <View style={styles.chatTextInfo}>

        <View style={styles.chatIndividual}><Text style={styles.chatIndividualName}>Interstellar CG</Text></View>
        <View style={styles.chatTextView}></View>
      </View>
      <View style={styles.chatImageView}><Image source={require("../assets/images/mhsn.png")} style={styles.chatImage}/></View>
    </View>
  )
}
export const UpdatesScreen = () => {
  let [fontsLoaded] = useFonts({
    Inter_900Black, Ubuntu_300Light,Cinzel_400Regular
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
    <View style={styles.topChatView}>
      <Text style={styles.welcomeText}>Updates</Text>
    </View>
    <ScrollView>
  <UpdateComponent/>
      
    </ScrollView>
  </View>
  );
};
