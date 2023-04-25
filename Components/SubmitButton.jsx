import { Dimensions, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

export const SubmitButton = ({ title, disabled, onPress }) => {
  const screenWidth = Dimensions.get("window").width;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.button,
        width: screenWidth - 32,
        backgroundColor: disabled ? "#F6F6F6" : "#FF6C00",
      }}
    >
      <Text style={{ ...styles.text, color: disabled ? "#BDBDBD" : "#fff" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    display: "flex",
    alignItems: "center",
  },
  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    marginVertical: 16,
    marginHorizontal: 32,
  },
});
