import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Greatings,
  Info,
  LogoutBTN,
  MainConTainer,
  TextSTC,
  UserName,
  UserView,
} from "../styles/main-screen";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "../styles/Colors";
import { getGreattings } from "../utils/util";
import * as Location from "expo-location";
import { StatusBar } from "react-native";
import { DevName } from "../styles/splash-screen";
import LocalInfoCard from "../widgets/LocalInfoCard";
import GlobalInfoCard from "../widgets/GlobalInfoCard";

const MainScreen = ({ app, logout, navigation }) => {
  const [location, setLocation] = useState(null);
  useEffect(() => {
    (async () => {
      let pos = await Location.getCurrentPositionAsync({});
      let add = await Location.reverseGeocodeAsync({
        longitude: pos.coords.longitude,
        latitude: pos.coords.latitude,
      });
      setLocation(add[0]);
    })();
  }, []);
  return (
    <MainConTainer>
      <StatusBar
        backgroundColor={Colors.black}
        animated={true}
        barStyle="light-content"
      />
      <UserView>
        <UserName>Hey, {app.user.first_name}</UserName>
        <LogoutBTN onPress={() => logout()}>
          <MaterialIcons name="logout" size={30} color={Colors.gray} />
        </LogoutBTN>
      </UserView>
      <Info>
        <Greatings>{getGreattings()}</Greatings>
        <TextSTC>Here is the daily update from your location</TextSTC>
      </Info>
      {location && <LocalInfoCard location={location} />}
      <GlobalInfoCard navigation={navigation}/>
      <DevName>jamilur-r</DevName>
    </MainConTainer>
  );
};
const mapStateToProps = (state) => ({
  app: state.app,
});
const mapDispatchToProps = (dispatch) => ({
  logout: () =>
    dispatch({
      type: "LOGOUT",
    }),
});
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
