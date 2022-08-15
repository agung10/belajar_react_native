import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BasicJavascript = () => {
  // === VARIABEL ===
  // Primitive
  const name = "Agung Mubarok"; //string
  let age = 24; //number
  const isMan = true; //boolean

  // Complex
  const pet = {
    name: "Miaw",
    species: "Kucing",
    age: 2,
    isLocal: true,
    color: "Yellow",
    parent: {
      male: "Kaisar",
      female: "Quenn",
    },
  }; //object

  const peopleNames = ["Agung", "Romadhan", "Abid"]; //object - array
  typeof peopleNames; //object

  // === FUNCTION ===
  const sayHello = (nama, umur) => {
    return console.log(`Hallo ${nama}, usia anda ${umur} Tahun`);
  }; //function
  sayHello("Agung", 21);

  // === CONDITION ===
  //   if (pet.name === "Miaw") {
  //     console.log("Hallo Miaw");
  //   } else {
  //     console.log("Hewan siapa nih?");
  //   }

  const sayHelloToAnimals = (animal) => {
    // let sayResult = "";

    // if (animal.name === "Miaw") {
    //   sayResult = "Hallo Miaw, Apa Kabar?";
    // } else {
    //   sayResult = "Ini Hewan Siapa?";
    // }
    // return sayResult;
    return animal.name === "Miaw"
      ? "Hallo Miaw, Apa Kabar?"
      : "Ini Hewan Siapa?";
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>
        Materi Basic Javascript di React Native
      </Text>
      <Text>{sayHelloToAnimals(pet)}</Text>

      {/* === LOOPING === */}
      {peopleNames.map((people) => (
        <Text>{people}</Text>
      ))}
    </View>
  );
};

export default BasicJavascript;

const styles = StyleSheet.create({
  container: { padding: 20 },
  textTitle: { textAlign: "center" },
});
