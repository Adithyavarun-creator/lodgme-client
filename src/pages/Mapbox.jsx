import React from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { FaLocationDot } from "react-icons/fa6";

function Mapbox() {
  const [viewport, setViewport] = React.useState({
    width: "50%",
    height: "100vh",
    latitude: 48.858093,
    longitude: 2.294694,
    zoom: 17,
  });
  const [showPopup, togglePopup] = React.useState(false);
  return (
    <div style={{ height: "430px", padding: "40px", borderRadius: "20px" }}>
      <ReactMapGL
        // width="100vw"
        // height="100vh"
        {...viewport}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={(viewport) => setViewport(viewport)}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_API}
      >
        {/* {showPopup && (
          <Popup
            latitude={10.86195853994233}
            longitude={106.74362380706191}
            closeButton={true}
            closeOnClick={true}
            onClose={() => togglePopup(false)}
            anchor="top-right"
          >
            <div>Pop up marker</div>
          </Popup>
        )} */}
        {/* 10.86195853994233, 106.74362380706191 */}
        {/* <Marker
          latitude={viewport.latitude}
          longitude={viewport.longitude}
          offsetLeft={-20}
          offsetTop={-30}
        >
          <FaLocationDot
            src="https://e7.pngegg.com/pngimages/409/413/png-clipart-map-drawing-pin-map-marker-angle-heart-thumbnail.png"
            style={{
              height: "50px",
              width: "50px",
            }}
          />
        </Marker> */}
      </ReactMapGL>
    </div>
  );
}

export default Mapbox;
