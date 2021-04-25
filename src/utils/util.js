import axios from "axios";
import slugify from "slugify";

export const getGreattings = () => {
  let date = new Date();
  if (date.getHours() >= 12) {
    return "Stay Home, Stay Safe";
  } else {
    return "Good Morning";
  }
};
const formatNumbers = (value) => {
  var newValue = value;
  if (value >= 1000) {
    var suffixes = ["", "k", "m", "b", "t"];
    var suffixNum = Math.floor(("" + value).length / 3);
    var shortValue = "";
    for (var precision = 2; precision >= 1; precision--) {
      shortValue = parseFloat(
        (suffixNum != 0
          ? value / Math.pow(1000, suffixNum)
          : value
        ).toPrecision(precision)
      );
      var dotLessShortValue = (shortValue + "").replace(/[^a-zA-Z 0-9]+/g, "");
      if (dotLessShortValue.length <= 2) {
        break;
      }
    }
    if (shortValue % 1 != 0) shortValue = shortValue.toFixed(1);
    newValue = shortValue + " " + suffixes[suffixNum];
  }
  return newValue;
};

export const getCovidData = async (country) => {
  if (country) {
    let slug = slugify(country.toLowerCase());
    let data = await axios.get(
      `https://api.covid19api.com/live/country/${slug}/status/confirmed`
    );
    let dataNew = data.data[data.data.length - 1];
    let dataOld = data.data[data.data.length - 2];

    let computed = {
      active: formatNumbers(dataNew.Active),
      confirmed: formatNumbers(dataNew.Confirmed),
      deaths: formatNumbers(dataNew.Deaths),
      recovered: formatNumbers(dataNew.Recovered),
      new_confirmed: formatNumbers(dataNew.Confirmed - dataOld.Confirmed),
    };
    return computed;
  } else {
    let computed = {
      active: "0k",
      confirmed: "0K",
      deaths: "0k",
      recovered: "0k",
      new_confirmed: "0K",
    };
    return computed;
  }
};

export const getGlobalData = async () => {
  let data = await axios.get(`https://api.covid19api.com/summary`);
  let computed = {
    confirmed: formatNumbers(data.data.Global.TotalConfirmed),
    deaths: formatNumbers(data.data.Global.TotalDeaths),
  };
  return computed;
};

export const getAllCountry = async () => {
  let data = await axios.get("https://api.covid19api.com/countries");
  let computed = [];
  data.data.map((item) => computed.push(item.Country));
  computed.sort()
  return computed
};
