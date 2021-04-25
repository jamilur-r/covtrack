import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  RedBadge,
  TextSTC,
  TopInfo,
  Wrapper,
  DataWrapper,
  DataView,
  GetByCountry,
} from "../styles/main-screen";
import { getGlobalData } from "../utils/util";
import { Feather } from "@expo/vector-icons";

const GlobalInfoCard = ({ navigation }) => {
  const [current, setCurrent] = useState({
    confirmed: "0K",
    deaths: "0k",
  });
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    (async () => {
      if (counter == 1) {
        let data = await getGlobalData();
        setCurrent(data);
        setCounter(counter + 1);
      }
    })();
  });

  return (
    <LinearGradient
      style={{ marginTop: 20, width: "85%", height: 170, borderRadius: 5 }}
      colors={["#DB6A78", "#402455"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <Wrapper>
        <GetByCountry
          onPress={() => {
            navigation.navigate("search-screen");
          }}
        >
          <Feather name="arrow-right" size={30} color="#fff" />
        </GetByCountry>
        <TopInfo>
          <TextSTC size="16px" family="med">
            Global
          </TextSTC>
          <RedBadge>
            <TextSTC size="12px" family="norm">
              Live
            </TextSTC>
          </RedBadge>
        </TopInfo>
        <DataWrapper>
          <DataView>
            <TextSTC size="16px">Total affected</TextSTC>
            <TextSTC size="43px" family="bold">
              {current.confirmed}
            </TextSTC>
          </DataView>
          <DataView>
            <TextSTC size="16px">Total Deaths</TextSTC>
            <TextSTC size="43px" family="bold">
              {current.deaths}
            </TextSTC>
          </DataView>
        </DataWrapper>
      </Wrapper>
    </LinearGradient>
  );
};

export default GlobalInfoCard;
