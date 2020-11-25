import { StatusBar } from "expo-status-bar";
import { render } from "react-dom";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import egg1 from "./assets/egg01.png";
import egg2 from "./assets/egg02.png";
import egg3 from "./assets/egg03.png";

export default function App() {
  const [count, setCount] = React.useState(100);
  const [message, setMessage] = React.useState("100回おせ");
  const [img, setImg] = React.useState(egg1);

  const numChange = () => {
    setCount(count - 1);
    if (count === 76) {
      setMessage("まだまだ");
    }

    if (count === 51) {
      setMessage("頑張れ");
      setImg(egg2);
    }
    if (count === 26) {
      setMessage("もうちょい");
    }
    if (count === 1) {
      setMessage("おめでとう！");
      setImg(egg3);
      

      setTimeout(function () {
        preventCrush();
      }, 5000);
    }
  };

  const preventCrush = () => {
    setCount(100);
    setImg(egg1);
    setMessage("もう一度100回おして")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.num}>{count}</Text>

      <TouchableOpacity onPress={numChange}>
        <Image style={styles.image} source={img} />
      </TouchableOpacity>

      <Text style={styles.mess}> {message}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },

  num: {
    fontSize: 30,
    backgroundColor: "black",
    color: "white",
    width: "45%",
    textAlign: "center",
  },

  mess: {
    fontSize: 40,
    color : "blue",
  },
});

