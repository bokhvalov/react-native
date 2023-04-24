import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const DeleteButton = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.ellipse}>
          <View style={{ ...styles.line, transform: [{ rotate: "-45deg" }] }} />
          <View
            style={{ ...styles.line, transform: [{ rotate: "-135deg" }] }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 14,
    right: -12,
  },
  ellipse: {
    borderRadius: 25,
    width: 25,
    height: 25,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  line: {
    position: "absolute",
    width: 1,
    height: 13,
    left: 10.5,
    top: 5,
    borderColor: "#E8E8E8",
    borderWidth: 1,
  },
});

export default DeleteButton;
