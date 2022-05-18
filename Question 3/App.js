import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TouchableNativeFeedback,
  Image,
  ImageBackground,
  SafeAreaView,
  Platform,
} from "react-native";
import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";

export default function App() {
  const [showMore, setShowMore] = useState(false);
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "white",
          width: Dimensions.get("window").width - 50,
          shadowColor: "black",
          shadowOpacity: 0.2,
          shadowOffset: { height: 5, width: 5 },
          shadowRadius: 10,
          elevation: 10,
        }}
      >
        <ImageBackground
          blurRadius={20}
          resizeMode="cover"
          source={{
            uri: "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHJlZGRpc2glMjBwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500",
          }}
          style={{
            height: 250,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "gray",
          }}
        >
          <View
            style={{
              height: 150,
              width: 150,
              backgroundColor: "red",
              borderRadius: 100,
              borderWidth: 3,
              borderColor: "white",
              overflow: "hidden",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              resizeMode="cover"
              source={{
                uri: "https://images.unsplash.com/photo-1517630800677-932d836ab680?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJlZGRpc2glMjBwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
              }}
              style={{
                height: 180,
                width: 180,
              }}
            />
          </View>
        </ImageBackground>
        <View
          style={{
            height: 70,
            width: "100%",
            backgroundColor: "transparent",
            position: "absolute",
            top: 215,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: 50,
              width: 50,
              borderRadius: 50,
              backgroundColor: "red",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MaterialIcons name="done" size={25} color="white" />
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            paddingTop: 35,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 24,
              fontWeight: "700",
              marginBottom: 10,
            }}
          >
            Anna Cobbold
          </Text>
          <TouchableOpacity
            onPress={() => {
              setShowMore(!showMore);
            }}
            activeOpacity={0.7}
          >
            <Text
              numberOfLines={showMore ? 0 : 3}
              style={{ textAlign: "center", fontSize: 20, lineHeight: 30 }}
            >
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 70,
            width: "100%",
            backgroundColor: "transparent",
            overflow: "scroll",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            paddingHorizontal: 40,
          }}
        >
          <SocialMediaBtn
            icon={<FontAwesome name="facebook" size={20} color="red" />}
          />
          <SocialMediaBtn
            icon={<FontAwesome name="twitter" size={20} color="red" />}
          />
          <SocialMediaBtn
            icon={<AntDesign name="googleplus" size={20} color="red" />}
          />
          <SocialMediaBtn
            icon={<FontAwesome name="dribbble" size={20} color="red" />}
          />
          <SocialMediaBtn
            icon={<AntDesign name="behance" size={20} color="red" />}
          />
        </View>
      </View>
    </View>
  );
}

const SocialMediaBtn = ({ icon }) => {
  // const [rippleColor, setRippleColor] = useState(randomHexColor());
  return Platform.OS === "android" ? (
    <TouchableNativeFeedback
      onPress={() => {
        // setRippleColor(randomHexColor());
      }}
      useForeground={false}
      background={TouchableNativeFeedback.Ripple("red", true)}
    >
      <View
        style={{
          borderRadius: 40,
          height: 35,
          width: 35,
          borderWidth: 1,
          borderColor: "red",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {icon}
      </View>
    </TouchableNativeFeedback>
  ) : (
    <TouchableOpacity>
      <View
        style={{
          borderRadius: 40,
          height: 35,
          width: 35,
          borderWidth: 1,
          borderColor: "red",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {icon}
      </View>
    </TouchableOpacity>
  );
};

// const randomHexColor = () => {
//   return `#000000`.replace(/0/g, () => {
//     return (~~(Math.random() * 16)).toString(16);
//   });
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
    paddingTop: 40,
  },
});

// <View
// style={{
//   backgroundColor: "red",
//   // minHeight: Dimensions.get("window").height / 2 + 100,
//   width: "80%",
// }}
// >
// <View
//   style={{
//     backgroundColor: "gray",
//     // height: "55%",
//     flex: 1,
//     width: "100%",
//     justifyContent: "center",
//     alignItems: "center",
//   }}
// >
//   <View
//     style={{
//       height: 200,
//       width: 200,
//       backgroundColor: "red",
//       borderRadius: 100,
//     }}
//   ></View>
// </View>
// <View
//   style={{
//     flex: 1,
//     backgroundColor: "white",
//     // height: "45%",
//     width: "100%",
//     paddingHorizontal: 20,
//     paddingTop: 30,
//   }}
// >
//   <View
//     style={{
//       flex: 7,
//     }}
//   >
//     <Text
//       style={{
//         fontSize: 20,
//         color: "black",
//         fontWeight: "bold",
//         textAlign: "center",
//         lineHeight: 40,
//       }}
//     >
//       Augustine Cobbold
//     </Text>
//     <Text
//       style={{
//         color: "black",
//         fontSize: 16,
//         textAlign: "center",
//         lineHeight: 24,
//       }}
//     >
//       Lorem ipsum, or lipsum as it is sometimes known, is dummy text
//       used in laying out print, graphic or web designs. The passage is
//       attributed to an unknown
//     </Text>
//   </View>
//   <View
//     style={{
//       // height: 70,
//       flex: 3,
//       width: "100%",
//       backgroundColor: "red",
//       justifyContent: "center",
//       alignItems: "center",
//     }}
//   ></View>
// </View>
// </View>
