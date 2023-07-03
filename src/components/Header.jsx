import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import normalize from "react-native-normalize";

const image2 = {
  uri: "https://dx35vtwkllhj9.cloudfront.net/trafalgarreleasing/the-bodyguard-30th-anniversary/images/regions/intl/onesheet.jpg",
};

const Header = () => {
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={image2}
          resizeMode="cover"
          style={styles.image2}
        ></ImageBackground>
      </View>

      <Text style={styles.text}>Fans de Cine</Text>
      <Text style={styles.textSubTitle}>Comentamos sobre pelis</Text>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 0.5,

    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "gray",
    
  },

  image2: {
    // width: Dimensions.get("window").width,
    // height: Dimensions.get("window").height,
    height: 150,
    width: 200,
    marginTop: 40,
     
  },
  text: {
    color: "#F4A55F",
    fontSize: 42,
    lineHeight: 40,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#FEFFC0",
    paddingTop: 10,
  },
  textSubTitle: {
    fontSize: 25,
    lineHeight: 30,
    color: "black",
    fontStyle: "italic",
    textAlign: "center",
    backgroundColor: "#FEFFC0",
    width: normalize(380),
    paddingBottom: 20,
  },
});
