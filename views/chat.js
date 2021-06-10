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
import { styles } from "../styles";
export const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topChatView}>
        <Text style={styles.welcomeText}>Chats</Text>
      </View>
      <ScrollView>
        <View></View>
      </ScrollView>
    </View>
  );
};
