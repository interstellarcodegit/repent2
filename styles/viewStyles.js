import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    useWindowDimensions,
  } from "react-native";
  const slidermContHeight = 38;
  const slidermContWidth = 38;
  const theme = {
    MaintextColor: "#59FF61",
    standardTxtColor :"#673ab7",
    mlStandardTxtColor :"#222",
    textColor: "aqua",
    textColorLight: "wheat",
    bgColor: "rgba(0,5,0,0.5)",
    mildTransparent: "rgba(0,0,0,0.9)",
    borderColor: "aqua",
    borderBottomColor: "#59FF61",
    lsborderColor: "beige",
    lstitleColor: "cyan",
    buttonBgColor: "#AA7100",
  };
  import {  Inter_900Black } from '@expo-google-fonts/inter';
  import { Ubuntu_300Light } from '@expo-google-fonts/ubuntu';
  import { useFonts,Cinzel_400Regular } from '@expo-google-fonts/cinzel';
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  // const setWidth = () => {
  //   dwidth = useWindowDimensions().width;
  // };
  //setWidth();

  export const viewStyles = StyleSheet.create({})