import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const Story = (props) => {
  return (
    <View style={{ alignItems: "center", marginRight: 20 }}>
      <Image
        source={{
          uri: props.image,
        }}
        style={{ width: 55, height: 55, borderRadius: 55 / 2 }}
      />
      <Text style={{ maxWidth: 50, textAlign: "center" }}>{props.title}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View style={{marginTop: 20, paddingHorizontal: 10}}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>
        Materi Component Dinamis dengan Props
      </Text>
      <ScrollView horizontal>
        <View style={{ flexDirection: "row" }}>
          <Story
            image="https://images.forestdigest.com/photo/reiza.syarini_1584947913.png"
            title="Story Profile 1"
          />
          <Story
            image="https://placeimg.com/100/100/animals"
            title="Story Profile 2"
          />
          <Story
            image="https://images.forestdigest.com/photo/reiza.syarini_1584947913.png"
            title="Story Profile 3"
          />
          <Story
            image="https://placeimg.com/100/100/animals"
            title="Story Profile 4"
          />
          <Story
            image="https://images.forestdigest.com/photo/reiza.syarini_1584947913.png"
            title="Story Profile 5"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PropsDinamis;

const styles = StyleSheet.create({});
