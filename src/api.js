import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    appid: "edac8cc8da810053eb34612a3dcbfe05",
    units: "metric",
    lang: "kr",
  },
});

export const getWeather = ({ queryKey }) => {
  // const lat = "35.1798200522868";
  // const lon = "129.075087492149";

  // console.log(queryKey);
  const [wea, lat, lon] = queryKey;
  // console.log(wea);

  return instance.get(`${wea}?lat=${lat}&lon=${lon}`).then((res) => res.data);
};
