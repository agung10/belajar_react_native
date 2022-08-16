import { View, Text, StyleSheet, Button, Image } from "react-native";
import React, { useEffect, useState } from "react";

const CallAPI = () => {
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

  useEffect(() => {
    // // Call API Method GET
    // fetch("https://reqres.in/api/users/2")
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
    // // Call API Method POST
    // const dataForAPI = {
    //   name: "morpheus",
    //   job: "leader",
    // };
    // console.log("data object: ", dataForAPI);
    // console.log("data stringify: ", JSON.stringify(dataForAPI));
    // fetch("https://reqres.in/api/users", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(dataForAPI),
    // })
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log("post response: ", json);
    //   });
  }, []);

  const getData = () => {
    fetch("https://reqres.in/api/users/2")
      .then((response) => response.json())
      .then((json) => {
        setDataUser(json.data);
      });
  };

  const postData = () => {
    const dataForAPI = {
      name: "morpheus",
      job: "leader",
    };

    fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataForAPI),
    })
      .then((response) => response.json())
      .then((json) => {
        setDataPost(json);
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Call API dengan VanillaJS</Text>
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

export default CallAPI;

const styles = StyleSheet.create({
  container: { padding: 20 },
  textTitle: { textAlign: "center" },
  line: { height: 2, backgroundColor: "black", marginVertical: 20 },
  avatar: { width: 100, height: 100, borderRadius: 100 / 2 },
});
