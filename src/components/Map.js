import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import * as markerData from "./Markers.json"

const Map = ({center, zoom}) => {
    return(
        <div className = "map">
            <GoogleMapReact
                bootstrapURLKeys = {{key:'AIzaSyAE8OtPNBeTZmmmaI5_YsXWzyB-ghi3fFw'}}
                defaultCenter = {center}
                defaultZoom = {zoom}
            >
                <LocationMarker lat = {1.306090} lng = {103.788719}/>
                <LocationMarker lat = {1.3355838} lng = {103.744719} />


            </GoogleMapReact>

            
        </div>
    )
}

//const google = window.google



Map.defaultProps = {
    center : {
        lat: 1.352083,
        lng: 103.8198390 
    },
    zoom: 18
}
export default Map
