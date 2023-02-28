import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import normalize from "react-native-normalize";

const List = (

    selectedMovies,



) => {
  return (
    <View style={styles.container}>
    <Image
      source={selectedMovies}
      resizeMode="cover"
      style={styles.image}
    ></Image>
  </View>
  )
}

export default List

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
    
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        backgroundColor: "#FEFFC0",
      },
    
      image2: {
        // width: Dimensions.get("window").width,
        // height: Dimensions.get("window").height,
        height: 150,
        width: 200,
        marginTop: 40,
      },
      image: {
        height: normalize(200),
        width: normalize(400),
      },
})