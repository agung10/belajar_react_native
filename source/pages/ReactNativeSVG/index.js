import { StyleSheet, Text, View } from "react-native";
import React from "react";
import IllustrationImage from "../assets/images/marshmello.svg";

const ReactNativeSVG = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Menggunakan File SVG di React Native</Text>
      <IllustrationImage width={244} height={125} />
    </View>
  );
};

export default ReactNativeSVG;

const styles = StyleSheet.create({
  container: { padding: 20 },
  textTitle: { textAlign: "center" },
});
