import { useEffect, useState } from "react";

export default () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setError] = useState("");

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        // setState to update states!!!!
        setLat(position.coords.latitude);
      },
      err => {
        setError(err.message);
      }
    );
  }, []);

  return [lat, errorMessage];
};
