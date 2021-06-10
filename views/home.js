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
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { styles } from "../styles";
export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <View style={styles.topFlex}>
          <View>
            <Text style={styles.welcomeText}>The Mangu Alumni</Text>
            <Text style={styles.smWelcomeText}>
              Changing the future of Mangu
            </Text>
          </View>
          <View>
            <Image
              style={styles.headerImage}
              source={{
                uri: "https://www.tenderyetu.com/wp-content/uploads/2021/05/Mangu-High-School-TENDER.jpg",
              }}
            />
          </View>
        </View>
      </View>

      <StatusBar style="dark" />
    </View>
  );
};
