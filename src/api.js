import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    appid: "edac8cc8da810053eb34612a3dcbfe05",
    units: "metric",
    lang: "kr",
  },
});

export const getWeather = () => {
  const lat = "35.1798200522868";
  const lon = "129.075087492149";

  return instance.get(`weather?lat=${lat}&lon=${lon}`).then((res) => res.data);
};
