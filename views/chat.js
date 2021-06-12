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
import { Card } from "../components";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { styles } from "../styles";
export const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topChatView}>
        <Text style={styles.welcomeText}>Chats</Text>
      </View>
      <ScrollView>
        <View></View>
        <Card
          iconColor="red"
          iconFamily="entypo"
          iconName="facebook"
          uri="https://www.tenderyetu.com/wp-content/uploads/2021/05/Mangu-High-School-TENDER.jpg"
          name="kadi"
        />
      </ScrollView>
    </View>
  );
};
