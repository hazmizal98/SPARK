import React, {useState, useEffect} from "react";
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from "react-google-maps"
import * as chargingData from "./components/Markers.json";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import{
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

function Map(){
  const [selectedCharger, setSelectedCharger] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedCharger(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return(
   <GoogleMap 
  defaultZoom = {10} 
  defaultCenter = {{lat: 1.352083, lng: 103.8198390}}
  >
      {chargingData.features.map((charger) =>(
        <Marker key={charger.properties.CHARGER_ID} 
        position = {{
          lat: charger.geometry.coordinates[1],
          lng: charger.geometry.coordinates[0]
         }}
         onClick = {() => {
           setSelectedCharger(charger);           
         }}
         icon={{
           url: "/Charging.png",
           scaledSize: new window.google.maps.Size(25,25)


         }}
      />
      ))}

      {selectedCharger &&(
        <InfoWindow        
          position = {{
            lat: selectedCharger.geometry.coordinates[1],
            lng: selectedCharger.geometry.coordinates[0]
         }}
         onCloseClick={() =>{
           setSelectedCharger(null);
         }}         
         >
          <div>
            <h2>{selectedCharger.properties.CHARGER_ID}</h2>
            <h2>{selectedCharger.properties.address}</h2>
            <h2>{selectedCharger.properties.numberOfChargers}</h2>
            <p>{selectedCharger.properties.connectorType}</p>
            <p>{selectedCharger.properties.chargingFees}</p>
            <p>{selectedCharger.properties.maxIdleFee}</p>
            <p>{selectedCharger.properties.wattage}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>

  );
}

const WrapppedMap = withScriptjs(withGoogleMap(Map));

export default function App(){
  return (
  <div style = {{width: '100vw', height: '100vh' }}>
    <WrapppedMap 
      googleMapURL = {'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAE8OtPNBeTZmmmaI5_YsXWzyB-ghi3fFw'}
      loadingElement ={<div style = {{height : "100%"}}/>}
      containerElement ={<div style = {{height : "100%"}}/>}
      mapElement ={<div style = {{height : "100%"}}/>}
    />
  </div>
  );
}