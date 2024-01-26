// import React from "react";
// import ReactMapGL, { Marker, Popup } from "react-map-gl";
// import { FaLocationDot } from "react-icons/fa6";
// // import markerIconPng from "leaflet/dist/images/marker-icon.png";
// import markerIcon from "../../node_modules/leaflet/dist/images/marker-icon.png";
// import L from "leaflet";
// import { FaBuilding } from "react-icons/fa6";

// function Mapbox() {
//   const [viewport, setViewport] = React.useState({
//     // width: "50%",
//     // height: "100vh",
//     latitude: 27.173891,
//     longitude: 78.042068,
//     zoom: 15,
//   });

//   const [showPopup, togglePopup] = React.useState(false);

//   return (
//     <div style={{ height: "530px", padding: "40px", borderRadius: "20px" }}>
//       <ReactMapGL
//         width="100vw"
//         height="500px"
//         {...viewport}
//         mapStyle="mapbox://styles/mapbox/streets-v11"
//         onViewportChange={(viewport) => setViewport(viewport)}
//         mapboxAccessToken={process.env.REACT_APP_MAPBOX_API}
//       >
//         {/* <Marker
//           position={[27.173891, 78.042068]}
//           icon={
//             new Icon({
//               iconUrl: markerIconPng,
//               iconSize: [25, 41],
//               iconAnchor: [12, 41],
//             })
//           }
//         /> */}

//         {/* {showPopup && (
//            <Popup
//              latitude={10.86195853994233}
//              longitude={106.74362380706191}
//              closeButton={true}
//              closeOnClick={true}
//              onClose={() => togglePopup(false)}
//              anchor="top-right"
//            >
//              <div>Pop up marker</div>
//            </Popup>
//          )} */}
//         {/* 10.86195853994233, 106.74362380706191 */}
//         {/* <Marker
//           latitude={viewport.latitude}
//           longitude={viewport.longitude}
//           offsetLeft={-20}
//           offsetTop={-30}
//         >
//           <FaLocationDot
//             src="https://e7.pngegg.com/pngimages/409/413/png-clipart-map-drawing-pin-map-marker-angle-heart-thumbnail.png"
//             style={{
//               height: "50px",
//               width: "50px",
//             }}
//           />
//         </Marker> */}
//       </ReactMapGL>
//     </div>
//   );
// }

// export default Mapbox;
// import React from "react";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";
// import { MapContainer, TileLayer, Marker } from "react-leaflet";
// import icon from "leaflet/dist/images/marker-icon.png";
// import iconShadow from "leaflet/dist/images/marker-shadow.png";

// class Mapbox extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       markers: [[48.858093, 2.294694]],
//     };
//   }

//   addMarker = (e) => {
//     const { markers } = this.state;
//     markers.pop();
//     markers.push(e.latlng);
//     this.setState({ markers });
//   };

//   render() {
//     console.log(this.state);

//     let DefaultIcon = L.icon({
//       iconUrl: icon,
//       shadowUrl: iconShadow,
//     });
//     L.Marker.prototype.options.icon = DefaultIcon;

//     return (
//       <div style={{ width: "100%", height: "400px" }}>
//         <MapContainer
//           center={[48.858093, 2.294694]}
//           onClick={this.addMarker}
//           zoom={13}
//           maxZoom={18}
//           minZoom={5}
//           style={{ width: "100%", height: "400px" }}
//         >
//           <TileLayer
//             attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//             url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
//           />
//           {this.state.markers.map((position, idx) => (
//             <Marker key={`marker-${idx}`} position={position}></Marker>
//           ))}
//         </MapContainer>
//       </div>
//     );
//   }
// }

// export default Mapbox;

import React, { useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
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
    <div style={{ width: "100%", height: "400px", padding: "30px" }}>
      <MapContainer
        center={[markers.latitude, markers.longitude]}
        zoom={15}
        maxZoom={18}
        minZoom={5}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={[markers.latitude, markers.longitude]}></Marker>
      </MapContainer>
    </div>
  );
};

export default Mapbox;
