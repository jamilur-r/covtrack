import styled from "styled-components/native";
import { Colors } from "./Colors";

export const SpalashContainer = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  background-color: ${Colors.black};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 100px;
  height: 100px;
`;

export const AppLabel = styled.Text`
  margin-top: 30px;
  font-size: 32px;
  font-family: "bold";
  color: #fff;
`;

export const AppDescription = styled.Text`
  margin-top: 5px;
  font-size: 15px;
  font-family: "med";
  color: #fff;
`;

export const SplashButton = styled.TouchableOpacity`
  margin-top: 20px;
  width: ${(props) => (props.width ? props.width : "125px")};
  height: 44px;
  background-color: ${Colors.blue};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-family: "med";
  color: #fff;
`;

export const Input = styled.TextInput`
  width: 250px;
  padding: 15px;
  background-color: ${Colors.lightBlack};
  color: ${Colors.white};
  font-family: "med";
  font-size: 17px;
`;

export const DevName = styled.Text`
  position: absolute;
  bottom: 30px;
  text-align: center;
  font-size: 18px;
  font-family: "med";
  color: ${Colors.gray};
`;
