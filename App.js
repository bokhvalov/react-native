import React, { useState } from "react";
import RegistrationScreen from "./Screens/RegistrationScreen";
import { useFonts } from "expo-font";
import LoginScreen from "./Screens/LoginScreen";

export default function App() {
  const [isFontsLoaded] = useFonts({
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!isFontsLoaded) {
    return;
  }

  return (
    // <LoginScreen />
    <RegistrationScreen />
  );
}
