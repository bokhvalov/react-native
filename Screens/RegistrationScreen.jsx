import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import backgroundImg from "../assets/background.jpg";
import AddButton from "../Components/AddButton";
import DeleteButton from "../Components/DeleteButton";
import * as ImagePicker from "expo-image-picker";
import { SubmitButton } from "../Components/SubmitButton";

const initialState = {
  login: "",
  email: "",
  password: "",
  avatarUri: "",
};

export default function RegistrationScreen() {
  const [state, setState] = useState(initialState);
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);
  const [isKeyboardOpened, setIsKeyboardOpened] = useState(false);
  const [isLoginInputFocused, setIsLoginInputFocused] = useState(false);
  const [isEmailInputFocused, setIsEmailInputFocused] = useState(false);
  const [isPasswordInputFocused, setIsPasswordInputFocused] = useState(false);

  const screenWidth = Dimensions.get("window").width;

  const handleAddAvatar = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setState((prevState) => ({
        ...prevState,
        avatarUri: result.assets[0].uri,
      }));
    }
  };

  const toggleSecureTextEntry = () => {
    setIsSecureTextEntry(!isSecureTextEntry);
  };

  const inputHandler = (key, value) => {
    setState((prevState) => ({ ...prevState, [key]: value }));
  };

  const goToSignIn = () => {};

  const hideKeyboard = () => {
    setIsKeyboardOpened(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <ImageBackground
        resizeMode="cover"
        source={backgroundImg}
        style={styles.background}
      >
        <TouchableWithoutFeedback onPress={hideKeyboard}>
          <View
            style={{
              ...styles.container,
              height: Platform.OS === "ios" && isKeyboardOpened ? 819 : 529,
            }}
          >
            <View style={{ ...styles.avatar, left: (screenWidth - 120) / 2 }}>
              {state.avatarUri ? (
                <>
                  <Image
                    source={{ uri: state.avatarUri }}
                    style={styles.avatarImage}
                  />
                  <DeleteButton
                    onPress={() =>
                      setState((prevState) => ({
                        ...prevState,
                        avatarUri: "",
                      }))
                    }
                  />
                </>
              ) : (
                <AddButton onPress={handleAddAvatar} />
              )}
            </View>
            <Text style={styles.screenTitle}>Registration</Text>
            <TextInput
              placeholder="Login"
              value={state.login}
              onChangeText={(value) => {
                inputHandler("login", value);
              }}
              onFocus={() => {
                setIsKeyboardOpened(true);
                setIsLoginInputFocused(true);
              }}
              onBlur={() => setIsLoginInputFocused(false)}
              style={{
                ...styles.input,
                width: screenWidth - 32,
                backgroundColor: isLoginInputFocused ? "#fff" : "#F6F6F6",
              }}
            />
            <TextInput
              placeholder="Email"
              value={state.email}
              onFocus={() => {
                setIsKeyboardOpened(true);
                setIsEmailInputFocused(true);
              }}
              onBlur={() => setIsEmailInputFocused(false)}
              onChangeText={(value) => {
                inputHandler("email", value);
              }}
              style={{
                ...styles.input,
                width: screenWidth - 32,
                backgroundColor: isEmailInputFocused ? "#fff" : "#F6F6F6",
              }}
            />
            <View>
              <TextInput
                placeholder="Password"
                secureTextEntry={isSecureTextEntry}
                value={state.password}
                onFocus={() => {
                  setIsKeyboardOpened(true);
                  setIsPasswordInputFocused(true);
                }}
                onBlur={() => setIsPasswordInputFocused(false)}
                onChangeText={(value) => {
                  inputHandler("password", value);
                }}
                style={{
                  ...styles.input,
                  width: screenWidth - 32,
                  marginBottom: 43,
                  backgroundColor: isPasswordInputFocused ? "#fff" : "#F6F6F6",
                }}
              />
              <TouchableOpacity
                onPress={toggleSecureTextEntry}
                style={{
                  position: "absolute",
                  right: 16,
                  top: Platform.OS == "ios" ? 16 : 20,
                }}
              >
                <Text
                  style={{
                    ...styles.subBtnText,
                    color: "#1B4371",
                  }}
                >
                  Show
                </Text>
              </TouchableOpacity>
            </View>
            <SubmitButton title="Register" onPress={() => console.log(state)} />
            <TouchableOpacity onPress={goToSignIn}>
              <Text style={{ ...styles.subBtnText, padding: 16 }}>
                Already have an account? Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: "relative",
  },
  container: {
    position: "absolute",
    width: "100%",
    height: 549,
    bottom: 0,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  avatar: {
    position: "absolute",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    top: -60,
  },
  avatarImage: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },
  screenTitle: {
    marginTop: 92,
    marginBottom: 33,
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    color: "#212121",
  },
  input: {
    marginBottom: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  subBtnText: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
});
