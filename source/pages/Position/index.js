import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import cart from "../assets/images/cart.png";

const Position = () => {
  return (
    <View style={{marginTop: 20, paddingHorizontal: 10}}>
      <Text style={styles.title}>Materi Position</Text>
      <View style={styles.wrapper}>
        <View style={styles.cartWrap}>
          <Image source={cart} style={styles.iconCart} />
          <Text style={styles.textNotif}>10</Text>
        </View>
        <Text style={styles.text}>Keranjang Belanja</Text>
      </View>
    </View>
  );
};

export default Position;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  wrapper: {
    padding: 20,
    alignItems: "center",
  },
  cartWrap: {
    borderWidth: 2,
    borderColor: "#439bd1",
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  iconCart: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 12,
    color: "#777777",
    fontWeight: "700",
    marginTop: 8,
  },
  textNotif: {
    fontSize: 12,
    color: "white",
    backgroundColor: "#6fcf97",
    padding: 4,
    borderRadius: 25,
    width: 24,
    height: 24,
    position: "absolute",
    top: 0,
    right: 0,
  },
});
