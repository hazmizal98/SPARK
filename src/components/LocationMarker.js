import {Icon} from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/lightning-bolt'

const LocationMarker = ({ lat, lng, onclick}) => {
    return (
        <div classname = "location-marker" onClick ={onclick}>
            <Icon icon = {locationIcon} className = "location-icon" />
            
        </div>
    )
}


export default LocationMarker
