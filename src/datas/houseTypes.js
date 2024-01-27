import {
  faBuilding,
  faHotel,
  faHouseChimney,
  faLandmarkDome,
  faWheatAwn,
  faChessRook,
  faPersonShelter,
  faHouseSignal,
} from "@fortawesome/free-solid-svg-icons";

export const houseTypes = [
  { type: "Home", icon: faHouseChimney },
  { type: "Hotel", icon: faHotel },

  { type: "Apartment", icon: faBuilding },
  { type: "Hut", icon: faHouseSignal },
  { type: "Castle", icon: faChessRook },

  { type: "Mansion", icon: faHouseChimney },
  { type: "Lodge", icon: faHouseChimney },
  { type: "Tiny Home", icon: faPersonShelter },

  { type: "Farm House", icon: faWheatAwn },
  { type: "Dome", icon: faLandmarkDome },
];
