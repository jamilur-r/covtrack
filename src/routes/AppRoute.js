import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";
import MainScreen from "../views/MainScreen";
import SplashScreen from "../views/SplashScreen";
import SigninScreen from "../views/SigninScreen";
import SearchByCountry from "../views/SearchByCountry";

const Stack = createStackNavigator();

const AppRoute = ({ auth }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {auth.isAuth ? (
          <>
            <Stack.Screen name="main-screen" component={MainScreen} />
            <Stack.Screen name="search-screen" component={SearchByCountry} />
          </>
        ) : (
          <>
            <Stack.Screen name="splash-screen" component={SplashScreen} />
            <Stack.Screen name="signin-screen" component={SigninScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const mapStateToProps = (state) => ({
  auth: state.app,
});
export default connect(mapStateToProps)(AppRoute);
