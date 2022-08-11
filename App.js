import React from "react";
import { View, ScrollView } from "react-native";
import FlexBox from "./FlexBox";
import SampleComponent from "./SampleComponent";
import StylingComponent from "./StylingComponent";

// Functional Function (Arrow Function)
const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingComponent /> */}
        <FlexBox />
      </ScrollView>
    </View>
  );
};

export default App;
