import React, { Component, useEffect, useState } from "react";
import { Text, View, Image } from "react-native";

// class FlexBox extends Component {
//   constructor(props) {
//     super(props);
//     console.log("Constructor (pertama)");

//     this.state = {
//       address: "Jakarta Selatan",
//     };
//   }

//   componentDidMount() {
//     console.log("Component Did Mount (ketiga)");
//     setTimeout(() => {
//       this.setState({
//         address: "Jakarta Timur",
//       });
//     }, 4000);
//   }

//   componentDidUpdate() {
//     console.log("Component Did Update (keempat)");
//   }

//   componentWillUnmount() {
//     console.log("Component Will Unmount (Kelima)");
//   }

//   render() {
//     console.log("Render (kedua)");
//     return (
//       <View>
//         <View
//           style={{
//             marginTop: 40,
//             flexDirection: "row",
//             backgroundColor: "#c8d6e5",
//             alignItems: "center",
//             justifyContent: "space-between",
//           }}
//         >
//           <View style={{ backgroundColor: "#ee5253", width: 50, height: 50 }} />
//           <View style={{ backgroundColor: "#feca57", width: 50, height: 50 }} />
//           <View style={{ backgroundColor: "#1dd1a1", width: 50, height: 50 }} />
//           <View style={{ backgroundColor: "#5f27cd", width: 50, height: 50 }} />
//         </View>

//         <View style={{ marginTop: 10, paddingHorizontal: 10 }}>
//           <Text style={{ fontSize: 20, fontWeight: "bold" }}>
//             Implementasi FlexBox
//           </Text>
//           <View
//             style={{
//               marginTop: 5,
//               flexDirection: "row",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text>Menu 1</Text>
//             <Text>Menu 2</Text>
//             <Text>Menu 3</Text>
//             <Text>Menu 4</Text>
//             <Text>Menu 5</Text>
//           </View>
//           <View
//             style={{
//               flexDirection: "row",
//               marginTop: 20,
//               alignItems: "center",
//             }}
//           >
//             <Image
//               source={{
//                 uri: "https://images.forestdigest.com/photo/reiza.syarini_1584947913.png",
//               }}
//               style={{
//                 width: 75,
//                 height: 75,
//                 borderRadius: 50,
//                 marginRight: 14,
//               }}
//             />
//             <View>
//               <Text style={{ fontSize: 20, fontWeight: "bold" }}>
//                 Agung Mubarok
//               </Text>
//               <Text>{this.state.address}</Text>
//             </View>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

const FlexBox = () => {
  const [address, setAddress] = useState("Jakarta Selatan");
  // useEffect(() => {
  //   console.log("Did Mount");
  // }, []);
  
  // useEffect(() => {
  //   console.log("Did Update");
  //   setTimeout(() => {
  //       setAddress("Jakarta Barat");
  //   }, 2000);
  // }, [address]);

  useEffect(() => {
    console.log("Did Mount");

    setTimeout(() => {
        setAddress("Jakarta Barat");
    }, 2000);
    return () => {
      console.log("Did Update");
    }
  }, [address]);

  return (
    <View>
      <View
        style={{
          marginTop: 40,
          flexDirection: "row",
          backgroundColor: "#c8d6e5",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ backgroundColor: "#ee5253", width: 50, height: 50 }} />
        <View style={{ backgroundColor: "#feca57", width: 50, height: 50 }} />
        <View style={{ backgroundColor: "#1dd1a1", width: 50, height: 50 }} />
        <View style={{ backgroundColor: "#5f27cd", width: 50, height: 50 }} />
      </View>

      <View style={{ marginTop: 10, paddingHorizontal: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Implementasi FlexBox
        </Text>
        <View
          style={{
            marginTop: 5,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text>Menu 1</Text>
          <Text>Menu 2</Text>
          <Text>Menu 3</Text>
          <Text>Menu 4</Text>
          <Text>Menu 5</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            alignItems: "center",
          }}
        >
          <Image
            source={{
              uri: "https://images.forestdigest.com/photo/reiza.syarini_1584947913.png",
            }}
            style={{
              width: 75,
              height: 75,
              borderRadius: 50,
              marginRight: 14,
            }}
          />
          <View>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Agung Mubarok
            </Text>
            <Text>{address}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FlexBox;
