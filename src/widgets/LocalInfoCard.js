import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  RedBadge,
  TextSTC,
  TopInfo,
  Wrapper,
  DataWrapper,
  DataView,
} from "../styles/main-screen";
import { getCovidData } from "../utils/util";

const LocalInfoCard = ({ location, type }) => {
  const [current, setCurrent] = useState({
    active: "0k",
    confirmed: "0K",
    deaths: "0k",
    recovered: "0k",
    new_confirmed: "0K",
  });
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    (async () => {
      if (type == "search") {
        let data = await getCovidData(location ? location.country : null);
        setCurrent(data);
      } else {
        if (counter == 2) {
          let data = await getCovidData(location ? location.country : null);
          setCurrent(data);
          setCounter(counter + 1);
        }
        if (counter < 2) {
          setCounter(counter + 1);
        }
      }
    })();
  });
  return (
    <LinearGradient
      style={{ marginTop: 20, width: "85%", height: 310, borderRadius: 5 }}
      colors={["#876ADB", "#402455"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <Wrapper>
        <TopInfo>
          <TextSTC size="16px" family="med">
            {location ? location.country : ""}
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
            <TextSTC size="16px">New affected</TextSTC>
            <TextSTC size="43px" family="bold">
              {current.new_confirmed}
            </TextSTC>
          </DataView>
        </DataWrapper>
        <DataWrapper>
          <DataView>
            <TextSTC size="16px">Total Deaths</TextSTC>
            <TextSTC size="43px" family="bold">
              {current.deaths}
            </TextSTC>
          </DataView>
          <DataView>
            <TextSTC size="16px">Active Cases</TextSTC>
            <TextSTC size="43px" family="bold">
              {current.active}
            </TextSTC>
          </DataView>
        </DataWrapper>
      </Wrapper>
    </LinearGradient>
  );
};

export default LocalInfoCard;
