import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { Colors } from "../styles/Colors";
import {
  AppLabel,
  ButtonText,
  DevName,
  Input,
  Logo,
  SpalashContainer,
  SplashButton,
} from "../styles/splash-screen";

const SigninScreen = ({ signIn }) => {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
  });
  const handleSubmit = () => {
    signIn(data);
  };
  return (
    <SpalashContainer>
      <Logo source={require("../assets/logo.png")} />
      <AppLabel>Cov Tracker</AppLabel>
      <Input
        style={{ marginTop: 30 }}
        placeholder="First Name"
        placeholderTextColor={Colors.gray}
        value={data.first_name}
        onChangeText={(text) => setData({ ...data, first_name: text })}
      />
      <Input
        style={{ marginTop: 15 }}
        placeholder="Last Name"
        placeholderTextColor={Colors.gray}
        value={data.last_name}
        onChangeText={(text) => setData({ ...data, last_name: text })}
      />
      <SplashButton width="250px" onPress={() => handleSubmit()}>
        <ButtonText>Start Tracking</ButtonText>
      </SplashButton>
      <DevName>
        jamilur-r
      </DevName>
    </SpalashContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  signIn: (data) =>
    dispatch({
      type: "SIGNIN",
      payload: data,
    }),
});
export default connect(null, mapDispatchToProps)(SigninScreen);
