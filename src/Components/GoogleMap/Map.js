import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '700px',
  height: '700px'
};

const location = {
  lat: 23.762105,
  lng: 90.366506
};

const onLoad = marker => {
  console.log('marker: ', marker)
}

function Map() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBX45trO7ljKYTLD9B0zOnoEOvLQp9DzNY"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={14}
      >
        { /* Child components, such as markers, info windows, etc. */}
        <Marker
          onLoad={onLoad}
          position={location}
        />

      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)