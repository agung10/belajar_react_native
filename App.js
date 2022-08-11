import React from "react";
import { View, ScrollView } from "react-native";
import SampleComponent from "./SampleComponent";
import StylingComponent from "./StylingComponent";

// Functional Function (Arrow Function)
const App = () => {
  return (
    <View>
      <ScrollView>
        <SampleComponent />
        <StylingComponent />
      </ScrollView>
    </View>
  );
};

export default App;
