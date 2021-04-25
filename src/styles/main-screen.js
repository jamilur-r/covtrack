import styled from "styled-components/native";
import { Colors } from "./Colors";
export const MainConTainer = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  background-color: ${Colors.black};

  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const UserView = styled.View`
  margin-top: 80px;
  width: 85%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UserName = styled.Text`
  font-size: 26px;
  font-family: "semi";
  color: #fff;
`;

export const LogoutBTN = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
`;

export const Info = styled.View`
  margin-top: 35px;
  width: 85%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Greatings = styled.Text`
  font-family: "med";
  font-size: 20px;
  color: #fff;
`;

export const TextSTC = styled.Text`
  font-family: ${(props) => (props.family ? props.family : "norm")};
  font-size: ${(props) => (props.size ? props.size : "15px")};
  color: #fff;
  margin-top: 10px;
`;
export const Wrapper = styled.View`
  margin: 20px auto;
  width: 85%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const TopInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
`;

export const RedBadge = styled.View`
  padding: 1px 3px;
  border-radius: 5px;
  background-color: #de4747;
  margin-left: 10px;
`;
export const DataView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100px;
`;

export const DataWrapper = styled.View`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

export const GetByCountry = styled.TouchableOpacity`
  width: 30px;
  height: 30px;

  position: absolute;
  top: 0;
  right: 20px;
`;
