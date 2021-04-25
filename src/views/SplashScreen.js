import React from "react";
import { StatusBar } from "react-native";
import { Colors } from "../styles/Colors";
import {
  AppDescription,
  AppLabel,
  ButtonText,
  DevName,
  Logo,
  SpalashContainer,
  SplashButton,
} from "../styles/splash-screen";

const SplashScreen = ({ navigation }) => {
  return (
    <SpalashContainer>
      <StatusBar
        backgroundColor={Colors.black}
        animated={true}
        barStyle="light-content"
      />
      <Logo source={require("../assets/logo.png")} />
      <AppLabel>Cov Tracker</AppLabel>
      <AppDescription>New Approach to track covid spread</AppDescription>
      <SplashButton onPress={() => navigation.navigate("signin-screen")}>
        <ButtonText>Get Started</ButtonText>
      </SplashButton>
      <DevName>jamilur-r</DevName>
    </SpalashContainer>
  );
};

export default SplashScreen;
