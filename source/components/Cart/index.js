import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import cart from "../../pages/assets/images/cart.png";

const Cart = (props) => {
  return (
    <View>
      <View style={styles.cartWrap}>
        <Image source={cart} style={styles.iconCart} />
        <Text style={styles.textNotif}>{props.qty}</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanja</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
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
    textAlign: 'center'
  },
});
