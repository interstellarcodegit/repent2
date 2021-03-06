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
function ldFont(){
  let [fontsLoaded] = useFonts({
    Cinzel_400Regular, Inter_900Black, Ubuntu_300Light,
  });
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: windowHeight / 17,
    backgroundColor: theme.mildTransparent,
  },
  topChatView: {
    height: windowHeight / 10,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  topView: {
    height: windowHeight / 5,
    backgroundColor: "black",
  },
  welcomeText: {
    color: theme.textColor,
    fontFamily:'Cinzel_400Regular',
    fontSize: 25,
  },
  smWelcomeText: {
    color: theme.standardTxtColor,
    fontFamily:'Ubuntu_300Light',
    fontSize: 20,
  },
  topFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: theme.mildTransparent,
    height: windowHeight / 5,
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    width: windowWidth,
    height: windowHeight,
  },
  Card: {
    flexDirection: "column",
    height: windowHeight / 3.5,
    width: windowWidth / 2.5,
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  cardImage: {
    height: windowHeight / 4.3,
    width: windowWidth / 2.8,
    borderRadius: 7,
  },
  cardText: {
    color: "aqua",
    fontSize: 17,
    fontFamily:'Ubuntu_300Light',
  },
  cardView: {
    flexDirection: "column",

    // marginTop: windowHeight / 20,
  },
  topCardText: {
    color: theme.standardTxtColor,
    zIndex: 1000,
    fontSize: 22,
    fontFamily:'Ubuntu_300Light',
  },
  mnCardView: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: windowHeight / 30,
  },
  mnCardView2: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  headerImage: {
    resizeMode: "cover",

    height: windowHeight / 5,
    // marginTop: windowHeight / 60,
    // paddingRight: 5,
    // paddingTop: 5,
  },
  profileNameViewDecorator: {
    backgroundColor:theme.standardTxtColor,
    borderRadius: 5,
  },
  profileView: {
    backgroundColor: "black",
  },
  profileImage: {
    height:70,
    width: 70,
    resizeMode: "cover",
    borderRadius:35,
  },
  profileText: {
    color: "white",
  },
  profileNameView: {
    backgroundColor: "black",
    // margin:5,
    padding: 5,
    borderRadius: 10,
  },
  profileImageEnclosure: {
    height: 72,
    width: 72,
    borderRadius: 36,
    backgroundColor: theme.standardTxtColor,
  },
  textView: {
    //flex: 0.1,
    flexDirection: "row",
    borderStyle: "solid",
    borderBottomWidth: 1,
    fontFamily: "sans-serif",
    borderBottomColor: theme.borderBottomColor,
    justifyContent: "space-between",
    backgroundColor: theme.bgColor,
  },
  flexRowView: {
    flexDirection: "row",
    // justifyContent: "space-between",
  },
  showView: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: theme.borderColor,
    borderRadius: 13,
    height: 120,
    marginTop: 10,
    //backgroundColor: "#030026",
  },
  showTitle: {
    color: theme.MaintextColor,
    padding: 5,
    borderBottomColor: theme.borderBottomColor,
    borderBottomWidth: 1,
  },
  showTxt: {
    color: theme.textColor,
  },
  mainTxt: {
    color: theme.MaintextColor,

    marginTop: 20,
    marginRight: 50,

    fontSize: 25,
    //borderStyle: "solid",
    // borderBottomWidth: 1,
    fontFamily: "sans-serif",
    //borderBottomColor: theme.borderBottomColor,
  },
  Fltext: {
    marginTop: 10,
    color: "aqua",

    marginBottom: 20,
    fontSize: 20,
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: theme.borderBottomColor,
  },
  Slidermn: {
    padding: 30,
  },
  chatInfoView:{
    zIndex:1000,
    backgroundColor:'rgba(0,0,0,0)',
    borderBottomColor:'rgba(0, 238, 255, 0.322)',
    borderBottomWidth:1,
    height:windowHeight/13,
    marginBottom:10,
    marginTop:3,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  chatIndividualName:{
    color:'white',
    fontSize:17,
    fontFamily:'Ubuntu_300Light'
  },
  chatImageView:{

  },
  chatImage:{
    height:50,
    width:50,
    borderRadius:25,

  },

  nativeInput: {
    height: windowHeight / 15,
    borderColor: "aqua",
    borderWidth: 1,
    color: "white",
    borderRadius: 3,
    marginLeft: windowWidth / 10,
    backgroundColor: "transparent",
    marginTop: windowHeight / 10,
    width: windowWidth - windowWidth / 5,
  },

  sliderCont: {
    marginTop: 2,
    paddingBottom: 1,
    flexDirection: "row",
    height: slidermContHeight + 2,
    backgroundColor: theme.mildTransparent,
    alignContent: "center",
    overflow: "scroll",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowViewb2n: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  lsmainView: {
    borderBottomColor: theme.lsborderColor,
    borderWidth: 1,
  },
  submainTxt: {
    color: theme.MaintextColor,

    fontSize: 20,
    marginBottom: 5,
    //borderStyle: "solid",
    // borderBottomWidth: 1,
    fontFamily: "sans-serif",
    //borderBottomColor: theme.borderBottomColor,
  },
  titleView: {
    flexDirection: "row",
    borderBottomColor: "white",
    borderWidth: 1,
  },
  lsviewTitle: {
    color: theme.lstitleColor,
    marginLeft: 5,
    fontSize: 15,
  },
  rowViewImage: {
    height: 50,
    width: 50,
  },
  slidermCont: {
    height: slidermContHeight / 1.4,
    // width: slidermContWidth + 3,
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.1)",

    borderRadius: 4,
    //borderStyle: "solid",
    // borderColor: theme.borderColor,
    // borderWidth: 1,
  },
  enrollButtonCont: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    color: "white",
    backgroundColor: theme.buttonBgColor,
    borderRadius: 3,
    width: windowWidth / 6,
  },
  enrollButton: {
    color: "white",
  },
  sliderText: {
    color: theme.MaintextColor,
    alignContent: "center",
    alignItems: "center",
  },
  submitButtonCont: {
    height: windowHeight / 20,
    width: windowWidth / 3,
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    marginLeft: (windowWidth - windowWidth / 5) / 3.5 + windowWidth / 10,
    marginTop: windowWidth / 20 / 2,
  },
  submitButton: {
    color: "white",
    paddingVertical: windowWidth / 20 / 3,
  },
});
//sconsole.log(dwidth);
