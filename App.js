import React, { Component } from "react";
import { Text, View, Image, TextInput, StyleSheet } from "react-native";
import macbook from "./assets/macbook.png";

// Functional Function (Arrow Function)
const App = () => {
  return <StylingComponent />;
};

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
        <View style={{backgroundColor: '#6fcf97', paddingVertical: 6, borderRadius: 25, marginTop: 15}}>
          <Text style={{fontSize: 14, fontWeight: '600', color: 'white', textAlign: 'center'}}>Beli</Text>
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

// Dari pembelajaran ke 8 dan 9
const SampleComponent = () => {
  return (
    <View>
      <Text>
        Hello <World />
      </Text>
      <Photo />
      <Text>Agung</Text>
      <Text>Mubarok</Text>
      <TextInput style={{ borderWidth: 1 }} />

      {/* Class Component */}
      <ExampleClass />
      <AnimalImage />
    </View>
  );
};
// End Sample Component

const World = () => {
  return <Text>World</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{ uri: "https://placeimg.com/100/100/tech" }}
      style={{ width: 100, height: 100 }}
    />
  );
};

// Class Component
class ExampleClass extends Component {
  render() {
    return <Text>Ini Component Dari Class</Text>;
  }
}

class AnimalImage extends Component {
  render() {
    return (
      <View>
        <Image
          source={{ uri: "https://placeimg.com/100/100/animals" }}
          style={{ width: 100, height: 100 }}
        />
        <Text>Ini Gambar Kucing</Text>
      </View>
    );
  }
}

export default App;
