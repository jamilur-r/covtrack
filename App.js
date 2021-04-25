import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import AppRoute from "./src/routes/AppRoute";
import { persistor, store } from "./src/store";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import * as Location from "expo-location";
import { useEffect } from "react";
import { useState } from "react";
import SnackBar from "react-native-snackbar-component";

export default function App() {
  const [showSnack, setShow] = useState(false);

  let [fontloaded] = useFonts({
    norm: Poppins_400Regular,
    semi: Poppins_600SemiBold,
    med: Poppins_500Medium,
    bold: Poppins_700Bold,
  });

  useEffect(() => {
    (async () => {
      let service_status = await Location.hasServicesEnabledAsync();
      if (service_status) {
        let permission_status = await Location.getForegroundPermissionsAsync();
        if (permission_status.granted === false) {
          await Location.requestForegroundPermissionsAsync();
        }
      } else {
        setShow(true);
      }
    })();
  }, []);
  if (!fontloaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<AppLoading />}>
          <AppRoute />
          <SnackBar
            visible={showSnack}
            textMessage="Please enable location"
            actionHandler={() => setShow(false)}
            actionText="Close"
          />
        </PersistGate>
      </Provider>
    );
  }
}
