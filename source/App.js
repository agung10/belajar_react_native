import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import FlexBox from "./pages/FlexBox";
// import Position from "./pages/Position";
// import SampleComponent from "./pages/SampleComponent";
// import StylingComponent from "./pages/StylingComponent";

// Functional Function (Arrow Function)
const App = () => {
  const [isShow, setIsShow] = useState(true);
  // lifecycle didmount (hooks)
  useEffect(() => {
    setTimeout(() => {
      setIsShow(false);
    }, 6000);
  });
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent /> */}
        {/* <StylingComponent /> */}
        {isShow && <FlexBox />}
        {/* <Position /> */}
      </ScrollView>
    </View>
  );
};

export default App;
