import { View, Text, StyleSheet, Button, Image } from "react-native";
import React, { useState } from "react";
import Axios from "axios";

const CallAPIAxios = () => {
  const [dataUser, setDataUser] = useState({
    avatar: "",
    email: "",
    first_name: "",
    last_name: "",
  });

  const [dataPost, setDataPost] = useState({
    name: "",
    job: "",
  });

  const getData = () => {
    Axios.get("https://reqres.in/api/users/5")
      .then((result) => {
        setDataUser(result.data.data);
      })
      .catch((err) => console.log("err: ", err));
  };

  const postData = () => {
    const dataForAPI = {
      name: "morpheus",
      job: "leader",
    };

    Axios.post("https://reqres.in/api/users", dataForAPI)
      .then((result) => {
        setDataPost(result.data);
      })
      .catch((err) => console.log("err: ", err));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Call API dengan Axios</Text>
      <Button title="Get Data" onPress={getData} />
      <Text>Response Get Data</Text>
      {dataUser.avatar.length > 0 && (
        <Image source={{ uri: dataUser.avatar }} style={styles.avatar} />
      )}
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>{`${dataUser.email}`}</Text>

      <View style={styles.line} />

      <Button title="Post Data" onPress={postData} />
      <Text>Response Post Data</Text>
      <Text>{dataPost.name}</Text>
      <Text>{dataPost.job}</Text>
    </View>
  );
};

export default CallAPIAxios;

const styles = StyleSheet.create({
  container: { padding: 20 },
  textTitle: { textAlign: "center" },
  line: { height: 2, backgroundColor: "black", marginVertical: 20 },
  avatar: { width: 100, height: 100, borderRadius: 100 / 2 },
});
