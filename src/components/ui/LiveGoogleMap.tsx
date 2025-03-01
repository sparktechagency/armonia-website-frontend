import { useEffect, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const defaultCenter = { lat: 37.7749, lng: -122.4194 }; // Default to San Francisco

const LiveGoogleMap = ({
  currentLocation,
}: {
  currentLocation?: { latitude?: number; longitude?: number };
}) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBFi80uuJIWkkLCpodFa8oXmD8XD_h8LMc", // Your API Key
  });

  const [mapCenter, setMapCenter] = useState(defaultCenter);

  // Update marker position without reloading
  useEffect(() => {
    if (currentLocation?.latitude && currentLocation?.longitude) {
      setMapCenter({
        lat: currentLocation.latitude,
        lng: currentLocation.longitude,
      });
    }
  }, [currentLocation]);

  if (!isLoaded) return <p>Loading...</p>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={mapCenter} zoom={17}>
      <Marker
        icon={{
          url: "/location.png", // Replace with your custom marker image URL
          scaledSize: new window.google.maps.Size(40, 40), // Adjust size
        }}
        position={mapCenter}
      />
    </GoogleMap>
  );
};

export default LiveGoogleMap;
