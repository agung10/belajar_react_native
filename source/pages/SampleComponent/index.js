import React, { Component } from "react";
import { View, Text, TextInput, Image } from "react-native";

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

export default SampleComponent;
