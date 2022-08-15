import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import macbook from "../../pages/assets/images/macbook.png";

const Product = (props) => {
  return (
    <View style={styles.wrapper}>
      <Image source={macbook} style={styles.imageProduct} />
      <Text style={styles.nameProduct}>Macbook Air 2021 M1 Mgn63ida</Text>
      <Text style={styles.priceProduct}>Rp 16.699.000</Text>
      <Text style={styles.shop}>Tokopedia</Text>
      <TouchableOpacity onPress={props.onButtonPress}>
        <View style={styles.buttonWrap}>
          <Text style={styles.buttonText}>Beli</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    backgroundColor: "#f2f2f2",
    width: 212,
    borderRadius: 8,
  },
  imageProduct: {
    width: 188,
    height: 107,
    borderRadius: 8,
  },
  nameProduct: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 16,
  },
  priceProduct: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 12,
    color: "#f2994a",
  },
  shop: {
    fontSize: 12,
    fontWeight: "300",
    marginTop: 12,
  },
  buttonWrap: {
    backgroundColor: "#6fcf97",
    paddingVertical: 6,
    borderRadius: 25,
    marginTop: 15,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
  },
});
