import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { appReducer } from "./app-reducer";

const persistConfig = {
  //...
  key: "keepaway1147++",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  app: appReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
