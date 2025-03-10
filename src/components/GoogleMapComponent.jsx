import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 22.7217, // Latitude for Indore Airport
  lng: 75.8011, // Longitude for Indore Airport
};

const GoogleMapComponent = () => {
  return (
    <LoadScript  googleMapsApiKey="AIzaSyCFTiEQmBrD3tT8s2s9kFemA-6ktONKlwE">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
