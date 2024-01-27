import React, { useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const Mapbox = ({ lat, lng }) => {
  const [markers, setMarkers] = useState({
    latitude: lat ? lat : 48.858093,
    longitude: lng ? lng : 2.294694,
  });

  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  });
  L.Marker.prototype.options.icon = DefaultIcon;

  return (
    <>
      <div style={{ height: "350px", width: "100%", zIndex: "-10" }}>
        <MapContainer
          center={[markers.latitude, markers.longitude]}
          zoom={17}
          maxZoom={18}
          minZoom={5}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          style={{ height: "400px" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <Marker position={[markers.latitude, markers.longitude]}></Marker>
        </MapContainer>
      </div>
    </>
  );
};

export default Mapbox;

// import "leaflet/dist/leaflet.css";
// import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
// import "leaflet-defaulticon-compatibility";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import { useRef } from "react";

// const Mapbox = ({ lat, lng }) => {
//   // console.log(lat,lng);
//   const mapRef = useRef(null);
//   const markerRef = useRef(null);

//   const MAP_CENTER = [52.52, 13.405];
//   const MARKER_POSITION = [52.49913882549316, 13.418318969833383];

//   const onClickShowMarker = () => {
//     const map = mapRef.current;
//     if (!map) {
//       return;
//     }

//     map.flyTo(MARKER_POSITION, 13);

//     const marker = markerRef.current;
//     if (marker) {
//       marker.openPopup();
//     }
//   };

//   return (
//     <div className="" style={{ padding: "20px", width: "100%" }}>
//       <MapContainer
//         whenCreated={(map) => {
//           mapRef.current = map;
//         }}
//         style={{ width: "100%", height: 500 }}
//         center={MAP_CENTER}
//         zoom={13}
//       >
//         <TileLayer
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker ref={markerRef} position={MARKER_POSITION}>
//           <Popup>Hello I'm a popup!</Popup>
//         </Marker>
//       </MapContainer>

//       {/* <button onClick={onClickShowMarker}>Show marker</button> */}
//     </div>
//   );
// };

// export default Mapbox;

/**
 //   <Popup>
        //     A pretty CSS3 popup. <br /> Easily customizable.
        //   </Popup>
        // </Marker>
 */
