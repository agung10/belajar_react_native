import React from "react";
import { Text, View, Image, TextInput } from "react-native";

// Functional Function (Arrow Function)
const App = () => {
  return (
    <View>
      <Text>
        Hello <World />
      </Text>
      <Photo/>
      <Text>Agung</Text>
      <Text>Mubarok</Text>
      <TextInput style={{ borderWidth: 1 }} />
    </View>
  );
};

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

export default App;
