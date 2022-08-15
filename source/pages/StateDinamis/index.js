import { Button, StyleSheet, Text, View } from "react-native";
import React, { Component, useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);

  return (
    <View>
      <Text style={styles.textNumber}>{number}</Text>
      <Button title="Tambah" onPress={() => setNumber(number + 1)} />
    </View>
  );
};

class CounterClass extends Component {
  state = {
    number: 0,
  };

  render() {
    return (
      <View>
        <Text style={styles.textNumber}>{this.state.number}</Text>
        <Button
          title="Tambah"
          onPress={() => this.setState({ number: this.state.number + 1 })}
        />
      </View>
    );
  }
}

const StateDinamis = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>
        Materi Component Dinamis Dengan State
      </Text>
      <Text style={{ marginTop: 20, fontSize: 15 }}>
        Menggunakan Functional Component (Hooks)
      </Text>
      <Counter />
      <Text style={{ marginTop: 20, fontSize: 15 }}>
        Menggunakan Class Component
      </Text>
      <CounterClass />
    </View>
  );
};

export default StateDinamis;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    padding: 20,
  },
  textTitle: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
  },
  textNumber: {
    textAlign: "center",
    fontSize: 15,
    marginBottom: 10,
  },
});
