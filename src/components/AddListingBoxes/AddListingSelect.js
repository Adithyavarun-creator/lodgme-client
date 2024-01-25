export const AddListingSelectStyles = {
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "#333",
      // border: "0.8px solid #015151",
      height: "25px",
      textAlign: "center",
      borderRadius: "10px",
      width: "200px",
      padding: "6px",
      fontSize: "13px",
    };
  },
  option: (defaultStyles, state) => ({
    ...defaultStyles,
    color: state.isSelected ? "#015151" : "#fff",
    backgroundColor: state.isSelected ? "#fff" : "#015151",
  }),

  control: (defaultStyles) => ({
    ...defaultStyles,
    backgroundColor: "#fff",
    border: "none",
    boxShadow: "none",
    color: "#fff",
    fontSize: "18px",
    height: "45px",
    textAlign: "center",
    padding: "0px",
    width: "450px",
    border: "0.8px solid #015151",
    position: "relative",
    right: "2px",
    borderRadius: "10px",

    "@media only screen and (min-width: 1200px)": {
      ...AddListingSelectStyles["@media only screen and (min-width: 1200px)"],
      fontSize: "16px",
      height: "40px",
      backgroundColor: "#fff",
      borderRadius: "10px",
      textAlign: "center",
      padding: "0px",
      color: "#333",
      width: "420px",
      border: "0.8px solid #015151",
      position: "relative",
      right: "2px",
    },
    "@media (min-width: 768px) and (max-width: 1024px) ": {
      ...AddListingSelectStyles[
        "@media (min-width: 768px) and (max-width: 1024px) "
      ],
      fontSize: "14px",
      height: "40px",
      backgroundColor: "#fff",
      borderRadius: "10px",
      textAlign: "center",
      padding: "0px",
      color: "#333",
      width: "420px",
      border: "0.8px solid #015151",
      position: "relative",
      right: "2px",
    },
    "@media (min-width: 481px) and (max-width: 767px) ": {
      ...AddListingSelectStyles[
        "@media (min-width: 481px) and (max-width: 767px) "
      ],
      fontSize: "12px",
      height: "20px",
      backgroundColor: "#fff",
      borderRadius: "10px",
      textAlign: "center",
      color: "#333",
      width: "300px",
      border: "0.8px solid #015151",
      position: "relative",
      right: "2px",
    },
    "@media (min-width: 280px) and (max-width: 480px) ": {
      ...AddListingSelectStyles[
        "@media (min-width: 280px) and (max-width: 480px) "
      ],
      fontSize: "10px",
      height: "10px",
      backgroundColor: "#fff",
      borderRadius: "10px",
      textAlign: "center",
      color: "#333",
      width: "270px",
      border: "0.8px solid #015151",
      position: "relative",
      right: "2px",
    },
  }),
  singleValue: (defaultStyles) => ({
    ...defaultStyles,

    // color: "#015151",
    // border: "0.8px solid #015151",
    // height: "40px",
    // textAlign: "center",
    // fontSize: "20px",
    // borderRadius: "10px",
    // padding: "5px",
    // width: "700px",
  }),
};
