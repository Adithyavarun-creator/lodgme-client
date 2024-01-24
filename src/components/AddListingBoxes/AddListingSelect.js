export const AddListingSelectStyles = {
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "#333",
      border: "0.8px solid #015151",
      height: "40px",
      textAlign: "center",
      borderRadius: "10px",
      width: "100%",
      padding: "10px",
      fontSize: "16px",
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
    height: "40px",
    textAlign: "center",
    padding: "0px",

    "@media only screen and (min-width: 1200px)": {
      ...AddListingSelectStyles["@media only screen and (min-width: 1200px)"],
      fontSize: "16px",
      height: "40px",
      backgroundColor: "#fff",
      borderRadius: "10px",
      textAlign: "center",
      padding: "0px",
      color: "#333",
      width: "100%",
    },
    "@media (min-width: 768px) and (max-width: 1024px) ": {
      ...AddListingSelectStyles[
        "@media (min-width: 768px) and (max-width: 1024px) "
      ],
      fontSize: "14px",
      height: "30px",
      backgroundColor: "#015151",
      borderRadius: "10px",
      textAlign: "center",
      // width: "150px",
      padding: "0px",
      width: "600px",

      //width: "300px",
    },
    "@media (min-width: 481px) and (max-width: 767px) ": {
      ...AddListingSelectStyles[
        "@media (min-width: 481px) and (max-width: 767px) "
      ],
      fontSize: "12px",
      backgroundColor: "#015151",
      borderRadius: "10px",
      height: "30px",
      textAlign: "center",
      padding: "0px",
      // width: "150px",
      //width: "300px",
    },
    "@media (min-width: 280px) and (max-width: 480px) ": {
      ...AddListingSelectStyles[
        "@media (min-width: 280px) and (max-width: 480px) "
      ],
      fontSize: "12px",
      backgroundColor: "#015151",
      height: "25px",
      borderRadius: "10px",
      textAlign: "center",
      width: "180px",
      padding: "0px",
    },
  }),
  singleValue: (defaultStyles) => ({
    ...defaultStyles,
    color: "#015151",
    border: "0.8px solid #015151",
    height: "40px",
    textAlign: "center",
    fontSize: "20px",
    borderRadius: "10px",
    padding: "5px",
    width: "100%",
  }),
};
