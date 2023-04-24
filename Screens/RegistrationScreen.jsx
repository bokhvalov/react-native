import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import backgroundImg from "../assets/background.jpg";
import AddButton from "../Components/AddButton";
import DeleteButton from "../Components/DeleteButton";
import * as ImagePicker from "expo-image-picker";

const RegistrationScreen = () => {
  const width = Dimensions.get("window").width;
  const [avatarUri, setAvatarUri] = useState(null);

  const handleAddAvatar = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setAvatarUri(result.assets[0].uri);
    }
  };

  return (
    <ImageBackground
      resizeMode="cover"
      source={backgroundImg}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={{ ...styles.avatar, left: (width - 120) / 2 }}>
          {avatarUri ? (
            <>
              <Image source={{ uri: avatarUri }} style={styles.avatarImage} />
              <DeleteButton onPress={() => setAvatarUri(null)} />
            </>
          ) : (
            <AddButton onPress={handleAddAvatar} />
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

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

    backgroundColor: "#FFFFFF",
    borderRadius: "25px 25px 0px 0px",
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
});

export default RegistrationScreen;
