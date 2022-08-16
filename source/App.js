import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import FlexBox from "./pages/FlexBox";
import PropsDinamis from "./pages/PropsDinamis";
import Position from "./pages/Position";
import SampleComponent from "./pages/SampleComponent";
import StylingComponent from "./pages/StylingComponent";
import StateDinamis from "./pages/StateDinamis";
import Communication from "./pages/Communication";
import BasicJavascript from "./pages/BasicJavascript";
import ReactNativeSVG from "./pages/ReactNativeSVG";
import CallAPI from "./pages/CallAPI";

// Functional Function (Arrow Function)
const App = () => {
  const [isShow, setIsShow] = useState(true);
  // lifecycle didmount (hooks)
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsShow(false);
  //   }, 6000);
  // });
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingComponent />
        {isShow && <FlexBox />}
        <Position />
        <PropsDinamis />
        <StateDinamis />
        <Communication />
        <BasicJavascript />
        <ReactNativeSVG /> */}
        <CallAPI />
      </ScrollView>
    </View>
  );
};

export default App;
