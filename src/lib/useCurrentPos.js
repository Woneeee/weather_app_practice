import { useState } from "react";

export const useCurrentPos = () => {
  const defaultlat = "35.1798200522868";
  const defaultlon = "129.075087492149";
  const [lat, setLat] = useState(defaultlat);
  const [lon, setLon] = useState(defaultlon);

  const location = ({ coords: { latitude, longitude } }) => {
    // console.log(latitude, longitude);

    setLat(latitude);
    setLon(longitude);
  };

  navigator.geolocation.getCurrentPosition(location);

  return {
    lat,
    lon,
  };
};
