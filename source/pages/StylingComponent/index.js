import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import macbook from "../assets/images/macbook.png";

const StylingComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#0abde3",
          borderWidth: 2,
          borderColor: "#5f27cd",
          marginTop: 20,
          marginLeft: 20,
        }}
      />

      <Text style={styles.text}>Example Design</Text>
      <View
        style={{
          padding: 12,
          backgroundColor: "#f2f2f2",
          width: 212,
          borderRadius: 8,
        }}
      >
        <Image
          source={macbook}
          style={{ width: 188, height: 107, borderRadius: 8 }}
        />
        <Text style={{ fontSize: 14, fontWeight: "bold", marginTop: 16 }}>
          Macbook Air 2021 M1 Mgn63ida
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "bold",
            marginTop: 12,
            color: "#f2994a",
          }}
        >
          Rp 16.699.000
        </Text>
        <Text style={{ fontSize: 12, fontWeight: "300", marginTop: 12 }}>
          Tokopedia
        </Text>
        <View
          style={{
            backgroundColor: "#6fcf97",
            paddingVertical: 6,
            borderRadius: 25,
            marginTop: 15,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
              color: "white",
              textAlign: "center",
            }}
          >
            Beli
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#5f27cd",
    marginTop: 40,
    marginLeft: 20,
  },
});

export default StylingComponent;
