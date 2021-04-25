import React, { useEffect, useState } from "react";
import { MainConTainer, TextSTC } from "../styles/main-screen";
import { Header } from "../styles/search-screen";
import { StatusBar } from "react-native";
import { Colors } from "../styles/Colors";
import { Picker } from "@react-native-picker/picker";
import { getAllCountry } from "../utils/util";
import { DevName } from "../styles/splash-screen";
import { LinearGradient } from "expo-linear-gradient";
import LocalInfoCard from "../widgets/LocalInfoCard";

const SearchByCountry = () => {
  const [countries, setCountries] = useState(["Select Country"]);
  const [counter, setCounter] = useState(1);
  const [pick, setPicker] = useState("Select Country");
  useEffect(() => {
    (async () => {
      if (counter == 1) {
        let data = await getAllCountry();
        setCountries([...countries, ...data]);
        setCounter(counter + 1);
      }
    })();
  });
  return (
    <MainConTainer>
      <StatusBar
        backgroundColor={Colors.black}
        animated={true}
        barStyle="light-content"
      />
      <Header>
        <TextSTC size="30px" family="bold">
          Search By Country
        </TextSTC>
      </Header>
      <Picker
        selectedValue={pick}
        style={{
          width: "85%",
          height: 45,
          color: Colors.white,
          backgroundColor: Colors.lightBlack,
          padding: 10,
          fontFamily: "bold",
          marginTop: 15,
          marginBottom: 30,
        }}
        onValueChange={(value) => setPicker(value)}
      >
        {countries.map((item, k) => (
          <Picker.Item label={item} key={k} value={item} />
        ))}
      </Picker>
      {pick === "Select Country" ? (
        <LinearGradient
          style={{
            marginTop: 20,
            width: "85%",
            height: 170,
            borderRadius: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          colors={["#DB6A78", "#402455"]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <TextSTC size="30px" family="bold">
            Select A Country
          </TextSTC>
        </LinearGradient>
      ) : (
        <LocalInfoCard location={{country: pick}} type='search' />
      )}
      <DevName>jamilur-r</DevName>
    </MainConTainer>
  );
};

export default SearchByCountry;
