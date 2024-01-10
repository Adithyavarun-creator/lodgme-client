import React, { useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useLoadScript } from '@react-google-maps/api';

import LogoMarker from "../../assets/lodgemeblacklogo.png";

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "20px",
  border: "2px solid #015151",
};

const MapBox = ({ lat, lng }) => {
  //console.log(lat, lng);

  const center = {
    lat: Number(lat),
    lng: Number(lng),
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAPS_API,
  });

  const [map, setMap] = useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const mapTheme = [
    {
      featureType: "all",
      elementType: "labels.text",
      stylers: [
        {
          color: "#878787",
        },
      ],
    },
    {
      featureType: "all",
      elementType: "labels.text.stroke",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "all",
      stylers: [
        {
          color: "#f9f5ed",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "all",
      stylers: [
        {
          color: "#f5f5f5",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#c9c9c9",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "all",
      stylers: [
        {
          color: "#aee0f4",
        },
      ],
    },
  ];

  return isLoaded ? (
    <div
      style={{
        display: "flex",
      }}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          mapTypeControl: false,
          styles: mapTheme,
        }}
      >
        <Marker
          position={center}
          options={{
            icon: {
              url: require("../../assets/maplogo.png"),
              scaledSize: {
                width: 70,
                height: 70,
              },
            },
          }}
        />
        <></>
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};

export default MapBox;
